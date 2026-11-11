
# HELIO 26.2.3
October 22, 2026
·
2 min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 26.2.3 is the third patch release for
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
**Updated**
Data Layer
OPC UA Connection
Updated Mbed TLS to v3.6.7, including upstream
security fixes.
We rate the risk for HELIO as low.
**Fixed**
HMI
HELIO-8408 Fixed issue with Dropdown (from List) where it could
take up too much vertical whitespace on Parameter Pages
HELIO-8359 Fixed options of Dropdown Cells in the Header
remaining selectable when the cell becomes disabled while its list is open
IDE
HELIO-8343 Fixed uploading large SVG files
Data Layer
OPC UA Connection
HELIO-7616 Fixed rare cases in which monitored variables
could miss value updates
