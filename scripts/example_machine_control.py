#!/usr/bin/env python3
"""Generate the "Carton Erector" HELIO 25.1.1 project.

usage: gen_helio.py <references/templates-25.1.1/Empty HMI.json> <output.json>

Tags are the PLC symbols published by GVL_HMI, GVL_Sim and GVL_IO, read and written over
the "ctrlX OPC UA" connection. Only commands, the two setpoints and the simulation buttons
can be written; everything else is read-only. Command bits use HELIO's Auto Reset.
"""
import base64
import json
import sys
import uuid

B = "com.helio-hmi.builtin."
NS = uuid.UUID("2b9c6a31-5c0e-4f5d-8a57-1e3f7d20c4aa")
SYM = "/Services/ctrlX OPC UA/Objects/Datalayer/plc/app/Application/sym"
AXES = ["Master", "Magazine", "PickArm", "Folder", "Transport"]
AXIS_LABEL = {"Master": "Master", "Magazine": "Magazine", "PickArm": "Pick arm", "Folder": "Folder", "Transport": "Transport"}
AXIS_UNIT = {"Master": "deg", "Magazine": "mm", "PickArm": "deg", "Folder": "deg", "Transport": "mm"}
HISTORY = {"binDuration": 1000, "totalDuration": 900000}

# PackML state number -> (label, status). Numbers are E_PackMLState.
STATES = {
    0: ("Undefined", "warning"), 1: ("Clearing", "critical"), 2: ("Stopped", "neutral"), 3: ("Starting", "accent"),
    4: ("Idle", "neutral"), 5: ("Suspended", "warning"), 6: ("Execute", "good"), 7: ("Stopping", "accent"),
    8: ("Aborting", "critical"), 9: ("Aborted", "critical"), 10: ("Holding", "warning"), 11: ("Held", "warning"),
    12: ("Unholding", "warning"), 13: ("Suspending", "warning"), 14: ("Unsuspending", "warning"),
    15: ("Resetting", "accent"), 16: ("Completing", "accent"), 17: ("Complete", "neutral"),
}
MODES = {1: "Production", 2: "Maintenance", 3: "Manual"}


def nid(key):
    """Stable 22-char ID, so regenerating keeps every reference valid."""
    return base64.urlsafe_b64encode(uuid.uuid5(NS, key).bytes).decode().rstrip("=")


def enum(choices):
    return {"knownChoices": [{"value": k, "label": v, "description": ""} for k, v in choices.items()]}


def flt(tag, unit=None, digits=1, ph=0.0, **kw):
    cfg = {"type": "Float", "numberFormat": {"maximumFractionDigits": digits}, "placeholder": ph, **kw}
    if unit:
        cfg["unit"] = unit
    return cfg, tag


def integer(tag, ph=0, **kw):
    return {"type": "Integer", "placeholder": ph, **kw}, tag


def flag(tag):
    return {"type": "Boolean", "placeholder": False}, tag


def cmd(tag):
    """A command bit HELIO may write. It returns to FALSE by itself after the PLC has seen it."""
    return {"type": "Boolean", "placeholder": False, "autoReset": {"after": 500, "to": False},
            "allowWrite": "All"}, tag


H = "GVL_HMI/"
S = "GVL_Sim/"
IO = "GVL_IO/"

