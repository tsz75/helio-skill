
# If Condition
Use an `If` condition to solve more complex rules by comparing two values.
For example, you could display a helpful hint
when a Data Variable (Dynamic Property) falls below a certain
threshold.
- By default, the property returns the boolean value of the evaluated
condition (`true` or `false`).
- However, you can specify the values returned when
the condition is true or false.

## Anatomy
- **This value**This is the value you want to compare. It is a
Dynamic Property, so feel free to compare any type
you like. In most of the cases you'll probably use a Data Variable (Dynamic Property).
- **Operator**Describes how the two values will be
compared. This will adjust to the type of the variables you compare. In
this example we're seeing operators to compare numerical values (less than, less then or equal, …).
- **That value**This is the value with which you want to make a comparison. And yes,
it is also a Dynamic Property, so let your imagination run wild.
- **When: True**If the comparison turns out to be truthy this value
will be used as the actual value. By default, the value is `true`.
However, as this property is dynamic, you can
use any type you prefer, such as a
Data Variable (Dynamic Property) or a
Localizable Text.
- **When: False**If the comparison turns out to be falsy this value
will be used as the actual value. By default, the value is `false`. Again,
you can also use any Dynamic Property that works for you.

## Examples

### Reacting to a Specific Language
In this example the `Language Information` should be compared. Since it
returns a `String` the `Comparison Operator` switched to
operators that work with textual content.
The condition is applied to the Display Condition which means
that we should make sure to set it to a boolean value.
In such a situation can simply apply the default values for the falsy and truthy case.

### Can you guess what effect this condition has?
Correct, this element will show up whenever the current language is set to
French.
