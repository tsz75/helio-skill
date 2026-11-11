
# Dashboard Widget

## About
A dashboard widget is an adaptive container that groups related elements
and information on a Dashboard Page.
Dashboard widgets can contain a wide variety of HELIO Element Types,
including Gauge, Magic Input or
Magic Output.

## Element Properties
General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.
Widget with Title
Widget with Icon
Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

## Specific Properties

### Main Action

#### Label
This is the label that will be displayed in the upper right corner of the
widget. By pressing it, users can activate the main action.

#### Icon
This is the icon that will be displayed in the upper right corner of the
widget. By pressing it, users can activate the main action.

#### On click
An action that gets executed when clicking its icon or label.
It can be used to:
Open maximized versions of your widget content using the
Open Page as Overlay Action.
Navigate to other pages using the
Navigate to Page Action.
Execute logic on your PLC using the
Write Data Variable Action or Call Data Method Action
[img:] Example Widget with Main Action

#### Is diabled
Use this property to disable the main action.

### Main Action
Declare a custom Layout for your Widget. This Layout will be used
whenever possible, otherwise HELIO will use the Magic Layout as a fallback. Be
aware that this feature is still in `Beta`, so please use it with caution!This custom layout has the highest priority. If there is not enough space
or the layout does not match the number of elements, the best-fitting
alterative layout will be automatically applied.

## Elements that You Can Add to Widgets

#### Elements
Magic Input
Magic Output
Gauge
Pie Chart
Linear Flow
Trend
Image
Embedded Webview
