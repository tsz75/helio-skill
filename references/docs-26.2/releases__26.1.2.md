
# HELIO 26.1.2
June 15, 2026
·
2 min read
·
Tagged with
- # patch
Matthias Wagler
HELIO Product Owner
HELIO 26.1.2 is the first patch release for
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
**Updated**
Data Layer
OPC UA Connection
HELIO-6732 Linked PLC nodes are now identified through `ExpandedNodeId` instead of `NodeId`
**Fixed**
General
HELIO-7275 Fixed performance regression in the HMI and IDE that
could lead to excessive memory usage
Design System
HELIO-7156 Dashboard Widget: Fixed calculation of available
space when multiple child elements are present
HELIO-6631 Fixed background color of parameter rows on user
management pages
HMI
HELIO-7244 Fixed unnecessary re-renders of dynamic properties
that could degrade page performance, most noticeably on pages with "When" display conditions
HELIO-7233 Fixed issue where URL parameters would get lost
when redirecting from legacy preview and runtime URLs
IDE
HELIO-6915 Fixed issue where editing a translation with an
empty key would persist the change after cancellation
