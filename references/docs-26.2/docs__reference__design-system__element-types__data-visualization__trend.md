
# Trend
A `Trend` visualizes the progression of a numerical value in a line chart. It
animates over time and is designed to be used as a visual aid in tracking
changes or patterns.

## Examples
**Trend with a single value**
**Trend with multiple values and a legend**
When multiple trend lines are visible, operators can toggle each one on
or off by clicking their entries in the legend.
**Paused Trend with a Ruler**

### Improved This Feature Was Improved In HELIO  26.2.0
Drag the ruler to explore values instead of clicking to reposition it.
- Click anywhere within the `Trend` while in Test-Mode to pause
the Trend and display a ruler at the selected position, then drag it —
with your finger or a pointing device — to read values at any other
point.
- View the exact value of the `Trend` at the selected position. When there
is more than one trend line within the trend, all values will be
displayed.
- Resume the `Trend`. This will skip ahead to the live view of the Trend.

## Properties

### Values
Add a single value to visualize a single trend. Add multiple values to compare
several trend lines simultaneously. This is useful for monitoring and
identifying patterns across multiple values, as well as for visualizing their
relationships with each other. Each value features the following properties:

#### Name
Choose a name for the trend line, this will be displayed within the legend
if you choose to enable it.

#### Data
Connect the this property to a `Data Variable`.

### Ensure the Linked Variable Meets These Requirements
- History

 Needs to be activated for this variable in order to store historical
data, which can then be used for the trend chart.
- Minimum and Maximum Values

 The range of the Y-axis is determined by both the minimum and maximum of
the linked variable. If these are not set, the trend will default to a
Y-Axis range of 0-100.

#### Line Color
Choose a color for the trend line.

#### Line Thickness

### New This Feature Was Added In HELIO  26.2.0
Choose the thickness of the data line.

### X-Axis

#### Visible time range
Determines the range of time that is displayed on the X-axis of the trend
chart. It is important to select a time range that is appropriate for the
data being displayed, as displaying too much or too little data can make it
difficult to interpret the trend.

### Choose an Appropriate Time Range!
Remember not to select a time range that exceeds the period specified in
the History
settings.

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

### Enable Legend
Displays a legend below the element listing the name of each trend.
Operators can toggle individual trends on or off by clicking their entries
in the legend.
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
2D Plot
