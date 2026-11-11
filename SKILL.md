---
name: helio
description: Build, edit and debug HELIO HMIs (helio-hmi.com, a no-code web HMI for industrial machines), especially the HELIO app on Bosch Rexroth ctrlX CORE / ctrlX OS. Covers pages and elements (Dashboard, Parameter, Magic Input/Output, Gauge, Trend), dynamic properties, actions, HMI data variables, messages, recipes, roles, OPC UA connections including the ctrlX server and certificate trust, the project JSON format for generating projects with code, the runtime APIs, and extensions with the HELIO SDK (@hmiproject/helio-sdk). Includes offline docs for 25.1 and 26.2, real templates, and tools to upload a project and check live values in a browser. Use it whenever the user mentions HELIO or an HMI on a ctrlX, wants an operator screen for machine data, asks why a value shows blank in an HMI, or wants a custom HMI widget, even if they only say "the HMI" or "the panel". For PLC code use ctrlx-engineer; for reading the Data Layer directly use ctrlx-rest.
---

# HELIO HMI development

HELIO is one Runtime serving two browser apps, the IDE and the HMIs. A project is a single JSON file. Most things can be done by clicking in the IDE or by generating that JSON, and this skill does the second and tests the result.

## Before you start

**Get the address from the user.** The tools have no default controller; set `HELIO_URL` on every call. On the ctrlX it is `https://<host>[:port]/helio`. Don't reuse an address from memory or another session, because the user has several controllers. An address the user sees as `127.0.0.1` on their host may not be reachable from a VM, so if it's refused, say so and ask.

**Check the version first.** It decides what exists, and the public docs default to the newest release.

```bash
H=~/.claude/skills/helio/scripts/helio.py
HELIO_URL=https://<host>:8443/helio python3 -I $H info
```

**On Windows**, the scripts use only the standard library and run as they are, but the shell is different. Use `python` or `py` instead of `python3`, `$env:HELIO_URL="..."` in PowerShell instead of the inline `VAR=... cmd` form, `$HOME\.claude\skills\helio\scripts\...` for the paths, and `$env:TEMP` instead of `/tmp`. `hmi_check.py` looks for Chrome (or Edge) in Program Files. If it doesn't find it, set `CHROME` to the `.exe`.

| Feature | Available from |
|---|---|
| SDK / custom extensions | 25.4.0 (SDK 1.1.0 needs 26.2.0) |
| HTTP API `/api/v1` (early access) | 26.1.1 |
| Struct variables via Data Variable | 26.1.4 |

Docs: `references/docs-25.1/` and `references/docs-26.2/` (file names are URL paths with `/` as `__`), including release notes as `docs-26.2/releases__*.md`. Grep the set closest to the installed version; some element names differ between them. For other versions use `https://v<major.minor>.docs.helio-hmi.com`. Sitemaps on those hosts list main-host URLs, so rewrite the host if you mirror one.

**Ask for logins.** The documented default IDE user is `eve` / `eve`, but use it only when the user has given it or agreed to it. IDE users and HMI users are separate accounts. Sign out when you finish (`helio.py logout`).

**Be careful with writes.** HELIO's data variables can reach a real PLC, and in PLC mode or at runtime a write goes to the machine. Make variables read-only (`allowWrite: "None"`) unless the user asks for control, and confirm before overwriting a project, changing a connection or writing a value. Trusting a certificate on the controller is the user's call, so ask them to do it in the web UI.

**Mind the license.** A demo license allows one project and limited hours. `helio.py info` shows it. Export work and regenerate from code, so nothing is lost if it expires.

## Workflow for building an HMI

1. Run `info`, then log in. Look for an existing project and connection first.
2. Connect the data source, if there is one: see `references/ctrlx-opcua.md`.
3. Find the nodes with `helio.py tree "<connection>" '<regex>'`. Link paths are shown for each.
4. Generate the project. Start from `scripts/example_project.py` and `references/templates-25.1.1/`. Copy each class's `version` from a template rather than guessing it.
5. Upload with `helio.py put "<name>" <file>`. The `error` field in the output shows whether HELIO accepted the file.
6. **Verify in a browser**, at several widths, and look at the screenshots:

```bash
python3 -I ~/.claude/skills/helio/scripts/hmi_check.py "$HELIO_URL/runtime/My%20Project" /tmp/a.png 15
WIN=1180,820 CLICK="Trends" python3 -I ~/.claude/skills/helio/scripts/hmi_check.py "$HELIO_URL/runtime/My%20Project" /tmp/b.png 12
```

