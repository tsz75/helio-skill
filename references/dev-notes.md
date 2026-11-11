# HELIO development notes

Written 2026-11-03 from the docs and from building a real project on a ctrlX CORE virtual control running HELIO 25.1.1. Sources are marked: **[live]** observed on that instance, **[docs]** official docs, **[inferred]** my reading of the evidence. Section 1 describes that one install, so check yours with `helio.py info`.

Contents: 1 Installation tested, 2 Architecture and workflow, 3 ctrlX connection, 4 Building blocks, 5 Project file format, 6 Runtime API, 7 SDK, 8 Tested findings, 9 Not verified.

## 1. This installation

| Item | Value |
|---|---|
| HELIO version | **25.1.1** [live: constant in the IDE bundle] (docs "stable" is 26.2) |
| App server version | 0.22.10 [live: `/helio/health`] |
| Edition | ctrlX: `runtimeTarget = CTRL_X` [live] |
| URL from the Windows host | `https://127.0.0.1:8443/helio` |
| URL from this Linux VM | `https://192.168.57.1:8443/helio` (127.0.0.1 is refused here) |
| Proxy | Caddy; `/automation/api/v2` on the same port answers 401, so the ctrlX REST API is there too [live] |
| ctrlX guest IPs | 10.0.2.15 and 192.168.1.1 [live]; looks like a COREvirtual behind port forwarding [inferred] |
| OPC UA | Port 4840 on the host accepts TCP [live]; which server is behind it is not confirmed |
| License | **"Four Hour Engineering Demo License"**: 1 project, 10 data sources, 5000 variables, 11 clients, OPC UA and MQTT [live]. The docs don't explain this license or what happens after four hours. |
| Projects | 6 built-in templates plus `ctrlX System Monitor` [live] |
| IDE login | `eve` / `eve` works; the default user is still active [live] |

Not available on 25.1.1:

- **SDK / extensions.** First released in 25.4.0, with a sneak peek in 25.2.0 [docs]. There are no SDK pages in the 25.1 docs, and `createLibraryExtension` and `HELIO.v1` don't appear in the shipped bundles [live].
- **HTTP API `/api/v1`.** Early access since 26.1.1 [docs]. `/helio/api/v1/*` just returns the app's HTML page [live].
- Also added later, per the 26.2 docs: Audit Trail (25.2), multi-line Trend (25.2), Sankey (25.4), 2D Plot (26.1), Parameter Table (26.2).

Using the SDK means upgrading HELIO first. SDK 1.1.0 requires HELIO 26.2.0 (`references/sdk/helio-sdk-1.1.0-lib/minimumRequiredHelioVersion.d.ts`). The template targets 25.4.0, which suggests SDK 1.0.0 for that version; I haven't verified this.

## 2. Architecture and workflow

- The **Runtime** is the only software on the target. It serves the IDE and the HMIs, and it alone talks to data sources. Both IDE and HMI are browser apps. The IDE needs Chromium; HMIs run on Chromium or WebKit.
- **IDE users and HMI users are separate.** Neither can sign in to the other. The default IDE user is `eve` / `eve`, which should be replaced on production devices [docs].
- HELIO models content, not pixels. Pages and elements reflow across the screen sizes in `config.screenSizes`.
- Project Editor views: Content, Data, HMI Users, Recipes, Messages, Settings.
- Preview has two independent switches:
  - **Edit / Test**: whether the HMI is interactive.
  - **Placeholder / PLC**: **in PLC mode with a linked variable, writes go to the real PLC** [docs].
- There is no autosave. Changes go live only on Save.
- Two strategies: **HMI-first** (design the data model with placeholders, link to the PLC later) or **PLC-first** (drag PLC variables into HMI Data).

Commissioning:

1. Export with Data sources and Translations ticked.
2. Import on the target and fix credentials.
3. To update: export (data sources only if changed), delete the old project (names must be unique; runtime data such as users and audit trail is kept), then re-import.

