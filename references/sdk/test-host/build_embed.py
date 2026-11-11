#!/usr/bin/env python3
"""Bundle the widget into one HTML file and a data: URL for HELIO's iframe element.

  python3 -I embed/build_embed.py     writes lib/embed.html and lib/embed.url
"""
import base64
import os
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LIB = ROOT / "lib"
NODE_BIN = Path.home() / ".local/share/node-v22.14.0/bin"

PAGE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sequence Builder</title>
<link rel="icon" href="data:,">
<style>
html, body, #root { height: 100%%; margin: 0; }
body { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
/* The iframe sets the size here, and a larger minimum would add a second scrollbar in the HMI. */
[data-role="sequence-builder"] { min-height: 0 !important; }
</style>
</head>
<body>
<div id="root"></div>
<script>%s</script>
</body>
</html>
"""


def main():
    LIB.mkdir(exist_ok=True)
    out = subprocess.run(
        ["node_modules/.bin/esbuild", "embed/embed.tsx", "--bundle", "--minify", "--format=iife", "--charset=ascii",
         "--jsx=automatic", "--target=es2022", "--log-level=warning", "--define:process.env.NODE_ENV=\"production\""],
        cwd=ROOT, env={**os.environ, "PATH": f"{NODE_BIN}:{os.environ['PATH']}"},
        check=True, capture_output=True, text=True).stdout
    if "</script" in out.lower():
        raise SystemExit("The bundle contains </script, which would end the inline script early.")
    html = PAGE % out
    (LIB / "embed.html").write_text(html, encoding="ascii")
    url = "data:text/html;base64," + base64.b64encode(html.encode("ascii")).decode()
    (LIB / "embed.url").write_text(url)
    print(f"embed.html {len(html)} bytes, data: URL {len(url)} bytes")


if __name__ == "__main__":
    main()
