
# HELIO 25.4.3
March 25, 2026
·
2 min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 25.4.3 is the third patch release for
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
MQTT Connection
HELIO-6538 Added optional "variableSubscription" config section
with properties "messageExpiryIntervalMs" and "messageRefreshIntervalMs"
**Updated**
Data Layer
OPC UA Connection
HELIO-6401 Updated `open62541` to v1.4.16
**Fixed**
Data Layer
OPC UA Connection
HELIO-6323 Fixed connection issues with B&R servers
Lists
HELIO-6464 Fixed throttling of filtered list items
HELIO-6566 Fixed edge cases that could cause empty or pending
filtered lists
HMI
Components
HELIO-6358 Fixed toggling of inverted Boolean Component
Properties
Dynamic Properties
HELIO-6348 Fixed issue where a dynamic property `If` would
display an incorrect operator after changing the left or right item
IDE
Translations
HELIO-6335 Fixed placeholder in search field
Project Import
HELIO-6335 Fixed translations being deleted on project
import, ignoring user choice
Project Editor
Data View
HELIO-6335 Fixed titles of Add/Edit/Remove Connection dialogs
SDK
Custom Elements
HELIO-6572 Fixed auto-detection of name property