Step 6 isn't optional, because everything before it can succeed while the HMI is wrong. The connection test can pass and the upload can be accepted while a value renders blank, because errors only show up in the data stream. `VALUES` lists what HELIO really delivered, and `ERR ...` is the thing to look for. Cross-check a few numbers against the source (the `ctrlx-rest` skill for ctrlX). Take screenshots after the app renders; a first screenshot taken too early is just a grey page and proves nothing.

`hmi_check.py` notes: headless Chrome won't go below 500 px wide, and the page gets about 143 px less height than `WIN` asks for. `CLICK` takes the first element with that exact text, so `CLICK=Start` really presses the button and writes to the PLC. Test with non-zero values too, since more digits change what fits. The console error `Failed to run server time processing` came and went with no visible effect.

Report anything you couldn't read plainly. Don't leave a placeholder on screen where it could be mistaken for live data.

## Things that will catch you out

**ctrlX OPC UA on 25.1.1** (tested; re-test after an upgrade):

| Node | Result |
|---|---|
| Analog items with an `EngineeringUnits` child: `framework/metrics/system/*`, `system/resources/memory/*`, `.../utilization` | `is not a variable` (shown as a folder, value blank) |
| Structs: `system/resources/memory/memory`, `cpu/cpu`, `info/info` | `unsupported variant value`, whatever type is declared |
| Sub-fields of a struct: `memory/memory/used` | `not found` |
| `system/resources/cpu/{all,coreN}/{all,coreN}` | Works: a plain utilisation number, even though the tree labels it JSON |
| Plain values: `system/info/*`, `system/characteristics/*`, `boot-count/value` | Works |

So a folder may have a same-named child holding the real value (`cores/total/total`), and used/available memory isn't readable over OPC UA on 25.1.1. Virtual controls have no temperature source.

**Project JSON:** list a directory before its children in `data[]`, or links fail with `unresolved path`. `config.type` must be `hmi`.

**Layout:**
- Don't put long text in dashboard tiles. `maxCharacterCount` shrinks the font until it's tiny and can still truncate.
- **Tile text scales with tile width.** Without `maxCharacterCount`, a tile spanning a row gets huge text. Font is about width / characters, so set the count per tile width to keep text even. At 1920 wide: 9, 12, 18 and 24 for tiles of about 200, 300, 460 and 610 px. It's tuned for one width: the same settings gave tiny text at about 1000 px.
- A widget's `customLayouts` is silently ignored if it doesn't fit. A second definition in the list didn't rescue a page at 1180 px (it fell back to the automatic layout), so don't rely on one.
- Numbers in `customLayouts` are child positions, so `"1 3 5\n2 4 6"` puts each pair in a column (a state above its button). `"1 1 2 2 3 3\n4 4 4 5 5 5"` gives five tiles with none spanning a row. Three rows of tiles fit a half-height widget poorly and get ignored.
- More than six children without a layout turns a widget into paged cards (dots beside the title), which hides tiles.
- **Footer:** seven `MachineControlButton`s with icons and captions overflow at 1180 px and push the last one, Abort, off screen. `captionOnly` still clips at about 1010 px and goes blank at 500 px. Use two `MachineControls` sets with opposite `displayIf`: `captionOnly` above 1100 px and `iconOnly` below. Check the last button at every width.
- `MatchesDeviceSize` modes are `min-width`, `max-width`, `exact`, `smaller-than` and `larger-than`. `larger-than` is width OR height and `max-width` is width AND height, so they're exact opposites. To decide on width alone, add a `config.screenSizes` entry with a huge height.
- A gauge prints its unit inside the arc, so `cartons/min` overlaps it. Use a short unit and put the rest in the widget title.
- `minValue`/`maxValue` are in raw units, with `scaling` applied on top: a 0–40 display with factor 1/6 needs `maxValue: 240`. `hmi_check.py` `VALUES` lists raw values too, so check the screenshot for what's displayed.
- An Output in a Parameter is clipped at about a quarter of the page width at 1180 px. A `Markdown` element bound to the variable wraps instead.
- Clipping can appear at only one width, so check desktop, tablet and narrow.