TREE = {
    "Status": {
        "State": integer(H + "uiState", 2, enum=enum({k: v[0] for k, v in STATES.items()})),
        "Mode": integer(H + "uiMode", 1, enum=enum(MODES)),
        "MotionReady": flag(H + "bMotionReady"),
    },
    "Production": {
        "Good": integer(H + "udiGood", minValue=0, history=HISTORY),
        "BatchGood": integer(H + "udiBatchGood"),
        "Reject": integer(H + "udiReject"),
        "MissedPick": integer(H + "udiMissedPick"),
        # The master turns 360 deg per carton, so deg/s / 6 = cartons/min.
        "ActualCpm": flt(H + "lrMasterActVel", "/min", 1, minValue=0, maxValue=240,
                         scaling={"factor": 1 / 6, "offset": 0}, history=HISTORY),
    },
    "Parameters": {
        "SpeedCpm": flt(H + "lrSpeedCpm", "cartons/min", 1, 30.0, minValue=1, maxValue=40, allowWrite="All"),
        "BatchTarget": integer(H + "udiBatchTarget", minValue=0, allowWrite="All"),
    },
    "Commands": {n: cmd(H + "bCmd" + n) for n in (
        "Reset", "Start", "Stop", "Hold", "Unhold", "Abort", "Clear", "AlarmReset", "MagReload",
        "ModeProduction", "ModeMaintenance", "ModeManual")},
    "Alarms": {n: flag(H + "bAlm" + n) for n in (
        "EStop", "Guard", "Air", "Motion", "Axis", "Timeout", "Glue", "MissedPick", "NotSquare")},
    "Info": {"MagEmpty": flag(H + "bInfoMagEmpty"), "DischargeFull": flag(H + "bInfoDischargeFull")},
    "Simulation": {
        **{n: flag(S + t) for n, t in (
            ("EStop", "bEStopPressed"), ("Guard", "bGuardOpen"), ("Air", "bAirLow"), ("Glue", "bGlueCold"),
            ("MissPicks", "bMissPicks"), ("NotSquare", "bNotSquare"), ("Discharge", "bDischargeFull"))},
        **{"Btn" + n: cmd(S + "bBtn" + n) for n in (
            "EStop", "Guard", "Air", "Glue", "MissPicks", "NotSquare", "Discharge")},
    },
    "IO": {n: flag(IO + n) for n in (
        "bDI_EStopOk", "bDI_GuardsClosed", "bDI_AirOk", "bDI_GlueReady", "bDI_PickVacOk", "bDI_CaseSquare",
        "bDI_DischargeFull", "bDO_PickVac", "bDO_BackVac", "bDO_LeadTucker", "bDO_Glue", "bDO_DischargeConv")},
}
for ax in AXES:
    TREE["Axis" + ax] = {
        "Pos": flt(f"{H}lr{ax}ActPos", AXIS_UNIT[ax], 2),
        "Vel": flt(f"{H}lr{ax}ActVel", AXIS_UNIT[ax] + "/s", 1),
        "Powered": flag(f"{H}b{ax}Powered"),
        "InSync": flag(f"{H}b{ax}InSync"),
        "Error": flag(f"{H}b{ax}Error"),
        "Diag": integer(f"{H}dw{ax}Diag"),
    }


def build_data():
    data = [{"id": "$heRoot", "type": "Directory", "name": "<root>",
             "children": [{"$heDataId": nid("dir/" + d)} for d in TREE]}]
    refs = {}
    for d, vs in TREE.items():
        data.append({"id": nid("dir/" + d), "type": "Directory", "name": d,
                     "children": [{"$heDataId": nid(f"var/{d}/{v}")} for v in vs]})
        for v, (cfg, tag) in vs.items():
            cfg = dict(cfg)
            cfg["placeholder"] = {"value": cfg["placeholder"]}
            cfg.setdefault("allowRead", "All")
            cfg.setdefault("allowWrite", "None")
            rec = {"id": nid(f"var/{d}/{v}"), "type": "Variable", "name": v, "config": cfg,
                   "link": {"type": "DataTree", "path": f"{SYM}/{tag}"}}
            data.append(rec)
            refs[f"{d}/{v}"] = {"$heUiPath": f"/{d}/{v}", "$heUiRecordId": rec["id"]}
    return data, refs


