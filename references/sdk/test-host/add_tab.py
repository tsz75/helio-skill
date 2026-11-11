#!/usr/bin/env python3
"""Add a Sequence Builder tab to a HELIO 25.1 project file. Only adds; changes nothing else.

  python3 -I embed/add_tab.py <project.json> <lib/embed.url> <out.json>

Running it on a project that already has the tab replaces the embedded page, for updates.
"""
import base64
import copy
import hashlib
import json
import sys

B = "com.helio-hmi.builtin."
TITLE = "Sequence Builder"


def nid(key):
    """A stable ID in HELIO's format, so re-running updates the same instances."""
    digest = hashlib.sha256(f"sequence-builder/{key}".encode()).digest()[:16]
    return base64.urlsafe_b64encode(digest).decode().rstrip("=")


def text(message):
    return {"$heEntityId": B + "MsgFormat", "version": 1, "props": {"message": message}}


def icon(name):
    return {"$heEntityId": B + "Icon", "version": 1, "props": {"icon": B + name}}


def add_tab(project, url):
    d = copy.deepcopy(project)
    page_id, widget_id, frame_id = nid("page"), nid("widget"), nid("frame")
    frame = {"id": frame_id, "classId": B + "EmbeddedWebview", "version": 2,
             "props": {"target": {"type": "ManualUrl", "url": url}}}
    widget = {"id": widget_id, "classId": B + "DashboardWidget", "version": 5, "name": TITLE,
              "props": {"title": text("Sequence Builder (simulation)"), "icon": icon("Teaching"),
                        "children": [{"$heInstanceId": frame_id}], "mainAction": {}}}
    page = {"id": page_id, "classId": B + "DashboardPage", "version": 4, "name": TITLE,
            "props": {"title": text(TITLE), "icon": icon("Teaching"), "includeInNavigation": True,
                      "footer": [], "content": [{"$heInstanceId": widget_id}]}}

    ours = {page_id, widget_id, frame_id}
    d["instances"] = [i for i in d["instances"] if i["id"] not in ours] + [page, widget, frame]
    root = next(i for i in d["instances"] if i["id"] == d["rootInstanceId"])
    content = root["props"]["content"]
    if not any(c.get("$heInstanceId") == page_id for c in content):
        content.append({"$heInstanceId": page_id})
    return d


def check_only_added(before, after):
    """Everything that was in the project must be unchanged, apart from one new tab reference."""
    a, b = copy.deepcopy(before), copy.deepcopy(after)
    ours = {nid("page"), nid("widget"), nid("frame")}
    for d in (a, b):
        d["instances"] = [i for i in d["instances"] if i["id"] not in ours]
        root = next(i for i in d["instances"] if i["id"] == d["rootInstanceId"])
        root["props"]["content"] = [c for c in root["props"]["content"] if c.get("$heInstanceId") != nid("page")]
    if a != b:
        raise SystemExit("Refusing: something other than the new tab would change.")


def main():
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    with open(sys.argv[1], encoding="utf-8") as f:
        before = json.load(f)
    with open(sys.argv[2], encoding="ascii") as f:
        url = f.read().strip()
    after = add_tab(before, url)
    check_only_added(before, after)
    with open(sys.argv[3], "w", encoding="utf-8") as f:
        json.dump(after, f, ensure_ascii=False, indent=2)
    tabs = [next(i for i in after["instances"] if i["id"] == c["$heInstanceId"])["name"]
            for c in next(i for i in after["instances"] if i["id"] == after["rootInstanceId"])["props"]["content"]]
    print("tabs:", tabs)
    print("instances:", len(before["instances"]), "->", len(after["instances"]))


if __name__ == "__main__":
    main()
