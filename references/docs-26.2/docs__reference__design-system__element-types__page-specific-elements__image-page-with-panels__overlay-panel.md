
# Overlay Panel
An `Overlay Panel` can be placed on the
Image Page With Panels. It can be positioned above the
background image by setting its X and Y coordinates based on the underlying
grid.

## Anatomy
- Label
- Legend
- Input

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the Dashboard Page. An Element can make use of the icon to:
- Provide more context to add meaning
- Improve recognition and discoverability, especially on larger pages

#### Legend
Use the legend to reference specific points of interest on visualizations,
such as images.
- The legend can be an alphanumeric value but it is limited to two
characters.
- For instructions on how to add such markers to your images,
refer to the
Image page.
- To highlight a `Parameter` with a specific legend, use the
Highlight Legend on Current Page action.

### Position
Set the position of your overlay panel. Use the arrow keys or simply set
an x and y value. This will position the panel on your image within
the grid you have selected on the Image Page With Panels.

### Columns

#### Column count
Decide how many columns your overlay panel should have. If you choose more
than one column, you can place elements side by side on this panel.

#### Column width
Specify how many grid steps you would like one column of this panel to span.
This controls the width of the panel. Note that the grid step size is
defined on the parent
Image Page With Panels, ensuring that all panels snap
to the grid.
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

#### Children
Magic Input
Magic Output
Button
Axis Control
Numeric Stepper
Switch
Text Field
Timezone Input
Dropdown (From Enumeration)
Dropdown (From List)
Progress Bar

#### Pages
Image Page With Panels
