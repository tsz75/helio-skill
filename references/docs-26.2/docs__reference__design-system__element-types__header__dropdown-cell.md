
# Dropdown Cell

## About
Dropdown Cells are a special kind of Header Cells. They provide operators
with a list of options to choose from.
To enable the dropdown function of this cell, the linked data variable
must have the Enumerations property set.

## Properties

### General

#### Display
Choose whether to display only text, only an icon, or both within the Dropdown
Cell.

#### Title
Select the title of the Dropdown Cell. This text will be more prominent and
should contain the most important information.

#### Icon
Choose the Icon to display within the Dropdown Cell.

#### Value
Choose the Enum Value to display within the Dropdown Cell.

#### Is Disabled
Prevent operators from triggering the action of this Dropdown Cell.

### Apply Status

#### From Value with Ranges
Use this option, if the variable linked to `Value`  provides status information. This will allow you to automatically apply the status from Value to indicate the quality of the value as either `Good`, `Warning`,  `Critical` or `Accent`.
**Learn more** with the following resources:
- Ranges
- Communicating Machine Status with Clarity

#### Manually
Determine manually which status should be displayed by the element.
-> For more information: visit
Status
.

### Sizing

#### Width
Select the width of the Dropdown Cell or choose wether you want the Dropdown
Cell to shrink according to it’s content.

### Responsive Behavior

#### Keep visible as long as possible
This option is mostly important for smaller displays where the element may need to shrink. Check this option for the most important children. They will then be kept withing the visible viewport as long as possible.
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

## Related

#### Elements
Logo Cell