**Logic without the SDK:** a built-in combination often replaces a custom widget. `componentApi` with a `LocalVariable` gives local state, `ComponentData` reads it and `WriteComponentProperty` writes it. `Random` with `roundValues` is `Math.round(uniform(min,max))`, so the end values are half as likely; use `0.5..6.5` for a fair 1–6.

**Machine commands:** write `true` with `WriteDataVariable` to a Boolean with `"autoReset": {"after": 500, "to": false}`; the bits were seen back at false after a press. Grey buttons out with `isDisabled` = `Switch` on the state number (`cases` false, `default` true), mirroring what the PLC accepts. `Switch` also maps a Boolean to a word and a colour (`when: true/false`, `then: SignalingStatus`), which reads better than a raw boolean. `scripts/example_machine_control.py` is a complete PackML example.

**New PLC tags stay `not found` until two things happen, in this order:** restart the OPC UA server, then refresh the connection in the HELIO IDE. Tested: a refresh alone left the same node count. See `references/ctrlx-opcua.md`.

**The demo license allows one project,** so delete the old one first: `helio.py get`, then `helio.py delete`.

**Safety and data rules:** min/max and enums are only client-side, so the PLC must reject bad values too. Auto Reset only fires when HELIO itself wrote the value. Extensions run on the HMI's single JS thread, so a blocking one freezes the machine interface.

## Custom widgets and code in the HMI

Check the version first, then choose:

| Installed | Route |
|---|---|
| 25.4 or later | SDK extension: a real element with server storage |
| Before 25.4 | `EmbeddedWebview` element holding a `data:` URL: no server, but no storage or HELIO variables |

If the user is on 25.1 and wants it now, say what the `data:` route loses and let them choose. A page served from another machine also needs HTTPS, a certificate each browser has accepted, and that machine staying up, and users may not want that.

**SDK extension** (template: `git clone https://github.com/HMIProject/helio-extension-template.git`). Tested in real HELIO 25.4.0 on ctrlX, with Blockly as a widget:

- Install through the IDE: Settings > Extensions > Add Extension, then Save Project. The button opens a native file picker, so through Claude in Chrome, first patch `HTMLInputElement.prototype.click` in the page to set the input's `files` from a `DataTransfer` and fire `change`. The file is stored as a project asset under `config.extensions`.
- A new Dashboard Page comes with two empty widgets: delete them (select in the tree, press Delete). The page's `+` offers "to Widgets…" and "to Footer…" first. A title opens the translation editor, so set the German text too. The instance class is `<namespace>.<element name>`.
- Saving from a newer IDE rewrites the project to that version's format, moving page title and icon to `traitProps`. A diff then shows nearly every element, so compare IDs, data entries and class counts instead.

- SDK 1.0.0 targets HELIO 25.4.0 and SDK 1.1.0 targets 26.2.0. Pin 1.0.0 for the widest range.
- Node 22.14.0 may be at `~/.local/share/node-v22.14.0`, outside PATH. `npm install --ignore-scripts` is enough to build.
- The npm SDK's `lib/main.js` is only a development stand-in (`useRenderMode` always returns `Runtime`, for example). To test the built file, `references/sdk/test-host/host.tsx` sets `React`, `$` and `HELIO.v1`, then imports it. Passing there doesn't prove it works in HELIO, so say so.
- Render with `useServerState` for shared saving, but only save after edits, so that opening a widget can't overwrite data it couldn't read. In `PreviewEdit`, stay read-only and set `pointer-events: none`, so that the IDE can select the element.
- Use plain HTML or test in real HELIO: SDK components such as `Button` and `Dialog` are only real inside HELIO.

**Bundling a library such as Blockly** (tested in real HELIO via `data:`, and by fake host as an extension):

- Set `nodeResolve({ browser: true })` in Rollup, or the build picks Blockly's Node version.
- Set Blockly's `media` to `data:,`, or it loads from unpkg.com. Its zoom controls and trash can need that media folder, so turn them off, add your own zoom buttons and delete by dragging to the toolbox. Check that no outside requests are made.
- Blockly removes words shared by every dropdown option: `X axis`, `Y axis` show as `X`, `Y` with `axis` outside the menu.
- Dragging breaks under CSS zoom, but HELIO 25.4's zoom doesn't use it: the bundle multiplies design tokens by `zoomFactor`, and `currentCSSZoom` was 1. Custom content therefore won't follow the HMI's zoom unless it reads `useZoom()`.
- `block.getSvgRoot()` includes every block chained below it. For one block's own shape, use `block.pathObject.svgPath`, or a test drop lands below the whole chain.
- Container queries (`container-type: inline-size`) lay out by widget width rather than screen width.
- Blocks are safer compiled to a flat step list than to JavaScript: repeats unrolled and a step limit enforced, so a nested repeat can't run away. The PLC must still check every step.

