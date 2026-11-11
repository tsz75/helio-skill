#!/usr/bin/env python3
"""Generate the "ctrlX System Monitor" HELIO 25.1.1 project JSON.

Example: adapt it for new projects. usage: example_project.py <references/templates-25.1.1/Empty HMI.json> <output.json> [--link "<opc prefix>"]

Without --link, variables have placeholders only. With --link, each variable is
linked to <opc prefix>/<Data Layer path>, e.g.
--link "/Services/ctrlX OPC UA/Objects/Datalayer"
All variables are read-only (allowWrite: None).
"""
import base64
import json
import sys
import uuid

B = "com.helio-hmi.builtin."
NS = uuid.UUID("6d1f3f2e-8b7a-4c55-9b0e-2f4a7c1e9d10")


def nid(key):
    """Stable 22-char ID so regenerating keeps every reference valid."""
    return base64.urlsafe_b64encode(uuid.uuid5(NS, key).bytes).decode().rstrip("=")


USAGE_RANGES = [
    {"status": "Good", "lowerBound": 0, "upperBound": 70},
    {"status": "Warning", "lowerBound": 70, "upperBound": 90},
    {"status": "Critical"},
]
HISTORY = {"binDuration": 1000, "totalDuration": 900000}


def pct(placeholder, source, history=False):
    cfg = {"type": "Float", "unit": "%", "minValue": 0, "maxValue": 100,
           "ranges": USAGE_RANGES, "placeholder": placeholder}
    if history:
        cfg["history"] = HISTORY
    return cfg, source


def num(typ, unit, placeholder, source):
    return {"type": typ, "unit": unit, "placeholder": placeholder}, source


def text(placeholder, source):
    return {"type": "String", "placeholder": placeholder}, source


C = "system/resources/cpu/"
GB = {"factor": 1e-9, "offset": 0}


def gb(placeholder, source):
    return {"type": "Float", "unit": "GB", "scaling": GB, "numberFormat": {"maximumFractionDigits": 2},
            "placeholder": placeholder}, source


def flag(placeholder, source):
    return {"type": "Boolean", "placeholder": placeholder}, source


# Only nodes verified readable through HELIO 25.1.1 over OPC UA are listed.
# Analog items such as framework/metrics/system/* and system/resources/memory/*
# fail with "is not a variable", and structs such as memory/memory fail with
# "unsupported variant value". Paths like cpu/core0/core0 hold the plain value.
# Placeholders are raw values read from the controller on 2026-11-03.
TREE = {
    "CPU": {
        "Total": pct(6.2, C + "all/all", history=True),
        "Core0": pct(3.5, C + "core0/core0"),
        "Core1": pct(3.2, C + "core1/core1"),
        "Core2": pct(4.0, C + "core2/core2"),
        "Core3": pct(4.0, C + "core3/core3"),
    },
    "Resources": {
        "MemoryTotal": gb(2071248896, "system/characteristics/memory/total"),
        "MemoryHealthy": flag(True, "system/health/memory-available/memory-available"),
        "DiskSize": gb(8606711808, "system/characteristics/storage/sda/size"),
        "StorageHealthy": flag(True, "system/health/storage-sda6-available/storage-sda6-available"),
    },
    "System": {
        "Hostname": text("VirtualControl-4-6", "system/info/hostname"),
        "OsVersion": text("", "system/info/ctrlxOsVersion"),
        "UptimeSeconds": num("Integer", "s", 1228, "system/info/uptime"),
        "BootCount": num("Integer", "", 27, "system/health/boot-count/value"),
        "CpuModel": text("12th Gen Intel(R) Core(TM) i7-12850HX", "system/characteristics/cpu/model"),
        "CpuCores": num("Integer", "", 4, "system/characteristics/cpu/cores/total/total"),
    },
}


