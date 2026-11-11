
# Value Bar

## About
A `Value Bar` simplifies the interpretation of numerical values by displaying
the current value, its range, and highlighting good, alarming, or critical
areas within the range.

## Properties

### General

#### Value
The current value that should be displayed by the element, usually
this will be bound to a `Data Variable`.

#### Setpoint
The desired or target value for this parameter which may differ from the
actual measured value of the variable.
In this example the current value of the `Setpoint` is 75 while the
actual value is still at 65.849.

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

### Display Labels

#### Minimum and maximum
Display labels on top of the bar for the minimum and maximum
of the variable linked to the `Value` property.

#### Ranges
Display labels on top of the bar for all ranges
 of the variable linked to the `Value` property.

#### Setpoint
Display a label on top of the bar for the current value of the `Setpoint`.
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
Parameter Page
Dashboard Widget
Radial Bars
