
# HELIO 26.1.3
June 29, 2026
·
2 min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 26.1.3 is the second patch release for
HELIO 26.1.

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
General
HELIO-7359 Fixed floating point precision issues in number
conversions
Design System
HELIO-7331 Collection Widget: Fixed issue where Dashboard
Page footer appeared twice when a Collection Widget was present
Actions
HELIO-7333 Confirm and Execute Critical Action: Fixed issue
where non-callable actions could still be executed
HMI
Page Group
HELIO-7393 Fixed issue where pages with "Hide Page" enabled
were displayed in nested Page Groups
HELIO-7360 Fixed issue where pages hidden via display
conditions were still listed in the navigation
Data Layer
OPC UA Connection
HELIO-7292 Gracefully handle generic super types when
browsing the node hierarchy
HELIO-7344 Improved general stability when browsing the node
hierarchy
HELIO-7208 Fixed missing nodes while browsing by path
