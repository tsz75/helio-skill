
# 2D Plot

### Improved This Feature Was Improved In HELIO  26.2.0
You can now plot multiple datasets per axis, style each line's thickness,
and control axis grouping, placement, and direction.
A `2D Plot` visualizes the relationship between one or more data sets and a
shared X-axis. The Y-values of the individual data sets are plotted against
the X-values in a two-dimensional chart.
As data sources for each axis, you can use dynamic arrays from your PLC or
static sequences and arrays.
Typical use cases include visualizing the relationship between two signals,
for example:
- Light intensity as a result of an object's rotation
- Temperature zones during a heat-up cycle
- Weld voltage and current during a weld cycle
The X dataset and each Y dataset must contain the same number of entries.
Mismatched array lengths may cause incorrect or missing data in the plot.

### Data Sources
Each axis accepts one of the following as its data source:
- Data Variable (Dynamic Property) — a dynamic `Array` variable from the PLC, updated in real time
- Array (Dynamic Property) — a static list of values defined manually
- Sequence — a static, evenly spaced range of values defined by min, max, and step

## Properties

### Y-Axis
Define multiple datasets to plot against the Y-axis. Each dataset includes
its own line settings (name, data, color, thickness) as well as axis display
settings.
By default, HELIO groups datasets that share the same unit onto a single
shared axis, whose range spans the combined range of all grouped datasets.
Datasets with different units are displayed on separate axes automatically.
Enable `Display Axis Separately` to give any dataset its own dedicated axis
regardless of unit.

#### Name
Choose a name for the 2D Plot line. It will be displayed on the interactive
ruler that will be rendered when touching or pointing at the plot.

#### Data
Defines the Y values of each data point.

### Requirements When Using a Data Variable (Dynamic Property)
- Must use the `Array` access mode to provide the full array, not a single item.
- Minimum and Maximum Values

 The range of the Y-axis is determined by both the minimum and maximum of
the linked variable. If these are not set, the 2D Plot will default to a
Y-axis range of 0-100.

#### Line Color
Choose a color for the 2D Plot line.

#### Line Thickness
Choose the thickness of the data line.

#### Ticks
Control the number of ticks that the Y-Axis will display.

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

#### Show Horizontal Guidelines
Choose whether the horizontal guidelines of this axis should be visible
or not.

#### Display Axis Separately
Choose whether this axis should be displayed separately, even if HELIO
would otherwise group it with other Y-axes that share the same unit.
Separately: On
Separately: Off

#### Display Axis From Top to Bottom
Choose whether the axis should run from bottom to top or from top to bottom.

#### Display Axis on the Right
Choose whether the axis should be displayed on the left or the right of the
plot.
One Axis On The Right

### X-Axis

#### Data
Defines the X position of each data point.

### Requirements When Using a Data Variable (Dynamic Property)
- Must use the `Array` access mode to provide the full array, not a single item.
- Minimum and Maximum Values

 The range of the X-axis is determined by both the minimum and maximum of
the linked variable. If these are not set, the 2D Plot will default to a
X-axis range of 0-100.

#### Ticks
Control the number of ticks that the X-Axis will display.

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

#### Display Axis from Right to Left
Choose whether the axis should run from left to right or from right to left.

#### Display Axis on the Top
Choose whether the axis should be displayed on the bottom or the top of the
plot.
Axis On Top

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
Displays a legend below the plot listing the name of each Y-axis dataset.
Operators can toggle individual lines on or off by clicking their entries
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

#### Dynamic Properties
Array (Dynamic Property)
Sequence

#### Elements
Trend
