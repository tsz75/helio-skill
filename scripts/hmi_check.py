#!/usr/bin/env python3
"""Load a HELIO HMI in headless Chrome and report what an operator would actually get.

usage: hmi_check.py <runtime url> <out.png> [wait seconds]

Prints the on-screen text, the raw value or error HELIO delivered for every data
variable on screen, and console errors. Saves a screenshot. Set:
  WIN=1180,820       window size (default 1920,1080)
  CLICK="Page name"  click the element with exactly this text, wait, save <out>-2.png
  CLICKWAIT=8        seconds to wait after the click
  TXT=1800           how much on-screen text to print
  CHROME=<path>      Chrome/Chromium/Edge binary, if it isn't found on its own

An unreadable node renders blank in the HMI, so "ERR ..." under VALUES is the signal to look for.
Only variables on screen are subscribed: an off-screen one won't be listed.
"""
import base64
import json
import os
import secrets
import shutil
import signal
import socket
import struct
import subprocess
import sys
import tempfile
import time
import urllib.request


def free_port():
    """A fixed port could attach to a leftover Chrome and report that page's errors."""
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def find_chrome():
    """The Chrome binary: $CHROME, then PATH, then the usual Windows/macOS install places."""
    if os.environ.get("CHROME"):
        return os.environ["CHROME"]
    for name in ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome"):
        if shutil.which(name):
            return shutil.which(name)
    places = ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"]
    for root in (os.environ.get("PROGRAMFILES"), os.environ.get("PROGRAMFILES(X86)"), os.environ.get("LOCALAPPDATA")):
        if root:
            places += [os.path.join(root, r"Google\Chrome\Application\chrome.exe"),
                       os.path.join(root, r"Microsoft\Edge\Application\msedge.exe")]
    for path in places:
        if os.path.isfile(path):
            return path
    sys.exit("Chrome not found: install it or set CHROME to its path")


