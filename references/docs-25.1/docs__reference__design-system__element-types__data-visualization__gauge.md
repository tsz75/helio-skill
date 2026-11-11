
# Gauge

## About
A Gauge is used to display values that change frequently and is visualized as
a dial. It also alerts operators about critical ranges that the value may
fall into.

## Properties

## Specific Properties

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.

#### Data
The data source for this gauge. Should be a numeric Data Variable. Use the
`Ranges` property of this variable to visualize sections

#### Ticks
Control the number of ticks that the gauge will display.

### Apply Status

#### From Value with Ranges
If the displayed value includes a status, you can use the "Apply Status From Value with Ranges" option to visually indicate the value’s status as either "Good", "Warning", "Critical" or "Accent".

#### Manually
Determine manually which status should be displayed by the element.

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
Value Bar
