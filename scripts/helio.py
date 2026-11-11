#!/usr/bin/env python3
"""HELIO runtime client (standard library only). Uses HELIO's internal, undocumented API.

Set HELIO_URL on every call, e.g. HELIO_URL=https://192.168.57.1:8443/helio
Login uses HELIO_USER / HELIO_PASS.

  helio.py info                        version, target, license, projects, connections (no login)
  helio.py login                       sign in; the session is kept for later calls
  helio.py logout                      sign out and delete the local session
  helio.py projects                    list projects
  helio.py get <name> <out.json>       download a project
  helio.py put <name> <file.json>      WRITE a project (creates or overwrites)
  helio.py delete <name>               DELETE a project (refuses built-in templates; back it up with get first)
  helio.py connections                 connections and state (needs login; secrets not shown)
  helio.py tree <connection> <regex>   search a connection's browsed tree (needs login)
  helio.py test-opcua <opc.tcp://...>  test anonymous, unsecured OPC UA (changes nothing)

Importable: q(query, variables), hyperion_connect(), hyperion_read(ws, key, args).
"""
import base64
import json
import os
import re
import secrets
import socket
import ssl
import stat
import struct
import sys
import tempfile
import time
import urllib.parse
import urllib.request

CTX = ssl.create_default_context()
CTX.check_hostname = False  # the ctrlX certificate is self-signed
CTX.verify_mode = ssl.CERT_NONE


def base():
    url = os.environ.get("HELIO_URL", "").rstrip("/")
    if not url:
        sys.exit("Set HELIO_URL, e.g. HELIO_URL=https://<host>:8443/helio. Ask the user for the address.")
    return url


def _session_file():
    return os.path.join(tempfile.gettempdir(), f"helio-session-{os.getuid()}")


def sid():
    """The client creates its own session ID: 20 random bytes, base64url, no padding."""
    path = _session_file()
    if not os.path.exists(path):
        value = base64.urlsafe_b64encode(secrets.token_bytes(20)).decode().rstrip("=")
        fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL, stat.S_IRUSR | stat.S_IWUSR)
        with os.fdopen(fd, "w") as f:
            f.write(value)
    with open(path) as f:
        return f.read().strip()


def q(query, variables=None, timeout=60):
    req = urllib.request.Request(
        base() + "/graphql",
        json.dumps({"query": query, "variables": variables or {}}).encode(),
        {"content-type": "application/json", "authorization": "Bearer " + sid()},
    )
    return json.load(urllib.request.urlopen(req, timeout=timeout, context=CTX))


def data(result):
    if result.get("errors"):
        sys.exit("GraphQL error: " + json.dumps(result["errors"])[:500])
    return result["data"]


def login():
    user, password = os.environ.get("HELIO_USER"), os.environ.get("HELIO_PASS")
    if not user or password is None:
        sys.exit("Set HELIO_USER and HELIO_PASS.")
    m = "mutation($u:String!,$p:String!){login(username:$u,password:$p){user{userId displayName}}}"
    return data(q(m, {"u": user, "p": password}))["login"]["user"]


def read_file(path, origin="Projects"):
    m = "query($p:String!,$o:FilePathOrigin){readFile(path:$p,options:{origin:$o})}"
    x = data(q(m, {"p": path, "o": origin}))["readFile"]
    return base64.b64decode(x + "=" * (-len(x) % 4))


def write_project(name, content):
    m = "mutation($p:String!,$c:String!){writeFile(path:$p,content:$c,options:{origin:Projects})}"
    return data(q(m, {"p": f"/{name}.json", "c": base64.b64encode(content).decode()}))


def projects():
    return data(q("{projects{name path type isBuiltinTemplate error runtimeUrl editorUrl}}"))["projects"]


class _WS:
    """Just enough of a WebSocket client for the Hyperion protocol."""

    def __init__(self, url):
        u = urllib.parse.urlsplit(url)
        port = u.port or (443 if u.scheme == "https" else 80)
        sock = socket.create_connection((u.hostname, port), timeout=30)
        if u.scheme == "https":
            ctx = ssl.create_default_context()
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE
            ctx.set_alpn_protocols(["http/1.1"])
            sock = ctx.wrap_socket(sock, server_hostname=u.hostname)
        self.sock = sock
        key = base64.b64encode(secrets.token_bytes(16)).decode()
        sock.sendall(
            (f"GET {u.path}/hyperion HTTP/1.1\r\nHost: {u.hostname}:{port}\r\nUpgrade: websocket\r\n"
             f"Connection: Upgrade\r\nSec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n").encode()
        )
        buf = b""
        while b"\r\n\r\n" not in buf:
            buf += sock.recv(4096)
        head, self.buf = buf.split(b"\r\n\r\n", 1)
        if b" 101" not in head.split(b"\r\n")[0]:
            raise RuntimeError(head[:200])

    def _read(self, n):
        while len(self.buf) < n:
            d = self.sock.recv(65536)
            if not d:
                raise EOFError
            self.buf += d
        r, self.buf = self.buf[:n], self.buf[n:]
        return r

    def send(self, obj):
        p, mask, n = json.dumps(obj).encode(), secrets.token_bytes(4), None
        n = len(p)
        if n < 126:
            head = bytes([0x81, 0x80 | n])
        elif n < 65536:
            head = bytes([0x81, 0xFE]) + struct.pack(">H", n)
        else:
            head = bytes([0x81, 0xFF]) + struct.pack(">Q", n)
        self.sock.sendall(head + mask + bytes(c ^ mask[i % 4] for i, c in enumerate(p)))

    def recv(self, timeout=15):
        self.sock.settimeout(timeout)
        out = b""
        while True:
            a, b = self._read(2)
            op, n = a & 15, b & 127
            if n == 126:
                n = struct.unpack(">H", self._read(2))[0]
            elif n == 127:
                n = struct.unpack(">Q", self._read(8))[0]
            d = self._read(n)
            if op == 9:
                self.sock.sendall(b"\x8a\x80\0\0\0\0")
            elif op == 8:
                raise EOFError("closed")
            elif op in (0, 1, 2):
                out += d
                if a & 0x80:
                    return json.loads(out)