## 3. ctrlX connection (OPC UA)

OPC UA is the supported way to reach ctrlX; native Data Layer support is only "on the roadmap" [docs, 25.1 and 26.2].

1. Install the ctrlX OPC UA Server app.
2. Data View > Data Source Explorer > add an OPC UA Connection.
3. URL: `opc.tcp://localhost:4840` when the Runtime is on the ctrlX. Use `opc.tcp://<ctrlX-IP>:4840` from a dev PC. **Don't use the `ctrlX-CORE` hostname** the server displays; it causes problems.
4. Tick Establish Secure Connection. An error at this point is expected.
5. In the ctrlX web UI > OPC UA > Certificates, **Trust** HELIO's certificate. If it isn't listed, press Fetch in HELIO again.
6. Press Fetch in HELIO once more to store the server certificate.
7. Tick Authenticate, Username & Password, with the ctrlX user.
8. Test, then Create Connection.

Limited servers: set `maxBatchSizeBrowse`, `timeout*` etc. in `config.json` under `connections.<id>.props` in the data directory, as a last resort. On ctrlX, reach the data directory via the `Manage app data` view; invalid projects are in its `projects/` folder.

## 4. Building blocks

- **Pages (25.1):** Dashboard, Parameter, Collection, Flow Map, Image, Message, Recipe Management, Trend, User Management, Video, Embedded Webview, Page Group, Tab Group. Any page can open as an overlay.
- **Elements:** Magic Input and Magic Output adapt to the variable type and should be the default choice. Controls go in Parameters and Widgets.
- **Dynamic properties:** many props can switch type (static, data variable, condition, etc.).
- **Display condition (`displayIf`):** any page or element can be shown based on a dynamic property.
- **Events > actions:** for example Write Data Variable, Navigate, Open Overlay, Execute Multiple, Confirm and Execute.
- **Components (beta):** reusable parts with local state through Component Properties and Local Variable.

Data rules that matter:

- **Variables are read-only by default.** Writing has to be allowed explicitly (`allowWrite`: All, None or specific roles) [docs].
- Min/max and enums are client-side validation only, so **the PLC must also reject bad values** [docs].
- Auto Reset only fires when HELIO itself wrote the value, so don't rely on it for PLC-driven values [docs].
- Variable types seen in templates: Boolean, Integer, Float, String, DateTime, Date, Time, Duration, TranslationKey, IcuMessage, plus Directory, List (with blueprint) and Method nodes.
- Messages: trigger true > Active Messages; trigger false > Archive. Acknowledging only dismisses the dialog; the message stays active until the trigger clears. Avoid changing codes once fielded.
- Recipes: a Recipe Type groups parameters; a Recipe is a saved set of values.
- Connection names matter: the Quickstart/Playground templates expect specific names (`HELIO Playground PLC`, and `OPC UA Connection` in the Playground links).

Names differ between 25.1 and 26.x, but class IDs in the JSON remain. These look like renames [inferred from pages and IDs; only the Method one is confirmed in upgrade notes]:

| 25.1 docs | 26.x docs | Class ID |
|---|---|---|
| Condition | If / When | `Condition` |
| Check Role | Restrict To Users | `CheckRole` |
| Matches Device Size | Device Size | `MatchesDeviceSize` |
| Embedded Webview (Page) | External Website (Page) | `WebviewPage` |
| Method Output Parameter | Method Output Argument | `MethodResult` |

## 5. Project file format (`version: 13`) [live]

A project is a single JSON file. Top-level keys: `version, config, data, rootInstanceId, instances, themes, themeVars, messages, databases, recipeGroups`. Trees are stored as **flat lists plus ID references**, and every class has its own `version`, used for migrations.