def kill_tree(proc):
    """Chrome's child processes too, or they keep the profile directory locked."""
    if os.name == "nt":
        subprocess.run(["taskkill", "/F", "/T", "/PID", str(proc.pid)],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    else:
        os.killpg(proc.pid, signal.SIGKILL)
    proc.wait()


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    url, out = sys.argv[1], sys.argv[2]
    wait = int(sys.argv[3]) if len(sys.argv) > 3 else 20
    profile = tempfile.mkdtemp(prefix="helio-chrome-")
    port = free_port()
    chrome = subprocess.Popen(
        [find_chrome(), "--headless=new", "--no-sandbox", "--disable-gpu", "--ignore-certificate-errors",
         f"--remote-debugging-port={port}", "--remote-allow-origins=*", f"--user-data-dir={profile}",
         "--window-size=" + os.environ.get("WIN", "1920,1080"), "about:blank"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=os.name != "nt")
    try:
        run(url, out, wait, port)
    finally:
        kill_tree(chrome)
        shutil.rmtree(profile, ignore_errors=True)


def run(url, out, wait, PORT):
    target = None
    for _ in range(40):
        try:
            pages = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json"))
            target = [x for x in pages if x["type"] == "page"][0]
            break
        except Exception:
            time.sleep(0.5)
    if target is None:
        sys.exit("Chrome did not start")
    path = target["webSocketDebuggerUrl"].split(f":{PORT}", 1)[1]
    sock = socket.create_connection(("127.0.0.1", PORT), timeout=60)
    key = base64.b64encode(secrets.token_bytes(16)).decode()
    sock.sendall(
        (f"GET {path} HTTP/1.1\r\nHost: 127.0.0.1:{PORT}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n"
         f"Sec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n").encode())
    state = {"buf": b""}
    while b"\r\n\r\n" not in state["buf"]:
        state["buf"] += sock.recv(4096)
    state["buf"] = state["buf"].split(b"\r\n\r\n", 1)[1]

    def read(n):
        while len(state["buf"]) < n:
            d = sock.recv(1 << 20)
            if not d:
                raise EOFError
            state["buf"] += d
        r, state["buf"] = state["buf"][:n], state["buf"][n:]
        return r

    def recv():
        data = b""
        while True:
            a, b = read(2)
            n = b & 127
            if n == 126:
                n = struct.unpack(">H", read(2))[0]
            elif n == 127:
                n = struct.unpack(">Q", read(8))[0]
            data += read(n)
            if a & 0x80:
                return json.loads(data)

    def send(obj):
        p, mask = json.dumps(obj).encode(), secrets.token_bytes(4)
        n = len(p)
        head = bytes([0x81, 0x80 | n]) if n < 126 else (
            bytes([0x81, 0xFE]) + struct.pack(">H", n) if n < 65536 else bytes([0x81, 0xFF]) + struct.pack(">Q", n))
        sock.sendall(head + mask + bytes(c ^ mask[i % 4] for i, c in enumerate(p)))

    logs, subs, vals, ids = [], {}, {}, [0]

    def frames(payload):
        try:
            msg = json.loads(payload)
        except ValueError:
            return
        for x in msg if isinstance(msg, list) else [msg]:
            if not isinstance(x, dict):
                continue
            if x.get("type") == "SubscribeValue" and x.get("key") == "dataVariableValue":
                subs[x["id"]] = x["args"].get("path")
            if x.get("type") == "UpdateValue" and x.get("id") in subs:
                vals[subs[x["id"]]] = "ERR " + str(x["error"]) if x.get("error") is not None else x.get("value")

    def handle(m):
        me, p = m.get("method"), m.get("params", {})
        if me in ("Network.webSocketFrameSent", "Network.webSocketFrameReceived"):
            frames(p["response"]["payloadData"])
        elif me == "Runtime.consoleAPICalled" and p["type"] == "error":
            logs.append("error: " + " ".join(str(a.get("value", a.get("description", "")))[:220] for a in p["args"]))
        elif me == "Runtime.exceptionThrown":
            logs.append("exception: " + str(p["exceptionDetails"].get("exception", {}).get("description"))[:300])

    def call(method, **params):
        ids[0] += 1
        i = ids[0]
        send({"id": i, "method": method, "params": params})
        while True:
            m = recv()
            if m.get("id") == i:
                return m.get("result", m)
            handle(m)

    def pump(seconds):
        sock.settimeout(1)
        end = time.time() + seconds
        while time.time() < end:
            try:
                handle(recv())
            except (socket.timeout, TimeoutError):
                pass
        sock.settimeout(60)

    def shot(path):
        with open(path, "wb") as f:
            f.write(base64.b64decode(call("Page.captureScreenshot", format="png")["data"]))

    for domain in ("Page", "Runtime", "Network"):
        call(domain + ".enable")
    call("Page.navigate", url=url)
    pump(wait)
    text = call("Runtime.evaluate", expression="document.body.innerText").get("result", {}).get("value")
    print("--- TEXT\n" + str(text)[:int(os.environ.get("TXT", "1800"))])
    shot(out)
    click = os.environ.get("CLICK")
    if click:
        js = ("(()=>{const t=[...document.querySelectorAll('*')].filter(e=>e.children.length==0&&"
              f"e.textContent.trim()=={json.dumps(click)});if(!t.length)return 'not found';t[0].click();return 'clicked'}})()")
        print("click:", call("Runtime.evaluate", expression=js, returnByValue=True).get("result", {}).get("value"))
        pump(float(os.environ.get("CLICKWAIT", "8")))
        root, ext = os.path.splitext(out)
        shot(f"{root}-2{ext}")
    print("--- VALUES")
    for k, v in sorted(vals.items(), key=lambda z: str(z[0])):
        print(k, "=", json.dumps(v)[:260])
    print("--- CONSOLE ERRORS", len(logs))
    for line in dict.fromkeys(logs):
        print(line[:300])


if __name__ == "__main__":
    main()
