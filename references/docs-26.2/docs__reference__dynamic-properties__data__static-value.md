
# Static Value

## About
String
Number
Boolean
Use this type for values that aren't gonna change while your HMI is running.
Might sound a bit unusual first but it can be very useful in
different scenarios. Let's say you're defining a If Condition to compare the
value of a Data Variable (Dynamic Property Type) against a fixed threshold
that will never change.

## Types
The following static data types are currently supported:
| Type | Use Cases |
| String | Use it to display static text in your HMI that doesn’t need to be translated.If you’d like to display texts that you need to be translated later, then make sure to use the Localizable Text. |
| Number | Use it as part of a If Condition to compare a numeric Data Variable (Dynamic Property) against a static threshold. |
| Boolean | Use it as part of a If Condition to check if a boolean Data Variable (Dynamic Property) is `true` or `false`. |

## Related

#### Guides
HELIO Components
