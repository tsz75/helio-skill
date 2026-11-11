
# Property

## About
Use Properties on Collection Page
to display Lists.

## Properties

### General

#### Title
Provides context and information to operators, guiding them and helping them
understand the meaning of the value of column.

#### Value
The value from the List item's blueprint that is to be displayed in this column.

### Appearance

#### Show unit in header
Decide whether to display this property's unit in the collection header.

#### Emphasize this value
Decide whether this feature should be emphasized in contrast to the default
properties. Use it to draw attention to an item's most important features.

### Apply Status
This setting is only available when `Value` is connected to a variable with Enumerations. For each enum value, you can choose a status, an icon, and highlight it.

#### Value
Select the enum value you want to set a status for.

#### Display/Hide Value
Choose whether to hide the value or display it.

#### Icon
Specify the icon for this particular enum value. Since this is a Dynamic Property, you can also apply logic and set the icon dynamically.

#### Status
Specify the status for this particular enum value. Since this is a Dynamic Property, you can also apply logic and set the icon dynamically.

#### Highlight Status
Enables you to visually emphasize the status display.

### Examples
Use status, icons, and highlighting to better communicate the status
and quality of an item. Use this to flag outliers and critical items right
away—whether it's a machine running hot, a batch that needs attention, or
equipment that needs maintenance.
Status
Icon
Status
Icon
Highlight
Status
Value
Highlight
Status
Value
Conditional Highlight

### Column Width
Decide if the column should have a fixed width or be sized relative to the
other columns.
- Use the `Relative` option and specify its `Weight` and `Minimum width` in
pixels. If you want the properties to be sized equally, specify a `Weight` of `1`
for each property. Choosing a weight of `2` will make the property twice as big
as the default properties, and choosing `3` will make it three times as big. And
so on.
- Choose `Fixed` and specify the width of this property in pixels.

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

#### Pages
Collection Page

#### Elements
Collection Widget
