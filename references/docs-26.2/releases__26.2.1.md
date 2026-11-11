
# HELIO 26.2.1
September 22, 2026
·
2 min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 26.2.1 is the first patch release for
HELIO 26.2.

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

## Changelog
**Fixed**
Messaging & Alarming
HELIO-8109 Fixed issue where messages could be archived
prematurely
HELIO-8108 Fixed an issue that could occur when
acknowledging a message, preventing it from being archived
HMI
Flow Map
HELIO-7853 Fixed connectors between modules that
could be drawn in an incorrect state
Collection Page
HELIO-7423 Fixed sorting of time values
Parameter Page
HELIO-7950 Fixed Parameters reserving empty rows for
controls that are hidden by a display condition
Axis Control Widget
HELIO-7366 Fixed size calculation
Image Page with Panels
HELIO-7965 Fixed size calculation of the panel overlays
IDE
HELIO-8104 Fixed bug that caused the license key to not
display correctly
HELIO-8215 Fixed crash that could occur when using
"Turn into..."
Data Layer
NOA Connection
HELIO-8202 Fixed delayed update of variable values after
writing
MQTT Connection
HELIO-8066 Fixed refresh of MQTT connection
HELIO-7694 Fixed crash when purging orphaned variable
value subscriptions of a PLC
