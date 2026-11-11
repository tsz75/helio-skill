
# Sankey Diagram
A `Sankey Diagram` displays flows between multiple nodes where link
width indicates the quantity or magnitude of the flow. The diagram
automatically scales link widths proportionally, ensuring that flow
relationships are accurately represented and easy to compare at a glance.

## Adding & Linking Nodes
Each `Sankey Node` represents a point in your flow diagram. To add a node:
- Select the `Sankey Diagram` in the HMI Content Tree
- Add a new `Sankey Node` element
- Configure its properties in the properties panel
The Sankey Diagram automatically calculates proportions based on the values you
define:
- Link widths are drawn proportionally to represent the relative quantity of
each flow
- Multiple outgoing links from a single node will split the flow visually
- The sum of outgoing link values equals the total input to that node

## Properties
Container

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

### Display Labels

#### Condition
Specify whether the node labels should be visible. Hiding labels can be
helpful on smaller devices.

## Related

#### Pages
Sankey Diagram Page
