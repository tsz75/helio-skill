
# Audit Trail Page
**Purpose:** Allow operators to view a chronological record of all
interactions with the system that provide documentary evidence.

## About
An `Audit Trail Page` is designed to display a record of all the
interactions with the system, providing a detailed history of events
and changes that have occurred.

## Anatomy
- Title and Icon
- Filters
- Audit trail

## Settings
**Please note** that to enable the audit trail within your HMI, you must
activate it through HELIO’s
Audit Trail Settings. Additionally,
you will need to
specify which interactions you want HELIO to track, which can also
be configured within the settings.

## Properties

### General

#### Title
Will be displayed in the navigation and the page header.

#### Page reference
This optional property lets you define unique short code that is human readable and helps to refer to that page without specifying its actual name. This is helpful especially in multilingual environments because
- It helps your Support-Team to quickly navigate users.
- It can be picked up by the product manual and documentation.
Example reference in main navigation
Example reference in the page title

#### Icon
This icon will be displayed in the main navigation, the page header, and inside an embedded navigation of a `Page Group`.

### Navigation

#### Show/Hide Page
Each page is automatically displayed in the navigation. If you do not want the page to be visible in the navigation, select `Hide page`. The page will remain reachable and can be opened as an overlay or navigated to directly.
Display Condition

#### Condition
The
Display Condition
controls the visibility of an element or page for the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

#### Content
Audit Trail Settings
