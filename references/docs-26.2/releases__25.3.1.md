
# HELIO 25.3.1
October 21, 2025
·
7 min read
·
Tagged with
- # release
Philipp Kruse
HELIO CTO
Matthias Wagler
HELIO Product Owner
We are excited to announce that HELIO 25.3.1, our third feature release of
2025, is now officially available to everyone. With HELIO 25.3.1, you can connect
faster, run stronger, and build better.

## Download HELIO
Grab the Latest Version
HELIO
26.2 (stable)

### Start Fresh
- Take the Quick Tour
- Start HELIO
- Build your first HMI

### Upgrade
Follow the Upgrade HELIO guide.

## Highlights
Let's dive into the highlights of this release…
- OPC UA: Connect Faster. Run Stronger. Build Better.
- IDE: Performance Improvement for Large Translation Sets
- Last Active Message Metadata – Critical Information at a Glance
- Fixed Size Overlays – Precision Control When You Need It

### OPC UA: Connect Faster. Run Stronger. Build Better.
HELIO's connection startup just got a major upgrade. Whether you're developing
in the IDE, commissioning projects, or running in production, HELIO now connects
to OPC UA servers instantly. This improvement comes from listening to our
customers and a dedicated team effort across engineering and design.
Your connections will be rock solid now, whether you’re working with controllers
with limited resources or with large data trees – even when PLCs
disconnect and reconnect. Less waiting. More building. Better results.

### IDE: Performance Improvement for Large Translation Sets
We've reworked our translation engine to improve support for projects with large
sets of translations. HELIO is now handling translation sets of 50,000 entries
with ease. It still provides instant keyboard feedback and adjusts translations
in the blink of an eye.

### Last Active Message Metadata – Critical Information at a Glance
←
→
Industrial operators need instant visibility into system status, especially when
messages demand attention. While HELIO has always let you display active message
counts, operators often need more context.
The new `Last Active Message Metadata`
dynamic property type delivers exactly this information. Operators can now see the
complete details of the most recent message directly in their HMI header or
status displays.
This follows a proven pattern in industrial interfaces: giving operators
immediate context about the most critical or recent system events without
requiring them to navigate away from their current task.

### Fixed Size Overlays – Precision Control When You Need It
Sometimes you need dimensional precision with your overlays. Picture this: an
interactive SVG where operators click on a layer and need just a
small, focused overlay showing a brief status update or instruction. You don't
want a sprawling, responsive overlay that dominates the screen – you want
exactly the right size, exactly where you need it.
The `Open Page as Overlay` action now supports fixed sizing, letting you specify
exact width and height dimensions for your overlays. Perfect for those compact
floating displays that need to stay out of the way while delivering focused
information.
But here's where it gets even more powerful: since width and height are Dynamic
Properties, you can make your "fixed" overlays responsive. Using the Dynamic
Property `Device Size`,
you can set different overlay dimensions for tablets versus large industrial
displays. Small details, big impact.

## Changelog

### New Features
Collection Page
- Added Side Panel slot to Collection Page
Messaging
HELIO-1684 Added "Last Active Message Metadata" dynamic property
HELIO-1530 Early Access: Added "Numeric" trigger
Message List Trigger
HELIO-1530 Introduced ability to use timestamps from PLC
Recipe Management
HELIO-1744 Added "Rename Active Recipe" action
HELIO-1744 Improved "Delete Recipe" dialog
HMI User Management
HELIO-1658 Added "Add User" action
Video Page & Video Element
HELIO-1712 Added "Loop" and "Autoplay" to the Video element
Overlays
HELIO-1717 Added "Fixed" size option for "Open Page as Overlay" action.
Project Templates
HELIO-1764 Added "Production Workflows Using Flow Maps" template
Data Layer
OPC UA Connection
HELIO-1764 Added support for more SIMATIC types:
- Time / LTime
- Date
- TOD / LTOD
HELIO-1764 Added support for more built-in types:
- Duration (i=290)
- DurationString (i=12879)
- TimeString (i=12880)
- DateString (i=12881)

### Improvements
HMI
Performance
- Previously loaded pages now load faster
Messaging
HELIO-1784 Improved rendering performance of message dialogs
IDE
Performance
- Improved performance for projects with large translation files
- Clean-up action in Translation Manager now provides better user feedback
Docs
- Added documentation links to Property Panel
Pages
- Improved consistency when working with Page Footers
Data Layer
OPC UA Connection
HELIO-823 Improved startup time and connection reliability

### Fixed
On-Screen Keyboard
HELIO-1584 Made sure to apply URL parameter "enableOSK" on Android and iOS devices
HELIO-1255 Fix position when using a "Sidebar"
Design System
Elements
Magic Output
HELIO-1749 Conceal variables of subtype "Password"
Dialogs
HELIO-1790 Fix dialogs disappearing when adjusting zoom
Messaging
HELIO-1784 Fixed issues when closing message dialogs
HELIO-1760 Fixed message dialogs showing empty solution text
HELIO-1857 Fixed "Export Message" leading to unresponsive HMI
Actions
Write Data Variable
HELIO-1805 Fixed writing to wrong variable when used inside "Switch" property
Save Recipe
HELIO-1785 Fix On-Screen Keyboard not appearing in dialog
IDE
Images
HELIO-1545 Fixed handling of encoded characters in SVGs
Data Layer
OPC UA Connection
HELIO-1691 Suppress warnings for an undefined data type used by SIMATIC S7 PLCs
HELIO-1691 Fixed incomplete node hierarchies for SIMATIC S7 PLCs
HELIO-1769 Recover from "BadTooManyMonitoredItems" errors to prevent missing values
HELIO-1645 Improved disconnection handling
NOA Connection
HELIO-1709 Improved disconnection handling
HELIO-1769 Improved handling of monitored items
Data Variable Types
HELIO-1808 Fixed Translation Keys With Values

## Icons
2 icons have been added to the `HELIO Icon Set`, bringing
**the total to a whopping 1140**. 🎉
Added
DottedCircle
EmptyPage
