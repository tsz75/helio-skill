
# HELIO 25.4.4
April 23, 2026
·
One min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 25.4.4 is the fourth patch release for
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
**Fixed**
IDE
HELIO-6690 Fixed issue where special characters (e.g., `[`, `]`, `/`, `.`, `*`, `?`)
where not sanitized when dragging PLC nodes into the HMI
tree until the project was saved
HELIO-6886 Fixed possible crash when adding a new language to a
project
Data Layer
HELIO-6649 Added missing coercion to PLC data type when writing
variable values
