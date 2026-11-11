
# Ranges

## About
When operators view an HMI, they are often presented with numerous values. Even
with just a few values, it can be difficult to determine their quality.
Operators may wonder if a value is acceptable or if they should attempt to
increase it.
In HELIO, there is a feature called `Ranges` for numerical variables that enables
you to easily assess the quality of variables across different elements in your
HMI. Instead of manually setting background and foreground colors for each
element, you can define semantic ranges for your variable, effectively conveying
meaning. By adopting this range, all elements in your HMI can support operators
in making informed decisions.

## Range Properties

#### Lower Bound
Sets a minimum value for the range. Only values
greater than or equal to this bound will be included.

#### Upper Bound
Sets the maximum value for the range. Only values that are
smaller than or equal to this bound will be included.

#### Status
Each range is tied to a specific status, which will inform your operators
about the quality of the current value of the variable.
**Learn More Using Guides**
…to understand the four different types of statuses and the corresponding messages they send to
your operators. -
Communicating Machine Status with Clarity

## Benefits

#### Don’t repeat yourself
By specifying ranges for a variable, you are able to
guide operators whenever they encounter this variable inside the HMI.

#### Content vs. Style
HELIO lets you focus on accurately defining the ranges. The final look and
feel will be determined by the HELIO Design System and the current theme.
Each element selects the most suitable method to apply status colors, icons,
and labels for its specific use case.

#### Consistent UX
The HELIO Design System will ensure visual consistency across all the pages
and elements of your HMI.

## Examples
In this example, we have activated ranges and defined three range rules for
this variable, which is used to display a percentage value.

## Rules of Ranges

#### Ranges Can Overlap
It is totally valid to define ranges that overlap.

#### Last Match Wins
There can only be one active range. So only the last rule in the list that matches the
current value will actually be applied.

## Related

#### Variable Types
Numeric Data Variables
String

#### Elements
Magic Output
Gauge
Progress Bar