def hyperion_connect():
    ws = _WS(base())
    ws.send({"type": "Connect", "options": {"authorization": "Bearer " + sid()}})
    return ws


def hyperion_read(ws, key, args=None, timeout=20):
    """Keys: connections, config, dataVariableValue, dataVariableData.

    dataVariableValue args: {"env": {"mode": "Runtime", "projectId": <name>}, "path": "/A/B"}.
    It times out unless a client has loaded that project.
    """
    rid = secrets.token_hex(8)
    ws.send({"type": "ReadValueRequest", "id": rid, "key": key, "args": args or {}})
    end = time.time() + timeout
    while time.time() < end:
        m = ws.recv(timeout)
        for x in m if isinstance(m, list) and m and m[0] is not None else [m]:
            if isinstance(x, dict) and x.get("id") == rid:
                return x
    raise TimeoutError(key)


def _helio_version():
    html = urllib.request.urlopen(base() + "/", context=CTX, timeout=20).read().decode(errors="replace")
    script = re.search(r'src="(index\.[^"]+\.js)"', html)
    if not script:
        return "unknown"
    js = urllib.request.urlopen(f"{base()}/{script.group(1)}", context=CTX, timeout=60).read().decode(errors="replace")
    m = re.search(r'const \w+="(\d+\.\d+\.\d+)",\w+=`HELIO \$\{', js)
    return m.group(1) if m else "unknown"


def _tree(connection):
    ws = hyperion_connect()
    conns = hyperion_read(ws, "config")["value"]["connections"]
    match = [(k, v) for k, v in conns.items() if v and (k == connection or v.get("name") == connection)]
    if not match:
        sys.exit("No such connection. Have: " + ", ".join(str(v.get("name")) for v in conns.values() if v))
    nodes = match[0][1].get("knownData") or []
    by_id = {n["id"]: n for n in nodes}
    out = {}

    def walk(node, path):
        for child in node.get("children") or []:
            n = by_id.get(child.get("$heDataId"))
            if n:
                p = f"{path}/{n['name']}"
                out[p] = n
                walk(n, p)

    if "$heRoot" in by_id:
        walk(by_id["$heRoot"], "")
    return out


def main():
    a = sys.argv[1:]
    cmd = a[0] if a else ""
    if cmd == "info":
        r = data(q("{runtimeTarget effectiveLicense{status name expiryDate limits{maxProjects maxDataSources maxVariables maxClients}}}"))
        health = json.load(urllib.request.urlopen(base() + "/health", context=CTX, timeout=15))
        print("HELIO version:", _helio_version(), "| app server:", health.get("version"), "| target:", r["runtimeTarget"])
        print("license:", json.dumps(r["effectiveLicense"]))
        print("connections:", health.get("connections"))
        for p in projects():
            print("project:", p["name"], "(built-in)" if p["isBuiltinTemplate"] else "", p["error"] or "")
    elif cmd == "login":
        print(login())
    elif cmd == "logout":
        print(data(q("mutation{logout}")))
        os.remove(_session_file())
    elif cmd == "projects":
        for p in projects():
            print(json.dumps(p))
    elif cmd == "get" and len(a) == 3:
        open(a[2], "wb").write(read_file(f"/{a[1]}.json"))
        print("saved", a[2])
    elif cmd == "put" and len(a) == 3:
        content = open(a[2], "rb").read()
        print(write_project(a[1], content))
        print("read back identical:", read_file(f"/{a[1]}.json") == content)
        print([p for p in projects() if p["name"] == a[1]])
    elif cmd == "delete" and len(a) == 2:
        match = [x for x in projects() if x["name"] == a[1]]
        if not match:
            sys.exit("No such project: " + a[1])
        if match[0].get("isBuiltinTemplate"):
            sys.exit("Refusing to delete a built-in template: " + a[1])
        print(data(q("mutation($p:String!){unlinkFile(path:$p,options:{origin:Projects})}", {"p": match[0]["path"]})))
    elif cmd == "connections":
        ws = hyperion_connect()
        states = hyperion_read(ws, "connections")["value"]
        cfg = hyperion_read(ws, "config")["value"]["connections"]
        for k, v in states.items():
            c = cfg.get(k) or {}
            print(k, v, c.get("$heServiceId"), c.get("mountPath"), "tree nodes:", len(c.get("knownData") or []))
    elif cmd == "tree" and len(a) == 3:
        pat = re.compile(a[2], re.I)
        tree = _tree(a[1])
        print(len(tree), "nodes")
        for p, n in tree.items():
            if pat.search(p):
                print(f"{p}  {n.get('type')} {(n.get('config') or {}).get('type') or ''}  link={(n.get('link') or {}).get('path')}")
    elif cmd == "test-opcua" and len(a) == 2:
        m = "mutation($s:String!,$p:JSON!){testConnection(serviceId:$s,serviceProps:$p){success errorKind errorMessage}}"
        props = {"url": a[1], "securityMode": "None", "securityPolicy": None, "certificateVerification": {"type": "AcceptAll"}}
        print(data(q(m, {"s": "com.helio-hmi.builtin.Opcua", "p": props})))
    else:
        print(__doc__)
        sys.exit(2)


if __name__ == "__main__":
    main()