```jsonc
// data[]: flat HMI data tree, root id "$heRoot"
{"id":"$heRoot","type":"Directory","name":"<root>","children":[{"$heDataId":"abc"}]}
{"id":"abc","type":"Variable","name":"OEE",
 "config":{"type":"Float","unit":"%","minValue":0,"maxValue":100,
           "allowRead":"All","allowWrite":"None","placeholder":{"value":92.7},
           "ranges":[{"status":"Critical","lowerBound":0,"upperBound":60},{"status":"Good"}]},
 "link":{"type":"DataTree","path":"/Services/<connection>/Objects/<...>"}}  // link to a source
{"id":"m1","type":"Method","name":"Foo","config":{"allowCall":"All"},"link":{...}}
{"id":"l1","type":"List","name":"Tools","blueprint":{"$heDataId":"d1"},"config":{"allowWrite":"All"},
 "link":{"type":"DataTree","path":"/Services/Tools"}}                        // children link relatively

// instances[]: flat UI tree, root = rootInstanceId
{"id":"x","name":"optional","classId":"com.helio-hmi.builtin.ParameterPage","version":6,
 "displayIf":{/* dynamic property */},"componentApi":[/* component props */],
 "props":{"title":{...},"parameters":[{"$heInstanceId":"child"}]}}
```

Reference markers:

| Marker | Meaning |
|---|---|
| `$heInstanceId` | owned child element |
| `$heWeakInstanceId` | reference to an element elsewhere, e.g. a navigation target |
| `$heDataId` | child in the data tree |
| `$heEntityId` + `version` + `props` | dynamic property value |
| `$heActionId` + `version` + `props` | action |
| `$heUiPath` + `$heUiRecordId` | binding to a variable: path plus the variable's `id` |

Common snippets (all IDs prefixed `com.helio-hmi.builtin.`):

```jsonc
{"$heEntityId":"…MsgFormat","version":1,"props":{"message":"Text or translation key"}}
{"$heEntityId":"…Static","version":2,"props":{"value":0}}
{"$heEntityId":"…ServiceData","version":4,"props":{"path":{"$heUiPath":"/A/B","$heUiRecordId":"<var id>"}}}
{"$heEntityId":"…Condition","version":1,"props":{"left":…,"op":"<","right":…,"trueValue":…,"falseValue":…}}
{"$heEntityId":"…CalculateValue","version":1,"props":{"left":…,"op":"+","right":…}}
{"$heEntityId":"…Icon","version":1,"props":{"icon":"com.helio-hmi.builtin.Menu"}}
{"$heActionId":"…WriteDataVariable","version":4,"props":{"path":{"$heUiPath":"/A","$heUiRecordId":"<id>"},"type":"static","value":1}}
{"$heActionId":"…NavigateToPage","version":2,"props":{"instance":{"$heWeakInstanceId":"<page id>"}}}
{"$heActionId":"…ExecuteMultipleActions","version":1,"props":{"actions":[…],"mode":"in_order"}}
```

Copy `version` numbers from `references/templates-25.1.1/` and never guess them. `Playground HMI.json` and `v24-2 Showcase.json` are the richest examples. Other class versions on this install: Hmi 9, DashboardPage 4, DashboardWidget 5, Parameter 1, ParameterGroup 4, Input (Magic Input) 3, Output (Magic Output) 7, Button 5, CollectionPage 6, HeaderCell 5.

## 6. Runtime API on 25.1.1 [live]

The IDE talks to **GraphQL at `/helio/graphql`** (GraphiQL opens on GET; introspection returns null). This is the app's internal API and **not a documented contract**, so expect changes between versions.

- Readable without signing in: `projects{…}`, `effectiveLicense`, `runtimeTarget`, `ipAddresses`, `currentLogin`, `now`, plus `GET /helio/projects/<name>.json` and `GET /helio/health`.
- Operation names found in the bundle (see section 8 for the ones tested):
  - `login(username,password)`
  - `writeFile(path,content,options:{origin:Projects})`, `readFile`
  - `defineConnection(connectionId,connectionConfig)`, `testConnection(serviceId,serviceProps)`, `saveConfig`
  - `writePlcData(path,value)`, `writeUiTree/pushUiTree/deleteUiTree/callUiTree(env,…)`
  - `updateTranslations`, `writeAsset`, role, user and recipe operations