def build_data(link):
    data = [{"id": "$heRoot", "type": "Directory", "name": "<root>",
             "children": [{"$heDataId": nid("dir/" + d)} for d in TREE]}]
    refs = {}
    for d, vs in TREE.items():
        data.append({"id": nid("dir/" + d), "type": "Directory", "name": d,
                     "children": [{"$heDataId": nid(f"var/{d}/{v}")} for v in vs]})
        for v, (cfg, src) in vs.items():
            cfg = dict(cfg)
            if not cfg.get("unit", True):
                cfg.pop("unit")
            cfg["placeholder"] = {"value": cfg["placeholder"]}
            cfg.update(allowRead="All", allowWrite="None")
            rec = {"id": nid(f"var/{d}/{v}"), "type": "Variable", "name": v, "config": cfg}
            if link:
                rec["link"] = {"type": "DataTree", "path": f"{link}/{src}"}
            data.append(rec)
            refs[f"{d}/{v}"] = {"$heUiPath": f"/{d}/{v}", "$heUiRecordId": rec["id"]}
    return data, refs


def main():
    tpl_path, out_path = sys.argv[1], sys.argv[2]
    link = sys.argv[sys.argv.index("--link") + 1].rstrip("/") if "--link" in sys.argv else None
    project = json.load(open(tpl_path))
    data, refs = build_data(link)

    def txt(s):
        return {"$heEntityId": B + "MsgFormat", "version": 1, "props": {"message": s}}

    def icon(name):
        return {"$heEntityId": B + "Icon", "version": 1, "props": {"icon": B + name}}

    def var(path):
        return {"$heEntityId": B + "ServiceData", "version": 4, "props": {"path": refs[path]}}

    new = []

    def inst(key, cls, version, props, name=None):
        i = {"id": nid("inst/" + key), "classId": B + cls, "version": version, "props": props}
        if name:
            i["name"] = name
        new.append(i)
        return {"$heInstanceId": i["id"]}

    def output(key, label, path, status="none", max_chars=None):
        p = {"value": var(path), "displayStatus": status,
             "highlightStatus": ["critical", "warning", "neutral", "good", "accent"]}
        if label:
            p["label"] = txt(label)
        if max_chars:
            p["maxCharacterCount"] = max_chars
        return inst(key, "Output", 7, p)

    def gauge(key, path):
        return inst(key, "Gauge", 2, {"value": var(path), "ticks": 3, "displayStatus": "ranges"})

    def bar(key, label, path):
        return inst(key, "ProgressBar", 2, {"value": var(path), "label": txt(label),
                                            "displayValue": "percentage", "direction": "left-to-right"})

    def trend(key, label, path):
        return inst(key, "Trend", 3, {
            "path": refs[path], "label": txt(label),
            "color": {"$heEntityId": B + "Color", "version": 2,
                      "props": {"$heColorId": B + "DistinguishingAzure"}},
            "timeRange": {"$heEntityId": B + "LocalVariable", "version": 1,
                          "props": {"meta": {"type": "Duration"}, "defaultValue": "PT5M",
                                    "allowRead": "All", "allowWrite": "All"}}})

    def widget(key, title, ic, children):
        return inst(key, "DashboardWidget", 5, {"title": txt(title), "icon": icon(ic),
                                                "children": children, "mainAction": {}}, name=title)

    overview = inst("page/overview", "DashboardPage", 4, {
        "title": txt("System Overview"), "icon": icon("Counter"), "includeInNavigation": True,
        "footer": [],
        "content": [
            widget("w/cpu", "CPU", "Counter", [gauge("g/cpu", "CPU/Total")]),
            widget("w/cores", "CPU Cores", "Counter", [
                bar(f"b/core{n}", f"Core {n}", f"CPU/Core{n}") for n in range(4)]),
            widget("w/res", "Resources", "Counter", [
                output("o/memt", "Memory", "Resources/MemoryTotal"),
                output("o/memh", "Memory OK", "Resources/MemoryHealthy"),
                output("o/disk", "Disk", "Resources/DiskSize"),
                output("o/diskh", "Storage OK", "Resources/StorageHealthy")]),
            widget("w/sys", "System", "Counter", [
                output("o/os", "ctrlX OS", "System/OsVersion"),
                output("o/up", "Uptime", "System/UptimeSeconds"),
                output("o/boot", "Boot count", "System/BootCount"),
                output("o/ncores", "CPU cores", "System/CpuCores")]),
        ]}, name="System Overview")

    def component(name):
        return {"$heEntityId": B + "ComponentData", "version": 1, "props": {"name": name}}

    def static(value):
        return {"$heEntityId": B + "Static", "version": 2, "props": {"value": value}}

    faces = "\u2680\u2681\u2682\u2683\u2684\u2685"
    dice_face = inst("o/diceface", "Output", 7, {
        "label": txt("Face"), "displayStatus": "none", "highlightStatus": [],
        "value": {"$heEntityId": B + "Switch", "version": 3, "props": {
            "expression": component("Roll"),
            "cases": [{"when": n + 1, "then": static(faces[n])} for n in range(6)]}}})
    dice_result = inst("o/diceresult", "Output", 7, {
        "label": txt("Result"), "displayStatus": "none", "highlightStatus": [], "value": component("Roll")})
    dice_roll = inst("b/diceroll", "Button", 5, {
        "caption": txt("Roll"), "displayElements": "captionOnly", "justify": "start",
        "variant": "primary", "isDestructive": False,
        "onClick": {"$heActionId": B + "WriteComponentProperty", "version": 1, "props": {
            "type": "dynamic", "name": "Roll",
            # Math.round over 0.5..6.5 gives each face equal odds; 1..6 would halve 1 and 6.
            "value": {"$heEntityId": B + "Random", "version": 1, "props": {
                "interval": 100, "minValue": 0.5, "maxValue": 6.5, "roundValues": True}}}}})
    dice = widget("w/dice", "Dice", "Counter", [dice_face, dice_result, dice_roll])
    next(i for i in new if i["id"] == dice["$heInstanceId"])["componentApi"] = [{
        "name": "Roll",
        "defaultValue": {"$heEntityId": B + "LocalVariable", "version": 1, "props": {
            "meta": {"type": "Integer", "minValue": 1, "maxValue": 6},
            "defaultValue": 1, "allowRead": "All", "allowWrite": "All"}}}]

    trends = inst("page/trends", "DashboardPage", 4, {
        "title": txt("Trends"), "icon": icon("Counter"), "includeInNavigation": True, "footer": [],
        "content": [
            widget("w/tcpu", "CPU Utilisation", "Counter", [trend("t/cpu", "CPU", "CPU/Total")]),
            dice,
        ]}, name="Trends")

    def param(key, label, path):
        # Markdown, because an Output is clipped to a quarter-width cell at tablet widths.
        return inst("p/" + key, "Parameter", 1, {"label": txt(label),
                                                 "controls": [inst("po/" + key, "Markdown", 1, {"value": var(path)})]})

    info = inst("page/info", "ParameterPage", 6, {
        "title": txt("System Info"), "icon": icon("Counter"), "includeInNavigation": True,
        "writeMode": "direct", "parameterOrientation": "vertical", "footer": [], "visualization": [], "visualizationLayout": "1-1",
        "parameters": [
            param("host", "Hostname", "System/Hostname"),
            param("model", "CPU model", "System/CpuModel"),
            param("os", "ctrlX OS", "System/OsVersion"),
        ]}, name="System Info")

    # Keep the template's header and footer. Replace only its "Get Started" page.
    hmi = next(i for i in project["instances"] if i["id"] == project["rootInstanceId"])
    start_page = hmi["props"]["content"][0]["$heInstanceId"]
    by_id = {i["id"]: i for i in project["instances"]}
    drop = {start_page}
    for slot in ("parameters", "visualization"):
        drop.update(r["$heInstanceId"] for r in by_id[start_page]["props"].get(slot, []))
    project["instances"] = [i for i in project["instances"] if i["id"] not in drop] + new
    hmi["props"]["content"] = [overview, info, trends]

    project["data"] = data
    project["config"].update(type="hmi", description="CPU utilisation and system status of the ctrlX CORE, read over OPC UA.")
    json.dump(project, open(out_path, "w"), indent=1)
    print(f"{out_path}: {len(project['instances'])} instances, {len(data)} data nodes, linked={bool(link)}")


if __name__ == "__main__":
    main()