**`data:` URL in an iframe on 25.1.1** (tested in real HELIO, with a 1.28 MB URL in a 1.6 MB project):

- Element: `com.helio-hmi.builtin.EmbeddedWebview`, version 2, `props: {"target": {"type": "ManualUrl", "url": "data:text/html;base64,..."}}`. It goes in a `DashboardWidget`'s `children`, and templates only show the page form `WebviewPage`. The iframe has no `sandbox` attribute.
- `references/sdk/test-host/build_embed.py` bundles a page with `--charset=ascii` and refuses a stray `</script`. `add_tab.py` adds the page, widget and frame, and refuses to write if anything else would change. Adapt both.
- The document has an opaque origin, so `localStorage` throws. Changing tabs destroys the iframe, and the work in it is lost. Show that on screen and offer Export.
- Keep the URL under Chrome's 2 MB limit and don't set a large `min-height` inside: at 1180 px it caused a second scrollbar.
- Devtools sees a `data:` frame as part of the page, not as a target. Reach it with `Page.getFrameTree` and `Page.createIsolatedWorld`.

## Signing in through the user's browser

`helio.py` only has its own session. A login in Chrome doesn't carry over: `{currentLogin{__typename}}` returning `null` means this session isn't signed in. If the user says they are signed in to Chrome, use Claude in Chrome instead of asking for a password:

- Run the request in a new tab on the HELIO origin with `javascript_tool`. The session is `localStorage['@helio/sessionId']`, sent as `Authorization: Bearer <id>` to `/helio/graphql`. Keep it in the page: never return it or pass it to the shell.
- A project is too big to send through the tool. Run `scripts/one_file_server.py <file> <helio origin> <port>` (loopback only, one file) and `fetch` it from the page, then stop it. Use `ss -ltnp` to find its PID: `pkill -f <pattern>` can match its own shell and kill the command.
- Download a backup first. Immediately before writing, compare the live project's SHA-256 with the file you patched, and skip the write if it differs. After writing, read back and compare, and check `projects{name error}`.
- `Page.captureScreenshot` through the extension timed out on HELIO, while `javascript_tool` worked. Use `hmi_check.py` for screenshots: the runtime needed no login there.
- The demo license's limit of one project means nothing can be tested in a second project, so test the real one and keep the backup ready.
- An IDE tab left open on the project can overwrite the upload when saved. Warn the user before writing.
- Clicks on the runtime: `element.click()` on the exact label works even for tabs inside the closed Menu. Never click the footer's machine buttons in a check.
- Note the machine state and axis positions before and after a session, in a file that won't be overwritten, so that a change can be attributed. On 25.4, `helio.py info` fails because `/health` no longer returns JSON; read the version from the page title.

## Reference files

Read when relevant:

- `references/dev-notes.md`: the full guide (concepts, project JSON with snippets, GraphQL and Hyperion, SDK). Each section is short, so grep for a heading.
- `references/ctrlx-opcua.md`: creating the secure OPC UA connection on a ctrlX, step by step.
- `references/templates-25.1.1/`: real projects. `Playground HMI.json` and `v24-2 Showcase.json` show nearly every element, action and property. Search them for a `classId`.
- `references/sdk/`: extension template source, rollup config and SDK 1.1.0 type declarations. API docs: https://sdk.v1.docs.helio-hmi.com
- `references/sdk/test-host/`: fake HELIO host for testing a built extension, and the `data:` page build and project patch scripts.
- `scripts/one_file_server.py`: serves one file on loopback so a page in the local Chrome can fetch it.
- `scripts/example_machine_control.py`: a machine HMI on PLC symbols (PackML footer, axes, alarms, simulation), with command writes.
- `scripts/example_project.py`: a complete generator, the ctrlX System Monitor (dashboards, trend, parameter page, dice widget). Adapt it rather than starting from nothing.

The GraphQL and Hyperion APIs are the IDE's internal, undocumented ones and can change between versions, so check them against the IDE bundle if a call fails after an upgrade. Connection config, including OPC UA passwords and private keys, is stored in the Runtime's config, so don't print it unredacted.