- `env` is a `UiEnvInput` that requires at least `mode` and `projectId`.

## 7. SDK (needs HELIO >= 25.4)

Stack: TypeScript + React, bundled with Rollup into one `.js`, uploaded per project in Settings > Extensions, then Save and reload the IDE. React and the SDK are externals provided by HELIO (`HELIO.v1`).

```
git clone https://github.com/HMIProject/helio-extension-template.git
npm install ; npm run storybook ; npm run build   # output: lib/<name>-<version>.js
```

Node.js 22.14.0 (the version the template pins via Volta) is at `~/.local/share/node-v22.14.0` on this VM, outside PATH.

```tsx
const ns = createNamespace({ name: 'com.my-company.my-extension' });     // src/namespace.ts

export const El = createElement(ns, {
  name: 'Traffic Light', description: '…',
  traits: [traits.Control],                 // Page | Widget | Control | BufferedChanges
  propsSchema: createPropsSchema().initial({
    value: props.DynamicProperty({ label:'Value', valueType:'Integer', optional:false,
                                   defaultValue: dynamicProperties.DataVariable() }),
    onClick: props.Action({ label:'On click', optional:true }),
  }),
  Component(p) {
    const value = useDataVariable(p.value, { valueType: values.Number() });
    const click = useAction(p.onClick);
    return <>{value.render()}{click.render()}          {/* render() is mandatory */}
      <button disabled={click.canCall !== true} onClick={click.call}>{value.value.raw}</button></>;
  },
});

export default createLibraryExtension({ name:'…', description:'…', version:'1.0.0', author:'…',
  minimumRequiredHelioVersion:'25.4.0', elements:[El], actions:[], dynamicProperties:[] });  // src/main.tsx
```

- Actions: `createAction(ns,{…, useAction(p){ return {canCall, call(), render()} }})`.
- Dynamic properties: `createDynamicProperty(ns,{…, writable, valueTypes:['NumericValue'], useDynamicProperty(){ return {valueType,value,displayValue,canRead,canWrite} }})`.
- Prop types: String, Number, Boolean, Enum, File, Children, DynamicProperty, Action; 1.1 adds Object, List and `visibleIf/enabledIf` with `condition.propEquals`.
- Hooks: `useDataVariable, useDynamicProperty, useAction, useRenderMode, useServerState({scope:'Project'|'User'|'Global'}), useText, useLocale, useToast, useTime, useServerNow, useZoom`; 1.1 adds `useDesignTokens`.
- Styling: `className()`, `cx()`. Check `useRenderMode()` to disable interactivity while in `PreviewEdit`.
- Traits: Widget and Control can't be combined, and some combinations need a specific order.
- **Migrations:** `.migrate(nextSchema, fn)` is append-only. Never edit a shipped migration, or you can corrupt projects.
- **Performance:** extensions run on the HMI's single JS thread, so a blocking extension freezes the machine interface [docs].
- API reference: https://sdk.v1.docs.helio-hmi.com

## 8. Tested by building `ctrlx-system-monitor/` (2026-11-03) [live]

The project generator is `scripts/example_project.py`.

**API facts**

- Send `Authorization: Bearer <id>`, where the client generates the ID: 20 random bytes, base64url, no padding. Wrong length gives `invalid session ID`. Then call `login`.
- `readFile`/`writeFile` content is base64; responses are unpadded. `/config.json` with origin `Config` holds connections.
- `writeFile` to `/<name>.json` creates a working project. `config.type` must be `hmi`.
- `defineConnection` + `saveConfig` creates a connection. The IDE's browsed tree is in the Hyperion `config` value (`knownData`), not in the file.
- Live data is WebSocket `/helio/hyperion`, JSON. First send `{type:"Connect",options:{authorization}}`, then `SubscribeValue` / `ReadValueRequest` with key `dataVariableValue`, args `{env:{mode:"Runtime",projectId:<name>},path}`. It only answers once a client has loaded the project.
- **List parent directories before their children in `data[]`,** or links fail with `unresolved path`.
- Scaling works in a variable's config: `"scaling":{"factor":1e-9,"offset":0}`.

