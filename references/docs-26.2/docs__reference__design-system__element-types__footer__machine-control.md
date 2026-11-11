
# Machine Control

## About
Machine controls are crucial for the proper functioning of any machine. They
are the most important functions that a machine can perform and should be
easily accessible on all screens.
In most cases they should only be accessible on the machine panel itself.
And the often do require an additional hardware button for confirmation.
Examples include starting and stopping the machine, as well as changing the
mode of operation.

## Properties

### General

#### Label
Text that will be displayed on the Machine Control.

#### Is checked
Decide whether the Machine Control should be checked or determine
specific cases for when it should be.

#### Is blinking
Decide whether the Machine Control should be blinking or determine specific
cases for when it should be.

#### Is disabled
Prevent operators from triggering the action of this Machine Control.

#### On click
Triggered when the user clicks or touches and releases the pointer over the
Machine Control.

### Icon

#### Icon
Icon that will be displayed on the Machine Control.
In Front
Above
Icon Only

### Apply Status

#### From Value with Ranges
Use this option, if the variable linked to `Value`  provides status information. This will allow you to automatically apply the status from Value to indicate the quality of the value as either `Good`, `Warning`,  `Critical` or `Accent`.
**Learn more** with the following resources:
- Ranges
- Communicating Machine Status with Clarity

#### Manually
Determine manually which status should be displayed by the element.
-> For more information: visit
Status
.
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
Machine Control Selector
