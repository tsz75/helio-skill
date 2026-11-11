
# Unit Switch
Working with different units of measurement is a common challenge in
industrial control systems. There are many reasons why unit conversions are
necessary, but a key factor is localization: different countries use
different **measurement** systems.In addition to international standards, you often want to change numerical
values within a system, such as converting grams to milligrams, to better
recognize subtle differences in product weight.The Unit Switch makes it easy to work in multiple units seamlessly without
having to go back and forth on the calculator.These unit conversions are defined in the central project settings, where
you can define several conversions between source and target units.

## Element Properties
General

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the
Dashboard Page
. An Element can make use of the icon to...
- provide more meaning and improve recognition.

### Allow Converting

#### Source unit
Select the source unit to indicate the original unit of measurement from
which values will be calculated.Based on the unit conversions you have defined in the central project setting, HELIO will display the appropriate switch for this unit.Each Unit Switch can only convert
one unit, but feel free to use as many switches as you need.

### Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

## Related

#### Elements
Numeric Stepper
