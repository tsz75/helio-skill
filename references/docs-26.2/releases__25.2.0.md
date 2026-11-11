
# HELIO 25.2.0
July 30, 2025
·
17 min read
·
Tagged with
- # release
Philipp Kruse
HELIO CTO
Matthias Wagler
HELIO Product Owner
We are excited to announce that HELIO 25.2.0, our second feature release of
2025, is now officially available to everyone 🎉!

## Download HELIO
Grab the Latest Version
HELIO
26.2 (stable)

### Start Fresh
- Take the Quick Tour
- Start HELIO
- Build your first HMI

### Upgrade
Follow the Upgrade HELIO to 25.2.0 guide.

## Highlights
Let's dive into the highlights of this release…
- Audit Trail – a Flight Data Recorder for Your HMI
- Sneak Peek: The HELIO SDK – Built for Ambitious Projects
- Multi-Line Trend Element – Compare What Matters
- Less Hunting Through Data – Enhanced States Using Enumerations
- Take Control of the Details
- Enhanced URL Parameter Support –  Tailored HMIs Without the Tailoring Headaches
- Self-Explaining Icons
- Improved Unit Conversion & Value Scaling – One HMI, Every Market
- Unbreakable Workflows
- Project Export With Translations – Simplified Target Device Commissioning
- Sneak Peek: Personalization With Zoom

### Audit Trail – a Flight Data Recorder for Your HMI
Transparency and security are of vital importance when automating processes.
In many industries it is essential to track changes made
to a machine, especially where compliance with regulatory frameworks such as
FDA 21 CFR Part 11 is mandatory.
We are excited to take the next step in making life even easier for HMI
engineers with the Audit Trail. You can begin integration straight
away with the new
Audit Trail
Page and the
Audit Trail Settings
or read our detailed guide for more information.
If you are building machines and HMIs that need to comply with
FDA 21 CFR Part 11 take a look at
our
guide on how HELIO can help.

### Sneak Peek: The HELIO SDK – Built for Ambitious Projects
Our standard library already offers many options for common use cases. However, we
understand that sometimes you need to add new solutions to meet specific requirements.
We are almost ready to fully take the wraps off one of our most requested features:
Starting this fall, you'll be able to use the HELIO SDK to develop extensions containing
your own controls or pages and integrate them with the HELIO system!
Building on our highly extensible core architecture, we have carefully designed APIs
that allow you to start quickly while also scaling for large teams and long product cycles.
To us, product development is about safely adapting to changing requirements. The SDK
embodies this focus with its emphasis on type safety and built-in migration support.
Written entirely in TypeScript, you're able to build
HELIO extensions that are statically verified by the TypeScript compiler and will behave
predictably at runtime. Evolving those extensions over time is also very easy. HELIO
can automatically migrate projects to new extension versions using our built-in data
migration tools.
We are also integrating support for automatic testing tools that allow you to verify a
control's behavior and appearance. By using libraries like Storybook
and Vitest, which have become the gold standard in web development,
you can create even highly complex UIs and make changes with confidence.
All these tools are essential for enabling sustainable projects that can scale to large
teams and organizations and will support you in creating great software for your users.
We are currently beta testing this feature internally and with select customers. We look
forward to sharing more about it over the coming months.
If you want to learn more about the HELIO SDK, feel free to
reach out to us for a demo presentation.

### Multi-Line Trend Element – Compare What Matters
The `Trend` Element has been updated to support multiple trend lines in a single
graph, allowing you to compare different related values with ease.
This saves screen space and helps operators easily identify relationships between
data, such as how temperature changes affect pressure or how to compare multiple
production line outputs at a glance.

### Less Hunting Through Data – Enhanced States Using Enumerations
The `Collection Page` now supports enhanced visualizations through `Enumerations`.
Instead of scanning through endless rows of similar-looking data, you can now
use colors, custom icons, and cell highlighting to instantly communicate status
and quality.
This means outliers and critical items jump out immediately – whether it's a
machine running hot, a batch that needs attention, or equipment due for
maintenance. Less hunting through data, more time acting on what matters.
Status
Icon
Status
Icon
Highlight
Status
Value
Highlight
Status
Value
Conditional Highlight

### Take Control of the Details
HELIO 25.2.0 also introduces a new option to the `Detail View` of your
`Collection Pages` that will give you more control on how the details will be
displayed:
Details as Overlay
Details as Side Panel

