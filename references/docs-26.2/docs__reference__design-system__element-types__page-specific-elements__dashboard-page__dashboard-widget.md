
# Dashboard Widget
A dashboard widget is an adaptive container that groups related elements
and information on a Dashboard Page.
Dashboard widgets can contain a wide variety of HELIO Element Types,
including Gauge, Magic Input or
Magic Output.

## Properties

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
Widget with Title
Widget with Icon
Example Widget with Action and Action-Icon

### Custom Layout
Declare a custom layout. It will be used whenever possible, otherwise HELIO switches to a fallback layout — unless you enforce the custom layout, in which case it is always applied exactly as defined. Check out the Layout for more information and details.
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

## Elements that You Can Add to Widgets

#### Elements
Magic Input
Magic Output
Gauge
Pie Chart
Linear Flow
Trend
Image
External Website Element
