
# Axis Control
The `Axis Control` is a versatile element, allowing you to control the
axis of a machine. It opens a lightweight overlay that provides options for
adjusting the machine's axis. The element supports two different interaction
modes: Continuous and Step Mode.

## Properties

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.

#### Is Disabled
Use this property to disable the element in certain situations, such
as when your PLC is in a state where manipulation should not be
possible.

#### Initial Mode
Choose whether the Axis Controls should initially be in `Jog` or
`Step` mode. This will only be applicable if you have configured both modes
on the respective Axis.

### Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
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
Axis
Button
