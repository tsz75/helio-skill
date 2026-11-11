
# Magic Input

## About
Examples of Magic Inputs linked to variables with different data types.
The `Magic Input` can be a real time-saver when you're creating pages that
manipulate data from your PLC. It automatically adapts to the
Data Variable Types of the
variable you're linking to and provides operators with
a UI component that fits best.
The Magic Input simplifies the creation of HMIs that modify data variables
from sources such as your PLC. HELIO automatically adapts to the
of the variables being linked and presents a UI component that best fits the
shape of your data.
For example, if an imported variable from your PLC is typed as
Integer,
the Magic Input component will display a Numeric Stepper.

## Validations
The **`Magic Input`** not only considers the data type, but also other
features of data variables in order to validate all data entered by
operators.
For example, Minimum and Maximum Values
and Enumerations
help prevent operators from inputting values that the machine can't handle.
**Do Not Rely Solely on Client-Side Validation!**
Client-side validation greatly improves the user experience for operators.
However, your backend, e.g. your PLC should still reject invalid values. You
should never rely solely on client-side validation of input data.

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

## Can appear as...

#### Elements
Checkbox
Switch
Numeric Stepper
Text Field
Dropdown (From Enumeration)
Dropdown (From List)

## Related

#### Elements
Magic Output
