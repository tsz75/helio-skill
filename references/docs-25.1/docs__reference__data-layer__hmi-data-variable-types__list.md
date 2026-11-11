
# List
A List is an abstraction in HELIO to simplify and manage sets of items. Use it to:
Display a list of tools
Display a list of materials

## Import a List

### From a PLC Directory
Lists are often created from directories imported from various
PLC Connection.
This process requires that all child directories within this directory must match the same schema.
To create a `List`:Add the directory to your project by dragging it from the
Data Source Explorer into
your HMI Data Explorer.Open the context menu for the newly created directory.Convert it into a List using the Convert to List option.

### From a Data Collection
A `List` can also be created from Data Collection:
- Define a Data Collection and its item properties.
- Add the collection to your project by dragging it from the
Data Source Explorer into your
HMI Data Explorer.

### Filtering Lists
Removing elements from Lists can be tricky because most PLCs only support arrays
or lists with a fixed size. A commonly used solution is to define a special
sentinel attribute for each list item. This attribute indicates whether an item
exists. If this attribute is missing or null, it is treated as non-existent by
consumers and HMIs.
HELIO adheres to this practice, allowing you to use only elements that meet
a specific condition.In this example, the `Id` attribute of each message determines whether an
entry in this list is a valid message or an empty space that will be filled
as more messages arrive.
**Need Other Conditions?**Right now the `Property Has Value` condition is the only supported one.Feel free to reach out to our support team if you require other conditions for
your PLC. Our Happiness Engineers can take your requirements to our dev team.
😊**→ [email protected]**

## Using Lists
**Displaying Lists**
See Collection Page.
**Adding List Items**
See Create List Item Action.
