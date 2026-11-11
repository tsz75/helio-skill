
# Gauge
A `Gauge` is a dial-shaped visualization well-suited for values that change
frequently. Color-coded zones along the track show safe, warning, and
critical ranges at a glance — so even a rapidly dithering value stays
readable, and operators immediately see when something enters a critical
area. Unlike the Radial Bars, which colors
the whole bar to reflect the current status, the Gauge color-codes the
track itself to provide context across the full range.

## Properties

### General

#### Data
The data source for this Gauge. Connect a numeric   
Data Variable (Dynamic Property).

### Requirements When Using a Data Variable (Dynamic Property)
- Minimum and Maximum Values

 The dial range is determined by the minimum and maximum of the linked
variable.
- Use the `Ranges` property of the variable to color-code zones along
the track.

#### Setpoint
An optional target value displayed as a marker on the dial. Connect a
numeric Data Variable (Dynamic Property).

#### Name
The name for this gauge. It will be displayed in the center of the gauge.

#### 
Gauge with Data
Gauge with Setpoint
Gauge with Name

### Container

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the Dashboard Page. An Element can make use of the icon to:
- Provide more context to add meaning
- Improve recognition and discoverability, especially on larger pages

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Description
Will be displayed underneath the element. This description provides additional guidance or instructions for operators manipulating the element. It expands on the label by offering supporting details and clarifying what the element represents or how it behaves. It provides an opportunity to offer more detailed context regarding the potential impact of changes or further instructions on the desired input format.

#### Action
Button that will be displayed in the upper right corner of the element. By pressing it, users can execute an action.

#### Label
Label that will be used for the action button.

#### Icon
Icon that will be displayed on the action button.

#### On click
Action that gets executed when clicking the button. Use it to:
- Open overlays that provide additional context or detailed controls for this element using the  Open Page as Overlay Action.
- Navigate to other pages using the  Navigate to Page Action.
- Execute logic on your PLC using the  Write Data Variable Action or  Call Data Method Action

#### Is disabled
Disable the action by setting this boolean property to true. The action will never execute while it is disabled.

### Ticks
Control the number of ticks that the gauge will display.

#### Auto
HELIO will calculate a fitting number of ticks for you.

#### Density
Select the number of ticks yourself by setting a density. Choose between
low, medium and high.

#### Interval
Precisely select the number of ticks yourself by setting intervals. Choose
how often a tick should appear and how often a label should appear.

#### Segments
Precisely select the number of ticks yourself by setting segments. Choose
how many ticks should appear and how often a label should appear.

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

#### 
Gauge without Status
Gauge with Status
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
Radial Bars
Value Bar
