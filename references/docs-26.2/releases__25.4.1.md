
# HELIO 25.4.1
February 11, 2026
·
2 min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 25.4.1 is the first patch release for
HELIO 25.4.

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
**Added**
Data Layer
NOA Connection
HELIO-2044 Added new advanced setting to delay discovery of
producers after successful connection with 15 seconds as the new default
**Fixed**
Data Layer
OPC UA Connection
HELIO-2041 Fixed collection of node properties when browsing child
references
HELIO-2038 Fixed reading of scalar SIMATIC DT values
HELIO-2039 Do not abort browsing when encountering reserved
SIMATIC data types
HELIO-6130 Fixed potential errors in the Data Source Explorer after reconnecting
HELIO-6177 Improved variable type detection from imprecise "ValueRank" attribute
IDE
Data View
HELIO-2050  Fixed display of dynamic metadata settings
Components
HELIO-2036 Fixed component overrides getting lost when
duplicating instances
HELIO-6171 Fixed errors when saving buffered changes in a component
HMI
HELIO-2043 Fixed an issue with displaying certain page types
Messaging
HELIO-6029 Fixed support for enumerations of "Additional Variable Records" in message dialogs
Page Group
HELIO-2040 Fixed duplicate selection highlight in menu
Parameter Page
HELIO-2040 Fixed issue where the unsaved changes dialog was not
appearing on pages with `Write Mode` set to `Direct`