### Enhanced URL Parameter Support –  Tailored HMIs Without the Tailoring Headaches
URL Parameters are a very versatile tool to achieve a lot of flexibility for
HMIs. They allow you to pass data from the outside into your HMI, enabling
powerful customization scenarios. For example, you can define a parameter that
identifies different panel locations at your machine, allowing the same HMI to
adapt its behavior based on where it's being used.
With HELIO 25.2.0, we're introducing two new dynamic properties that you can use
to create more dynamic HMIs that adapt to their usage context and the people
using them:
- `Is URL Parameter Set` allows you
to check whether a specific URL parameter
has been provided, enabling conditional logic in your HMI design.
- `URL Parameter Value` lets you
directly access and utilize the values passed
through URL parameters in your dynamic property configurations.

### Self-Explaining Icons
We take great care of our steadily growing icon family. However, finding the
right icon in such a large collection is quite challenging. That's why, from the
beginning, we have added metadata to icons to make them more discoverable.
With that in mind, HELIO 25.2.0 introduces an icon tooltip while scanning through
the icon library to provide more context to icons quickly. The tooltip features
an icon's name and additional tags that provide more information.

### Improved Unit Conversion & Value Scaling – One HMI, Every Market
Unit conversion & value scaling have been part of HELIO for a while, but
we've made it much easier to set up. When you're shipping machines to both
Europe and the US, your operators shouldn't have to think in foreign units –
whether that's °C to °F or bar to PSI.
We've reorganized the interface to make source and target units clearer and
added helpful conversion examples so you can set up localized HMIs without
the guesswork. Build once, deploy everywhere.

### Unbreakable Workflows
We've enhanced `Page Groups` and `Tab Groups` to allow for nesting, enabling page
groups to be placed within tab groups and vice versa. This facilitates effective
workflow navigation, assisting users in navigating multistep processes.
HELIO intelligently adapts the UI to various display sizes, allowing your product
team to design a single workflow that functions perfectly, regardless of the panel
size operators are using.

### Project Export With Translations – Simplified Target Device Commissioning
Getting projects onto your target device has become even easier: We've streamlined
project deployment by letting you include all translations directly in your project
export.
Plus, we've added a new guide Commissioning to Target
Device to walk you through the
entire deployment process.

### Sneak Peek: Personalization With Zoom
Industrial environments are as diverse as the people who work in them. Operators
bring various experiences and preferences to their daily interactions with machines.
Furthermore, HMIs are expanding to new output devices, such as large TV screens.
This diversity of people and devices underscores the need for more accessible and
adjustable interfaces. This concept is commonly referred to as accessibility, and
we have been working diligently to integrate it into HELIO.
In upcoming versions, we will introduce a variety of new Personalization features.
The Zoom, by far the most frequently requested personalization feature, will be
released first. It allows operators to adapt HMI elements to their particular
needs or the device they're using.
When working in challenging conditions – whether it's viewing from a
distance, or simply needing larger interactive elements for easier operation –
operators can now make buttons, text, and controls bigger. Also, if you need to
monitor more data points at the same time, you can now make your HMI smaller so
that more information fits on the screen.
The new Zoom feature will ship this fall. If you're interested in trying
it out, get in touch with our team.

## Changelog

### New Features
Audit Trail
- Added `Audit Trail Page`
- Added `Audit Trail Settings`
- Added `Export Audit Trail Action`
Recipe Management
HELIO-1321 Added support for exporting and importing recipes using CSV
files.
Dynamic Properties
HELIO-1381 Added `Is URL Parameter Set` property
HELIO-1381 Added `URL Parameter Value` property
Parameter.”
Heartbeat
HELIO-1461 Added Heartbeat Settings
to inform data sources of the current status of clients and detect when a client is no longer active.
Early Access: SDK
HELIO-1297 Introduce Extensions Upload
Early Access: Personalization
HELIO-1303 Introduce Personalization default settings
HELIO-1303 Introduce Personalization dialog