**ctrlX OPC UA server**

- Anonymous and password over `securityMode: None` are both rejected. `SignAndEncrypt` + `Basic256Sha256` + username/password works.
- HELIO's client certificate appears as `rejected` for `rexroth-opcua-server` in the certificate manager after a Fetch, and has to be trusted by a person.
- HMI link prefix: `/Services/<connection name>/Objects/Datalayer/<Data Layer path>`.

**OPC UA node readability on HELIO 25.1.1**

| Data Layer node | Result |
|---|---|
| Analog items: `framework/metrics/system/*`, `system/resources/memory/*`, `.../utilization`, `.../used`, `health/*/value` (mostly) | `is not a variable`: these have an `EngineeringUnits` child, so HELIO treats them as folders |
| Structs: `system/resources/memory/memory`, `cpu/cpu`, `info/info` (any declared type) | `unsupported variant value`; struct reads arrived in 26.1.4 |
| Sub-fields of a struct: `memory/memory/used` | `not found` |
| `system/resources/cpu/{all,coreN}/{all,coreN}` | **works**: plain utilisation number, though the tree labels it JSON |
| Plain values: `info/*`, `characteristics/*`, `boot-count/value`, `cores/total/total` | works |

So **used and available memory can't be read over OPC UA on 25.1.1**, and this virtual control has no temperature at all (no Data Layer node; `/system/api/v1/sensors` returns `[]`). Check any new node in a real browser: an unreadable one renders blank rather than showing an error. Re-test the analog items if HELIO is upgraded, since I don't know whether a newer version reads them.

**Layout lessons**

- Long text doesn't belong in dashboard tiles. `maxCharacterCount` shrinks the font until it's tiny, and it can still truncate.
- A widget's `customLayouts` (e.g. `"1 1 2\n3 3 3\n4 5 6"`, numbers are child positions) is silently ignored when the rows don't fit.
- An Output in a Parameter is clipped at about a quarter of the page width at 1180 px wide, even with `parameterOrientation: "vertical"`. A `Markdown` element bound to the variable wraps instead.
- Always check desktop, tablet and narrow widths; the clipping above appeared only at tablet width.

**Interactive logic without the SDK (dice widget)**

- Local state: put `componentApi: [{name, defaultValue: LocalVariable}]` on an instance. Read it with `ComponentData {name}` and write it with the `WriteComponentProperty` action (`type: "dynamic"`). This never touches the PLC.
- `Random` with `roundValues` is `Math.round(uniform(min,max))`, so the end values are half as likely. Use `0.5..6.5` for a fair 1–6. Measured over 300 rolls: 52/54/48/51/52/43.
- `Random` re-samples on its `interval`, so a click reads the latest sample. Clicks closer together than the interval (100 ms here) give the same number.

**Delete and refresh [live, bundle]:** the IDE deletes a project with `unlinkFile(path:"/<name>.json",options:{origin:Projects})`, used by `helio.py delete`. The refresh button re-defines the connection (see `ctrlx-opcua.md`). An `Input` works without a `label`. `Button.isChecked` exists but is untested. `MachineControlButton.displayElements` takes `captionOnly`, `iconOnly`, `iconAboveCaption` and `iconInFrontCaption`.

## 9. Not verified yet

- Which of the docs' Standalone instructions (CLI flags, data directory paths) apply to the ctrlX snap.
- Whether the connection, project and license survive a runtime restart.