def main():
    tpl_path, out_path = sys.argv[1], sys.argv[2]
    project = json.load(open(tpl_path))
    data, refs = build_data()
    new = []

    def txt(s):
        return {"$heEntityId": B + "MsgFormat", "version": 1, "props": {"message": s}}

    def icon(name):
        return {"$heEntityId": B + "Icon", "version": 1, "props": {"icon": B + name}}

    def var(path):
        return {"$heEntityId": B + "ServiceData", "version": 4, "props": {"path": refs[path]}}

    def static(value):
        return {"$heEntityId": B + "Static", "version": 2, "props": {"value": value}}

    def status(s):
        props = {} if s == "neutral" else {"$heSignalingStatusId": s}
        return {"$heEntityId": B + "SignalingStatus", "version": 2, "props": props}

    def switch(path, cases, default):
        return {"$heEntityId": B + "Switch", "version": 3, "props": {
            "expression": var(path), "cases": [{"when": k, "then": v} for k, v in cases.items()], "default": default}}

    def inst(key, cls, version, props, name=None):
        i = {"id": nid("inst/" + key), "classId": B + cls, "version": version, "props": props}
        if name:
            i["name"] = name
        new.append(i)
        return {"$heInstanceId": i["id"]}

    def write_true(path):
        return {"$heActionId": B + "WriteDataVariable", "version": 4,
                "props": {"path": refs[path], "type": "static", "value": True}}

    def enabled_in(states):
        """isDisabled: FALSE only in the listed PackML states, mirroring what FB_PackML accepts."""
        return switch("Status/State", {s: static(False) for s in states}, static(True))

    # ===== Reusable elements =====
    def output(key, label, path, ic=None, chars=12):
        p = {"value": var(path), "label": txt(label), "displayStatus": "none", "maxCharacterCount": chars,
             "highlightStatus": ["critical", "warning", "neutral", "good", "accent"]}
        if ic:
            p["labelIcon"] = icon(ic)
        return inst(key, "Output", 7, p)

    def lamp(key, label, path, on, off, on_status, off_status="good", chars=12):
        """A boolean as a word with a colour. A raw boolean tells an operator little."""
        return inst(key, "Output", 7, {
            "label": txt(label),
            "value": switch(path, {True: static(on), False: static(off)}, static("-")),
            "displayStatus": "manual",
            "manualStatus": switch(path, {True: status(on_status), False: status(off_status)}, status("neutral")),
            "isHighlighted": static(True), "maxCharacterCount": chars,
            "highlightStatus": ["critical", "warning", "neutral", "good", "accent"]})

    def state_text():
        return switch("Status/State", {k: static(v[0]) for k, v in STATES.items()}, static("-"))

    def state_status():
        return switch("Status/State", {k: status(v[1]) for k, v in STATES.items()}, status("neutral"))

    def button(key, caption, path, ic, states=None, variant="secondary", destructive=False):
        p = {"caption": txt(caption), "displayElements": "iconAndCaption", "icon": icon(ic), "justify": "start",
             "variant": variant, "isDestructive": destructive, "onClick": write_true(path)}
        if states is not None:
            p["isDisabled"] = enabled_in(states)
        return inst(key, "Button", 5, p)

    def widget(key, title, ic, children, layout=None):
        p = {"title": txt(title), "icon": icon(ic), "children": children, "mainAction": {}}
        if layout:
            p["customLayouts"] = [{"definition": layout}]
        return inst("w/" + key, "DashboardWidget", 5, p, name=title)

    def page(key, title, ic, content, layout=None):
        p = {"title": txt(title), "icon": icon(ic), "includeInNavigation": True, "footer": [], "content": content}
        if layout:
            p["customLayouts"] = [{"definition": layout}]
        return inst("page/" + key, "DashboardPage", 4, p, name=title)

    def trend(key, label, path, colour):
        return inst(key, "Trend", 3, {
            "path": refs[path], "label": txt(label),
            "color": {"$heEntityId": B + "Color", "version": 2, "props": {"$heColorId": B + colour}},
            "timeRange": {"$heEntityId": B + "LocalVariable", "version": 1,
                          "props": {"meta": {"type": "Duration"}, "defaultValue": "PT5M",
                                    "allowRead": "All", "allowWrite": "All"}}})

    FIVE = "1 1 2 2 3 3\n4 4 4 5 5 5"   # five equal-height tiles, none spanning a whole row
    # HELIO sizes text as tile width / character count, so these keep it about the same on every tile.
    NARROW, MID, WIDE, FULL = 9, 12, 18, 24   # tiles of about 200, 300, 460 and 610 px at 1920 wide

    # ===== Operation page =====
    operation = page("operation", "Operation", "Machine", [
        widget("state", "Machine", "Machine", [
            inst("o/state", "Output", 7, {
                "label": txt("PackML state"), "value": state_text(), "displayStatus": "manual",
                "manualStatus": state_status(), "isHighlighted": static(True), "maxCharacterCount": FULL,
                "highlightStatus": ["critical", "warning", "neutral", "good", "accent"]}),
            inst("o/mode", "Output", 7, {
                "label": txt("Mode"),
                "value": switch("Status/Mode", {k: static(v) for k, v in MODES.items()}, static("-")),
                "displayStatus": "none", "highlightStatus": [], "maxCharacterCount": FULL}),
            lamp("l/motion", "Motion", "Status/MotionReady", "Ready", "Not ready", "good", "critical", FULL),
        ], "1\n2\n3"),
        widget("speed", "Speed (cartons/min)", "Tachometer", [
            inst("g/speed", "Gauge", 2, {"value": var("Production/ActualCpm"), "ticks": 3, "displayStatus": "none"}),
            output("o/setspeed", "Setpoint", "Parameters/SpeedCpm", chars=FULL),
        ]),
        widget("prod", "Production", "Counter", [
            output("o/good", "Good cartons", "Production/Good"),
            output("o/batch", "This batch", "Production/BatchGood"),
            output("o/reject", "Rejected", "Production/Reject"),
            output("o/missed", "Missed picks", "Production/MissedPick"),
        ]),
        widget("axes", "Axis positions", "AxisMovements", [
            output(f"o/pos{ax}", AXIS_LABEL[ax], f"Axis{ax}/Pos", chars=NARROW if n < 3 else MID)
            for n, ax in enumerate(AXES)
        ], FIVE),
    ])

    # ===== Axes page =====
    def axis_widget(ax):
        cam = ax in ("PickArm", "Folder", "Transport")   # only the cam axes synchronise to the master
        wide_row = ax in ("Folder", "Transport")
        top = MID if wide_row else NARROW                 # character count for the first row of tiles
        low = MID if (wide_row or not cam) else NARROW    # five-tile axes have wider tiles in their second row
        kids = [output(f"a/{ax}/pos", "Position", f"Axis{ax}/Pos", chars=top),
                output(f"a/{ax}/vel", "Velocity", f"Axis{ax}/Vel", chars=top),
                lamp(f"a/{ax}/pow", "Drive", f"Axis{ax}/Powered", "Powered", "Off", "good", "neutral", top)]
        if cam:
            kids.append(lamp(f"a/{ax}/sync", "In sync", f"Axis{ax}/InSync", "Yes", "No", "good", "neutral", low))
        kids.append(lamp(f"a/{ax}/err", "Error", f"Axis{ax}/Error", "Error", "None", "critical", "good", low))
        kids.append(output(f"a/{ax}/diag", "Diagnosis", f"Axis{ax}/Diag", chars=low))
        return widget("axis" + ax, AXIS_LABEL[ax], "AxisRotation" if AXIS_UNIT[ax] == "deg" else "AxisMovements", kids,
                      "1 2 3\n4 5 6" if cam else FIVE)

    axes = page("axes", "Axes", "AxisMovements", [axis_widget(ax) for ax in AXES], FIVE)

    # ===== Alarms page =====
    alarm = lambda key, label, path, chars=MID: lamp("al/" + key, label, path, "ALARM", "OK", "critical", "good", chars)
    alarms = page("alarms", "Alarms", "Warning", [
        widget("abort", "Abort alarms", "Error", [
            alarm("estop", "E-stop", "Alarms/EStop"),
            alarm("guard", "Guard door", "Alarms/Guard"),
            alarm("air", "Air pressure", "Alarms/Air"),
            alarm("motion", "Motion not ready", "Alarms/Motion"),
            alarm("axis", "Axis error", "Alarms/Axis"),
            alarm("timeout", "State timeout", "Alarms/Timeout"),
        ]),
        widget("hold", "Hold alarms", "Warning", [
            alarm("glue", "Hot melt not ready", "Alarms/Glue", FULL),
            alarm("missed", "Missed picks", "Alarms/MissedPick", FULL),
            alarm("square", "Not square", "Alarms/NotSquare", FULL),
        ], "1\n2\n3"),
        widget("info", "Suspend reasons", "Information", [
            lamp("in/mag", "Magazine", "Info/MagEmpty", "Empty", "OK", "warning"),
            lamp("in/dis", "Discharge", "Info/DischargeFull", "Full", "OK", "warning"),
        ]),
        widget("ack", "Acknowledge", "Check", [
            button("b/almreset", "Alarm reset", "Commands/AlarmReset", "ResetArrow"),
        ]),
    ])

    # ===== Setup page =====
    def param(key, label, controls):
        return inst("p/" + key, "Parameter", 1, {"label": txt(label), "controls": controls})

    def input_el(key, label, path):
        return inst("i/" + key, "Input", 3, {"value": var(path), "options": [], "justify": "fill"})

    idle_states = [2, 9]   # FB_PackML takes a mode over in Stopped or Aborted only
    not_running = [2, 4, 9, 11, 17]
    setup = inst("page/setup", "ParameterPage", 6, {
        "title": txt("Setup"), "icon": icon("Settings"), "includeInNavigation": True,
        "writeMode": "direct", "parameterOrientation": "vertical", "footer": [], "visualization": [],
        "visualizationLayout": "1-1",
        "parameters": [
            param("speed", "Machine speed", [input_el("speed", "Machine speed", "Parameters/SpeedCpm")]),
            param("batch", "Batch size (0 = endless)", [input_el("batch", "Batch size", "Parameters/BatchTarget")]),
            param("mode", "Mode (in Stopped or Aborted)", [
                button("b/modeprod", "Production", "Commands/ModeProduction", "ProductionRunning", idle_states),
                button("b/modemaint", "Maintenance", "Commands/ModeMaintenance", "Screwdriver_Wrench", idle_states),
                button("b/modeman", "Manual", "Commands/ModeManual", "ManualButton", idle_states),
            ]),
            param("mag", "Load a new stack", [
                button("b/magreload", "Retract magazine", "Commands/MagReload", "Refresh", not_running),
            ]),
        ]}, name="Setup")

    # ===== Trends page =====
    trends = page("trends", "Trends", "GraphUp", [
        widget("tspeed", "Machine speed", "Tachometer", [
            trend("t/speed", "Cartons/min", "Production/ActualCpm", "DistinguishingAzure")]),
        widget("tgood", "Good cartons", "Counter", [
            trend("t/good", "Good cartons", "Production/Good", "DistinguishingPurple")]),
    ])

    # ===== Simulation page =====
    def fault(key, label, tag, chars=NARROW):
        return [lamp(f"s/{key}", label, f"Simulation/{tag}", "Active", "Normal", "warning", "neutral", chars),
                button(f"s/b{key}", "Toggle", f"Simulation/Btn{tag}", "Repeat")]

    def io(key, label, tag, chars):
        return lamp("io/" + key, label, "IO/" + tag, "On", "Off", "good", "neutral", chars)

    simulation = page("simulation", "Simulation", "Teaching", [
        widget("safety", "Abort faults", "Error",
               fault("estop", "E-stop pressed", "EStop") + fault("guard", "Guard open", "Guard")
               + fault("air", "Air low", "Air"), "1 3 5\n2 4 6"),
        widget("process", "Hold faults", "Warning",
               fault("glue", "Glue cold", "Glue") + fault("miss", "Miss picks", "MissPicks")
               + fault("square", "Not square", "NotSquare"), "1 3 5\n2 4 6"),
        widget("suspend", "Suspend", "ProductionPaused", fault("dis", "Discharge full", "Discharge", FULL), "1\n2"),
        widget("di", "Inputs", "PlugIn", [
            io("estop", "E-stop circuit", "bDI_EStopOk", 10), io("guards", "Guards closed", "bDI_GuardsClosed", 10),
            io("air", "Air pressure", "bDI_AirOk", 10), io("glue", "Glue ready", "bDI_GlueReady", 10),
            io("vac", "Pick vacuum", "bDI_PickVacOk", 10), io("square", "Carton square", "bDI_CaseSquare", 10),
            io("full", "Discharge full", "bDI_DischargeFull", WIDE)], "1 2 3 4\n5 6 7 7"),
        widget("do", "Outputs", "Power", [
            io("pv", "Pick vacuum", "bDO_PickVac", MID), io("bv", "Back vacuum", "bDO_BackVac", MID),
            io("lt", "Lead tucker", "bDO_LeadTucker", MID), io("gl", "Glue guns", "bDO_Glue", WIDE),
            io("dc", "Conveyor", "bDO_DischargeConv", WIDE)], FIVE),
    ], FIVE)

    # ===== Machine controls in the footer, on every page =====
    def machine_button(key, label, path, ic, states, st="none", highlight=False, display="captionOnly"):
        p = {"icon": icon(ic), "label": txt(label), "displayElements": display, "onClick": write_true(path),
             "displayStatus": "fromStatus" if st != "none" else "none"}
        if st != "none":
            p["manualStatus"] = status(st)
            p["isHighlighted"] = static(highlight)
        if states is not None:
            p["isDisabled"] = enabled_in(states)
        return inst("mc/" + key, "MachineControlButton", 6, p)

    def controls(suffix, display, condition):
        """Captions from tablet up: with icons too, seven buttons push Abort off a 1180 px screen.
        Narrower screens get icons only, so all seven always fit. Only one set is on screen at a time."""
        stoppable = [k for k in STATES if k not in (0, 1, 2, 8, 9)]
        b = lambda key, *a, **k: machine_button(key + suffix, *a, display=display, **k)
        ref = inst("mc" + suffix, "MachineControls", 1, {"children": [
            b("reset", "Reset", "Commands/Reset", "ResetArrow", [2, 17]),
            b("start", "Start", "Commands/Start", "Start", [4], "good", True),
            b("hold", "Hold", "Commands/Hold", "ProductionPaused", [5, 6]),
            b("unhold", "Unhold", "Commands/Unhold", "Play", [11]),
            b("stop", "Stop", "Commands/Stop", "ProductionStopped", stoppable),
            b("clear", "Clear", "Commands/Clear", "Check", [9]),
            b("abort", "Abort", "Commands/Abort", "MachineStop", None, "critical", True),
        ]})
        next(i for i in new if i["id"] == ref["$heInstanceId"])["displayIf"] = condition
        return ref

    # "larger-than" and "max-width" are exact opposites. The narrow size has a huge height, so only width decides.
    NARROW_SIZE = "cartonNarrowFooter"
    size_is = lambda mode: {"$heEntityId": B + "MatchesDeviceSize", "version": 1,
                            "props": {"devices": [NARROW_SIZE], "mode": mode}}
    control_sets = [controls("", "captionOnly", size_is("larger-than")),
                    controls("/narrow", "iconOnly", size_is("max-width"))]

    # ===== Header: state and mode on every page =====
    state_cell = inst("h/state", "HeaderCell", 5, {
        "title": state_text(),
        "subtitle": switch("Status/Mode", {k: static(v) for k, v in MODES.items()}, static("-")),
        "icon": icon("Machine"), "width": 200,
        "display": "icon-and-text", "essential": True, "canShrink": True, "displayStatus": "fromStatus",
        "manualStatus": state_status(),
        "onClick": {"$heActionId": B + "NavigateToPage", "version": 2,
                    "props": {"instance": {"$heWeakInstanceId": operation["$heInstanceId"]}}}})

    # Keep the template's menu, spacer and language switch. Replace only its "Get Started" page.
    hmi = next(i for i in project["instances"] if i["id"] == project["rootInstanceId"])
    by_id = {i["id"]: i for i in project["instances"]}
    start_page = hmi["props"]["content"][0]["$heInstanceId"]
    drop = {start_page}
    for slot in ("parameters", "visualization"):
        drop.update(r["$heInstanceId"] for r in by_id[start_page]["props"].get(slot, []))
    project["instances"] = [i for i in project["instances"] if i["id"] not in drop] + new
    hmi["props"]["content"] = [operation, axes, alarms, setup, trends, simulation]
    hmi["props"]["header"] = [state_cell] + hmi["props"]["header"]
    hmi["props"]["footer"] = hmi["props"]["footer"] + control_sets

    project["config"]["screenSizes"].append({
        "name": "Narrow footer", "displayNameInEditor": False, "icon": icon("Smartphone"),
        "description": "Below this width the footer shows icons only", "width": 1100, "height": 100000, "id": NARROW_SIZE})
    project["data"] = data
    project["config"].update(type="hmi", description="Servo carton erector: PackML control, production, axes, alarms and simulation.")
    json.dump(project, open(out_path, "w"), indent=1)
    print(f"{out_path}: {len(project['instances'])} instances, {len(data)} data nodes")


if __name__ == "__main__":
    main()
