
# Dropdown (From List)

## About
Allow operators to choose from a list of options provided through a
List.
The chosen option will be stored in a variable.
**Tip:** Unlike the
Dropdown (From Enumeration), which
retrieves its options
from the `Enumerations` property of the linked `Value`.

## Properties

### General

#### Value
The current value that should get updated when an operator manipulates the input, usually this will be bound to a
Data Variable
.

#### Is disabled
Use this property to disable the element in certain situations, such as when your PLC is in a state where manipulation should not be possible.

### Dropdown Options

#### List
A List
that you’ve defined in your Project using the
HMI Data Explorer.
For each item in that list an dropdown options will be rendered.

#### Label Property
Choose the property from the blueprint of our List that will be used as the
label for each option in the dropdown.

#### Value Property
Choose the property from the blueprint of our List that will actually be
stored in the variable that is linked to the Value.

## Examples
This Dropdown takes all the tools provided through the `Tools/ToolList` and
presents them as a Dropdown. The `Name` property of each tool will be used as
the label and the `ID` property will be stored.

## Related

#### Elements
Dropdown (From Enumeration)
