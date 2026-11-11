
# Axis Control
The `Axis Control` allows you to control the one or more axes of a machine.
It appears as a button that opens an overlay containing large buttons for
each axis. This allows operators to confidently control the machine's axes
on touch devices since the buttons provide a large hit area. The element
supports two interaction modes: Continuous and Step.
It can contain one or multiple
Single Axis or
Dual Axis elements.

## Properties

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the Dashboard Page. An Element can make use of the icon to:
- Provide more context to add meaning
- Improve recognition and discoverability, especially on larger pages

#### Is Disabled
Use this property to disable the element in certain situations, such
as when your PLC is in a state where manipulation should not be
possible.

#### Initial Mode
Choose whether the Axis Controls should initially be in `Jog` or
`Step` mode. This will only be applicable if you have configured both modes
on the respective Single Axis.
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

### Appearance

### Justify

#### Fill
The button will occupy the available space.

#### Start
The button will occupy only the space required by the caption and icon,
and it will align to the left.

#### Center
The button will occupy only the space required by the caption and icon,
and it will align in the center.

#### End
The button will occupy only the space required by the caption and icon,
and it will align to the right.
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

#### Children
Single Axis
Dual Axis
