
# Menu Button

## About
A menu button allows operators to open the menu of the HMI.

## Properties

### General

#### Label
Text that will be displayed on the Menu Button.

#### Is highlighted
Decide whether the Menu Button should be highlighted or determine
specific cases for when it should be.

#### Is blinking
Decide whether the Menu Button should be blinking or determine specific
cases for when it should be.

#### Is disabled
Prevent operators from triggering the action of this Menu Button.

#### On click
Triggered when the user clicks or touches and releases the pointer over the
Menu Button. This is preset to open the Menu but can be changed if needed.

### Icon

#### Icon
Icon that will be displayed on the Menu Button.
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
Footer Button