### Improvements
Design System
Pages
Collection Page
HELIO-1442 Improved `Collection Page` with status display
using `Enumerations`
HELIO-1386 Improved `Detail-View` new `As Side Panel` option.
Message Page
HELIO-1458 Added ability to add custom footer actions to the `Message Page`
Elements
Data Visualizations
HELIO-944 Extended `Trend` Element with support
for multiple curves
Image
HELIO-1482 Increased marker length to 5.
IDE
Content View
HELIO now displays an info message beneath every enabled `Display Condition`
while `Edit Mode` is active. As a reminder why this condition will not have
any affect during editing.
HELIO-1592 For clarity and transparency, error messages in
the IDE will no longer hide automatically.
Project Settings
HELIO-1610 In order to structure the growing number of
Project Settings more clearly, we have divided the settings into smaller
and more distinct sections.
Properties Panel
HELIO-1598 Dynamic properties are now expanded by default after activation.
HELIO-1593 Improve copy & pasting into non-expanded dynamic properties
Data View
HELIO-1521 Improved value scaling and unit conversions
HELIO-1635 Added the ability to copy and paste the
properties of data variables
HELIO-1645 Made it easier to spot disconnected data
connections from any view of the `Project Editor`
OPC UA Connection
HELIO-1312 Advanced Settings have been added to adjust the low-level inner
workings of a connection, such as the `Sampling Interval`.
HELIO-1416 Added support for binary DER format for
certificate upload and download.
HELIO-1487 If provided by the PLC, HELIO now
automatically detects and imports units and ranges of a variable.
HMI Users
HELIO-1565 Introduce `Localize` option for User Roles so
they can be translated into the active HMI language
Welcome Page
HELIO-1527 Introduced `Run With Options` action for projects
to simplify the process of running projects with built-in URL parameters.
Messaging
HELIO-1367 Made adjustments to message trigger implementation:
- `Dynamic Message` trigger was renamed to `JSON Object` trigger
- Introduced `Dynamic Message` trigger with improved
configuration that simplifies the selection of data variables
HELIO-1350 Introduced a `Fallback Message` with ability to access
message code using `{$heMessageCode}` placeholder.
HELIO-1367 Refined dynamic message trigger into two use
cases: JSON object and string variables.
HELIO-1158 Enabled placeholder variables in message titles,
descriptions, etc.
Runtime
MQTT Connection
HELIO-1588 Request-Response Pattern: improved compatibility with
older clients that only support earlier versions of MQTT, prior to version
5.

### Fixed
Design System
Elements
Data List
HELIO-1495 Fixed display of multiple units
Dialogs
HELIO-725 Refactored and streamlined all `Dialogs` used
in HMIs. Ability to customize dialogs for custom themes has also been
improved.
HELIO-1634 Prevent dialogs and page overlays from overlapping
important areas such as the `Status Bar`, `Header`, `Sidebar`, or `Footer`
Header
HELIO-1574 Introduced `Main Navigation Cell` to simplify
the process of adding the main navigation to the header of the HMI.
Overlays
HELIO-1564 Fixed a bug that allowed floating overlays to
close elements behind their backdrop
Markdown
HELIO-1560 Fixed broken dialog for `Show More` button
Linear Flow Module
HELIO-1616 Fix `Apply Status` behavior
HMI
Messaging
HELIO-1441 Fixed an issue on the message page where the
internal user ID was displayed instead of the user's display name.
Exclusive Control
HELIO-1579 Prevent closed clients from retaining exclusive
control
Actions
HELIO-1457 Fixed `Import List Items from CSV File` action
On-Screen Keyboard
HELIO-1473 Fixed keyboard for date and time input
IDE
HELIO-1600 Fix tooltip UX by making them non-interactive by
default to prevent overlapping elements
Content View
HELIO-1493 Removed bad translations
HELIO-1526 Fixed `Cases` display for Dynamic Property
`Switch` and autofill its cases when being used with Enumerations.
Data View
HELIO-1394 Prevent the creation of multiple data connections with the same name
OPC UA Connection
HELIO-1422 Fixed copy and pasting of certificates
HMI Users View
HELIO-1528 Fixed an issue with broken HMI User Roles
Welcome Page
HELIO-1532 Fixed bug when canceling project import
HELIO-1630 Improve project export with broken assets
Runtime
HELIO-1468 Enhanced security validation in the IDE API layer
HELIO-1596 Fixed `Filter List` feature when filtering falsy values
OPC UA Connection
HELIO-1615 Improve browsing stability by handling errors in
metadata requests more effectively.
HELIO-1645 Handle disconnects and reconnects more effectively

## Icons
Our design crew has also **added 46 new icons** to the `HELIO Icon Set`,
bringing **the total to a whopping 1,138**. 🎉
Added
Avocado
Barrier
Bottle
BreadLoaf
Bus
Carrot
Cheese
CoffeeCup
Comparison
DustMask
EyeOfProvidence
FoilWrapping
FriedEgg
Hairnet
HalfMask
Hardhat
HearingProtection
Hyperlink
PIDCentrifugalPump2
PIDCompressor
PIDConveyor
PIDCrane
PIDDryer
PIDElevator2
PIDElevator
PIDFilter1
PIDFilter3
PIDFlange
PIDGasBlower
PIDInLineMixer
PIDMotorGenerator
PIDMotor
PIDPistonExtruder
PIDRotaryValve2
PIDUnion
PizzaSlice
ProtectiveShoes
Roast
SafetyGlasses
SafetyJacket
Soda
SoupBowl
SurveillanceCamera
TapeRecorder
VideoCamera
WorkGloves
