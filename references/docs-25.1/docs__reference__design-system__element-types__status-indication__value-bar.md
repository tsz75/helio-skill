
# Value Bar

## About
A `Value Bar` simplifies the interpretation of numerical values by displaying
the current value, its range, and highlighting good, alarming, or critical
areas within the range.

## Properties

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.

#### Value
The current value that should be displayed by the element, usually
this will be bound to a `Data Variable`.

#### Setpoint
The desired or target value for this parameter which may differ from the
actual measured value of the variable.
In this example the current value of the `Setpoint` is 75 while the
actual value is still at 65.849.

### Display Labels

#### Minimum and maximum
Display labels on top of the bar for the minimum and maximum
of the variable linked to the `Value` property.

#### Ranges
Display labels on top of the bar for all ranges
 of the variable linked to the `Value` property.

#### Setpoint
Display a label on top of the bar for the current value of the `Setpoint`.

### Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
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
