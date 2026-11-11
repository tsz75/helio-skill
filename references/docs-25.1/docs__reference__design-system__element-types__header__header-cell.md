
# Header Cell

## About
Header Cells make up the header of your HMI. They can display various types of
information, including machine status, user data, alarms, and the current
time.

## Properties

### General

#### Display
Choose whether to display only text, only an icon, or both within the Header
Cell.

#### Title
Select the title of the Header Cell. This text will be more prominent and
should contain the most important information.

#### Subtitle
Select the subtitle of the Header Cell. This text will be less prominent and
should contain less important information.

#### Icon
Choose the Icon to display within the Header Cell.[img:]Example Header Cell with Icon

#### Badge
Display a Badge within the Header Cell. Use this to convey important
information, like unread messages or errors.

#### On click
This is triggered once the user has clicked or touched and then released the
pointer over the Header Cell.

#### Is Checked
Use this to show that the Header Cell's action is currently active.

#### Is Disabled
Prevent operators from triggering the action of this Header Cell.

### Apply Status

#### From Value with Ranges
If the displayed value includes a status, you can use the "Apply Status From Value with Ranges" option to visually indicate the value’s status as either "Good", "Warning", "Critical" or "Accent".

#### Manually
Determine manually which status should be displayed by the element.

### Sizing
Choose whether you want to set a fixed width for this Header Cell or whether
it should shrink to fit its content.WidthSelect the width of the Header Cell.Maximum WidthChoose the maximum width for the Header Cell. This will ensure
a relatively uniform appearance in "Fit Content" mode.

### Responsive Behavior

#### Keep visible as long as possible
This option is mostly important for smaller displays where the element may need to shrink. Check this option for the most important children. They will then be kept withing the visible viewport as long as possible.

### Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

## Related

#### Elements
Logo Cell
