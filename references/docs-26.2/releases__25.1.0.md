
# HELIO 25.1.0
March 4, 2025
·
9 min read
·
Tagged with
- # release
Philipp Kruse
HELIO CTO
Matthias Wagler
HELIO Product Owner
We're thrilled to let you know that we've rolled out HELIO 25.1.0, the first
release of 2025, which is now available for everyone to use.

## Download HELIO
Grab the Latest Version
HELIO
26.2 (stable)

## Get Started
- Take the Quick Tour
- Start HELIO
- Build your first HMI

## Highlights
Let's dive into the highlights of this release…
- OPC-UA Stability: A Big Step Forward
- Secure Connections Over OPC-UA
- Mixing & Nesting Page and Tab Groups
- Message Type Export & Import
- New Checkbox Element
- Streamlined Container Properties
- Improved License Transparency
- Translating HMIs Just Got Better
- Improved Unsaved Changes Hint
- HELIO Update Notifier – Because the Best Is Yet to Come!
- ⚡ Faster Trees – IDE Performance Boost

### OPC-UA Stability: A Big Step Forward
We know how frustrating it can be to work with OPC-UA when
connections are not stable. Many of our customers have shared such experiences
with us, and there are several reasons for these instabilities.
The main reason is that older PLCs were simply not designed to handle complex
multi-threaded applications. But modern distributed client-server architectures
make them do just that. Now they have to run the
OPC-UA server on top of their existing workload. And of
course, these servers want to use as few resources as possible on their clients.
This can turn into a problem if the PLC program is complex and requires all the
resources for proper execution.
That's why we focused on OPC-UA stability in this release.
We took those concerns to heart and invested time and effort into improving the
stability of our data layer. We analyzed patterns, ran test suites, and focused
on communicating with low-end PLCs.
We've been able to address lots of issues and make connections more resource
efficient. The result? More reliable and stable connections to
OPC-UA PLCs for you with `HELIO 25.1.0`.

### Secure Connections Over OPC-UA
If you've done it before, you know how tricky it can be to set up a secure
connection with OPC-UA. Generating certificates, understanding the lingo and the
laborious process of figuring out all those little details and settings can be a real
pain. 😤
←
→
Again, we've put a lot of thought into this, tested many different server
configurations, and explored the depths of the protocol. So we're pleased to
report that HELIO 25.1.0 now allows you to easily establish signed
connections with OPC-UA servers. 💪😎
Of course we're not done yet, so keep the feedback coming! But we do think
this is a major step into the right direction.
**Learn More**
→ OPC-UA Connection
→ New Guide: Create a Secure Connection to the ctrlX OPC-UA Server

### Mixing & Nesting Page and Tab Groups
The nesting of `Page Groups` and `Tab Groups` has been improved in a variety of ways,
opening up a world of new possibilities for exploring nested page structures.
Tabs With Page Group
←
→
Page Groups With Tabs
←
→
Tabs With Tabs
←
→
Page Groups With Groups
←
→

### Message Type Export & Import
We are also enhancing our new `Message View` with the ability to export and
import message types as CSV or JSON files. This is especially useful for
customers who need to define a large number of message types, as these types
are often created automatically. You can now convert these lists into CSV
files and import them into HELIO.
←
→

### New Checkbox Element
We've added a new checkbox feature that lets you switch between true and
false values with a checkmark instead of a switch button.
Also, the Magic Input Element now shows the `Control Type` property when
linked to a boolean variable. This gives you the flexibility to choose the
control type that best suits your use case

### Streamlined Container Properties
Hooray for consistency! We've improved the properties for Label, Icon, and
Description for controls and inputs.
We've grouped them together across different elements, such as `Button`,
`Magic Input` and `Magic Output`, into a unified and consistent property
group called `Container`.

### Improved License Transparency
We've enhanced the HELIO Runtime License feedback. Now, you can access
more information about all the activated licenses and their features within your
current HELIO instance.
←
→

### Translating HMIs Just Got Better
Our vision is to empower cross-functional product teams to collaborate
effectively. That's why translating HMIs and keeping track of changes to
translations is a really important issue for us.
You can now choose which languages you want to view and compare in
the `Translation Manager`. You can also see which translations have been changed,
which is really useful after an import.
And we've improved the translation conflict feedback in the `Translation Quick     Editor`, making it easier to resolve such issues with confidence.

### Improved Unsaved Changes Hint
We've also improved the way HELIO tells you about unsaved changes.
Especially
when those changes require you to save in order to take effect in the
preview.

### HELIO Update Notifier – Because the Best Is Yet to Come!
As we said, we're not done yet. In fact, we've got a lot of great stuff planned for our
roadmap. So we want to make sure you're always in the loop. So now, when you open
the `Project Editor`, HELIO will check for updates and let you know about them.

### ⚡ Faster Trees – IDE Performance Boost
Finally, the HELIO IDE is now faster than ever. The trees within the IDE that do
most of the heavy lifting, e.g., rendering thousands of data variables, got a
performance update with this version.

## Changelog
**New Features**
- `Data View`
  - Establish Secure Connections Over OPC-UA
- `Messages View`
  - Message Types can now be exported and imported as JSON or CSV files
- `Welcome Page`
  - The `Add License` function has been re-named `Licenses` and now allows you
to display your licenses.
- Added HELIO Update Notifier
**New Page Types**
- Added Video Page
- Added Trend Page
**New Elements**
- Added Checkbox
**Improved**
- Runtime
  - Improved OPC-UA Stability
- IDE
  - Improved Unsaved Changes Hint
  - Optimized IDE Performance
  - Introduced Translation Manager UX optimizations
  - Introduced Translation Quick Editor UX optimizations
  - `Content View`: Improved `HMI Content Tree`to show the translated texts instead of the `Translation Keys`
- Design System
  - Optimized `Message Page` for medium and small screens

## Icons
Our design crew has also **added 75 new icons** to the `HELIO Icon Set`,
bringing **the total to a whopping 1,092**. 🎉
Added
Apple
BeltDrive
CentralNode
CheckedList
Cockpit
ColumnTiles
Crane
DNA
Dashboard
DataVisualization
Dependency
DisconnectedTiles
DownstreamTransfer
Excavator
FeatherDuster
Flashlight
GenealogicalTree
Grid3x2
Grid3x3
HandheldMicrophone
HorinzontalTree
ItemExclude
ItemIntegrate
MasonryTIles
Microphone
NodeAttraction
NodeMatrix
NodeMovement
NodeSequence
NodeTree
OrganicNodes
PIDAgitator
PIDCentrifugalPump
PIDCompressorPump
PIDControlValve
PIDDryerGenerator
PIDElectricMotor
PIDFanBlades
PIDFanPump
PIDGateValve
PIDHandOperatedGateValve
PIDHeatExchangeCooler
PIDHeatExchanger2
PIDHeatExchanger
PIDPeripheralInjector
PIDPeripheralReducer
PIDPump
PIDRotaryPump
PIDRotaryValve
PIDThermometer
PIDTurbineMotor
PIDVacuumPump
PIDVerticalVessel
PaperWrapping
ProductLabel
Radio
RandomTiles
Satellite
ShoppingBasket
ShoppingCart
SidebarInsetLeft
SidebarInsetRight
SidebarLeft
SidebarRight
SortingPot
TextSidebarLeft
TextSidebarRight
ThreeColumns
Tractor
UniformTiles
VersionBranch
VerticalSplit
Walkietalkie
Zeppelin
Zeroing
