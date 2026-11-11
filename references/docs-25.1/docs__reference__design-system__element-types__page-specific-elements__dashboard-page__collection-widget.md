
# Collection Widget

## About
"Use the Collection Widget to display collections, such as recipes or active
tools, directly inside your Dashboard. Just like on the
Collection Page, you can add a `Detail` view to
this widget, allowing operators to expand the items."[img:]
**Examples**A Collection Widget displaying four properties.UX Tips & Tricks**Don’t**Display all the properties of the collection items within the widget.**Do**Limit the displayed properties to a maximum of 3-4 parameters. The
remaining properties can be explored in the `Detail` view.Especially on a Dashboard Page, every pixel is valuable.

## Element Properties
General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.
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

### Data Source

#### List
The current List that should be displayed on the Collection Widget, this
will be bound to a Data Variable.

### Detail View

#### Placement
Select whether the Detail View should be displayed in the center of the
screen or on any side of the display.

#### Size
Select how large the Detail View should be. Choose between Full, Medium and
Small.

### Search
Add a search function to the top bar of the page.

### Sorting
Add default sorting to the collection. Select which parameter you want to
sort by and whether the sorting direction ascending or descending.

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

## Related

#### Pages
Collection Page
