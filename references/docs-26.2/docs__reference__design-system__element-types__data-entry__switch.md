
# Switch
A `Switch` essentially serves as a visual for users, allowing them to
switch between two states, usually "on" and "off".
It's typically used when the user needs to make a binary choice, such as
enabling or disabling a feature or setting. It offers a clear visual cue of
the current state and is an intuitive way for users to interact with the
interface.

## Properties

### General

#### Value
The current value that should get updated when an operator manipulates the input, usually this will be bound to a
Data Variable
.

#### Is disabled
Use this property to disable the element in certain situations, such as when your PLC is in a state where manipulation should not be possible.

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

### Control Type
Select the control type for this boolean state input. You can choose between
a switch and a checkbox.

### Alignment
Decide on the alignment of your input, either to the left, in the center or
to the right.
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
Checkbox
Magic Input
