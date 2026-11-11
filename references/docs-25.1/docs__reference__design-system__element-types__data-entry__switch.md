
# Switch
A `Switch` essentially serves as a visual for users, allowing them to
switch between two states, usually "on" and "off".It's typically used when the user needs to make a binary choice, such as
enabling or disabling a feature or setting. It offers a clear visual cue of
the current state and is an intuitive way for users to interact with the
interface.

## Properties
General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.

#### Value
The current value that should get updated when an operator manipulates the input, usually this will be bound to a
Data Variable
.

#### Is disabled
Use this property to disable the element in certain situations, such as when your PLC is in a state where manipulation should not be possible.

#### Is invalid
Use this property to indicate that the current value of the element is not acceptable.
Appearance

#### Description
Will be displayed underneath the element. This description helps to provide additional guidance or instructions to operators when manipulating the input. It's an opportunity to provide more detailed context regarding the potential impact of changes, or further instructions on the desired input format.
Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

### Control Type
Select the control type for this boolean state input. You can choose between
a switch and a checkbox.

### Alignment
Decide on the alignment of your input, either to the left, in the center or
to the right.

## Related

#### Elements
Checkbox
Magic Input
