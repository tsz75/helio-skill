
# Write Data Variable Action

## About
Lets you manipulate the value of a data variable.
Depending on which type of `Data Variable` you have chosen, you’ll
get different options to manipulate this variable.

## Example
If you would like to write to a variable of Float the action settings
will look like this

## Writing a Static Values
You can choose the type of value that you would like to write to the
variable.Writing static values means that you input a specific value e.g. the number
0 that will never change during the runtime of your HMI.

## Writing Dynamic Values
Writing dynamic values means that you use the current value of another
variable. This means the value that gets written **can change** during the
runtime of your HMI.In this example the `Water/Pressure` variable will be set to the
current value of the `Steam/Pressure` variable.

## Toggle Boolean Variable
When using variables of type `Boolean`, you may want to toggle the current
value instead of setting it to a fixed value such as `true` or `false`. In
this case, you can use the third Toggle option to negate the current value.

## PLC and Placeholder – Which One Gets Written To?
While working with the HMI Preview Panel
you are able to choose between the Data Modes of the
HMI Preview Panel.
When PLC Mode
is active and the variable is linked to a PLC Connection,
you will actually write to your PLC.
When Placeholder Mode
is active, you will only be able to manipulate placeholders and not change any
state on your PLC.

## Related
- 
Dashboard Page
- 
Create List Item Action
