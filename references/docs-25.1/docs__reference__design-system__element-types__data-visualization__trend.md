
# Trend

## About
A `Trend` visualizes the progression of a numerical value in a line chart. It
can animate over time and is designed to be used as a visual aid in tracking
changes or patterns.

## Properties

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.

#### 
Trend with icon

### Value

#### Path
Connect the this property to a `Data Variable`.Requirements for Data VariableMake sure the Data Variable meets the following requirements:

History

 Needs to be activated for this variable in order to store historical
data, which can then be used for the trend chart.

Minimum and Maximum Values

 The range of the Y-axis is determined by both the minimum and maximum of
the linked variable. If these are not set, the trend will default to a
Y-Axis range of 0-100.

#### Color
Choose a color for the trend line.

### X-Axis

#### Visible time range
Determines the range of time that is displayed on the X-axis of the trend
chart. It is important to select a time range that is appropriate for the
data being displayed, as displaying too much or too little data can make it
difficult to interpret the trend.Choose an Appropriate Time Range!Remember not to select a time range that exceeds the period specified in
the History
settings.

### Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.
