
# Numeric Field
Use a Numeric Field to enable operators to view a numeric value.

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

### Stepper

#### Step Size
Select the amount that each click on the stepper buttons should increase or
decrease the value by.

## Related

#### Elements
Magic Input
