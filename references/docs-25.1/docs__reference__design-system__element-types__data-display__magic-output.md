
# Magic Output

## About
Examples of Magic Outputs linked to different types of variables.
The `Magic Output` simplifies the process of creating HMIs that display data
defined by data sources, such as a PLC Connection.The element automatically adjusts to the type of data being linked. For
instance, suppose a linked Data Variable from your PLC is a
Boolean.
In that case, the Magic Output will adjust itself to a status indicator
with an icon and a descriptive status label.

## Properties

### General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.

#### Value
The current value that should be displayed on the element, usually this will be bound to a
Data Variable
.

### Appearance

#### Description
Will be displayed underneath the element. This description helps to provide additional guidance or instructions to operators when manipulating the input. It's an opportunity to provide more detailed context regarding the potential impact of changes, or further instructions on the desired input format.

### Apply Status

#### From Value with Ranges
If the displayed value includes a status, you can use the "Apply Status From Value with Ranges" option to visually indicate the value’s status as either "Good", "Warning", "Critical" or "Accent".

#### Manually
Determine manually which status should be displayed by the element.

### Highlight
To indicate whether one output is more important than the others, you can highlight it. This changes the background color of the output to make it stand out.

#### When
Choose when the output should be highlighted.

#### And status is
If the displayed output has a status, you can choose to highlight the output at a specific status. This is useful, for instance, to make the output stand out when a value is critical.

### Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

### Maximum Character Count

### Wondering how HELIO determines the font size for the output?
Its primary goal
is to ensure that even large numbers are readable. Its layout algorithm
follows two steps:
Determine the maximum character count by examining all the metadata of the
variable, such as `Maximum`.
Calculate the font size based on the available width for the longest
possible number.
The first step is usually accurate for numerical variables with good metadata.
However, it becomes more challenging for `String` variables without knowledge
about the data's domain.In these cases, you might know best about how long a
number or text will actually be. Use this option to override the first step.
It ensures that a number or text with the specified character count will
always be displayed.

## Related

#### Elements
Magic Input
