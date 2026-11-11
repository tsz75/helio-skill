
# HELIO 25.2.3
September 8, 2025
·
2 min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 25.2.3 - is the third patch release for
HELIO 25.2.

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

## Changelog
**Fixed**
Runtime
NOA Connection
HELIO-1709 Improved discovery of late producers on startup.
Recipes
HELIO-1775 Reset the active recipe once it has been deleted.
IDE
Content View
HELIO-1753 Fixed the translation of dialogs in the content tree.
Messages View
HELIO-1774 Fixed rendering issue that caused message types and
message triggers to be partially hidden when switching between views.
**Changed**
Runtime
**Suppressed Warnings for OPC UA Data Types Used by SIMATIC S7 PLCs**
HELIO now suppresses warning messages that previously appeared when connecting
to SIMATIC S7 PLCs that use OPC UA data types not yet natively supported by
HELIO. These warnings were misleading, as they suggested a configuration issue
on the user side, when in fact they simply indicated data types that HELIO
doesn't currently recognize. This change improves the user experience by
eliminating unnecessary alarm noise during normal operation. We are actively
working on expanding HELIO's native support for additional SIMATIC data types,
and you can expect improved compatibility in upcoming releases.
