
# Parameter Group

## About
To visually group related parameters, you can use the Parameter Group
element. Add it to the Parameters slot of your page.

## Anatomy
- Parameter Group Title
- Parameter

## Properties

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the Dashboard Page. An Element can make use of the icon to:
- Provide more context to add meaning
- Improve recognition and discoverability, especially on larger pages

#### Legend
Add a legend to this group and use the same legend within
related page elements, e.g. Images to locate the
effect of a parameter group within this visualization.
- The legend can be an alphanumeric value but it is limited to two characters.
- For instructions on how to add such markers to your images,
refer to the Image page.
- To highlight a `Parameter Group` with a specific legend, use the
Highlight Legend on Current Page action.

### Layout

#### Column span
Choose how many columns your `Parameter Group` should have.

### Is Collapsible
To make long pages with many parameters understandable, you can make parameter
groups collapsible by enabling their `Is Collapsible` property.

#### Initial state
Choose whether the Parameter Group should be collapsed or expanded by
default.
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
Parameter
Markdown
