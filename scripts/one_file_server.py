#!/usr/bin/env python3
"""Serve one file on loopback to one origin, so a page in this machine's Chrome can fetch it."""
import http.server
import sys

path, origin, port = sys.argv[1], sys.argv[2], int(sys.argv[3])
body = open(path, "rb").read()


class H(http.server.BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def cors(self):
        self.send_header("Access-Control-Allow-Origin", origin)
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header("Cache-Control", "no-store")

    def do_OPTIONS(self):
        self.send_response(204)
        self.cors()
        self.end_headers()

    def do_GET(self):
        if self.path != "/project.json":
            self.send_error(404)
            return
        self.send_response(200)
        self.cors()
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


http.server.HTTPServer(("127.0.0.1", port), H).serve_forever()
