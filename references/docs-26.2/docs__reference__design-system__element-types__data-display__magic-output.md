
# Magic Output

## About
Examples of Magic Outputs linked to different types of variables.
The `Magic Output` simplifies the process of creating HMIs that display data
defined by data sources, such as a PLC Connection.
The element automatically adjusts to the type of data being linked. For
instance, suppose a linked Data Variable from your PLC is a
Boolean.
In that case, the Magic Output will adjust itself to a status indicator
with an icon and a descriptive status label.

## Properties

### General

#### Value
The current value that should be displayed on the element, usually this will be bound to a
Data Variable
.

#### On click

### New This Feature Was Added In HELIO  26.2.0
Action that gets executed when clicking the output.

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

### Apply Status

#### From Value with Ranges
Use this option, if the variable linked to `Value`  provides status information. This will allow you to automatically apply the status from Value to indicate the quality of the value as either `Good`, `Warning`,  `Critical` or `Accent`.
**Learn more** with the following resources:
- Ranges
- Communicating Machine Status with Clarity

#### Manually
Determine manually which status should be displayed by the element.
-> For more information: visit
Status
.

### Highlight
To indicate whether one output is more important than the others, you can highlight it. This changes the background color of the output to make it stand out.

#### When
Choose when the output should be highlighted.

#### And status is
If the displayed output has a status, you can choose to highlight the output at a specific status. This is useful, for instance, to make the output stand out when a value is critical.

### Maximum Character Count

### Wondering how HELIO determines the font size for the output?
Its primary goal is to ensure that even large numbers are readable. Its
layout algorithm follows two steps:
- Determine the maximum character count by examining all the metadata of
the variable, such as `Maximum`.
- Calculate the font size based on the available width for the longest
possible number.
The first step is typically accurate for numerical variables with good metadata.
However, it becomes more challenging for `String` variables when there is no
knowledge about the data's domain.
So in some cases, you may know best how long a number or text will actually
be. Use this option to override the first step. This ensures that a number
or text with the specified character count is always displayed.
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
Magic Input
