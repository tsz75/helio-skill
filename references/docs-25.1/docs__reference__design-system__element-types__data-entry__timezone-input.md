
# Timezone Input

## About
Use a Timezone Input to enable operators to view and edit a timezone value.

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
Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.
