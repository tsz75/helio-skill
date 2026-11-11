
# Unit Switch
Working with different units of measurement is a common challenge in
industrial control systems. There are many reasons why unit conversions are
necessary, but a key factor is localization: different countries use
different **measurement** systems.
This is you HELIO lets you define unit conversions using the
Settings View, where
you can define several conversions between source and target units.
In addition to international standards, you often want to change numerical
values within a system, such as converting grams to milligrams, to better
recognize subtle differences in product weight.
The `Unit Switch` makes it easy to switch between multiple units seamlessly
without
having to go back and forth on the calculator.

## Properties

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

### Allow Converting

#### Source unit
Select the source unit to indicate the original unit of measurement from
which values will be calculated.
- Based on the unit conversions you have defined in the central project setting, HELIO will display the appropriate switch for this unit.
- Each Unit Switch can only convert one unit, but feel free to use as many switches as you need.
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
Numeric Stepper
