
# Create a Basic Dynamic Property
This guide walks you through creating a custom
Dynamic Property using the
createDynamicProperty() function.

## 1. Basics
Before creating the dynamic property, let's quickly review some basic concepts
and terms you should know:
What Is a Namespace?
Namespaces make sure that every element, action, and dynamic property has a
globally unique ID. They help prevent naming conflicts between the elements
found in your Extensions. Think of a namespace as a unique
prefix that helps keep your code organized and conflict-free.
It's like putting all the stuff from your extension into its own folder so
it doesn't accidentally clash with anything else in your HELIO projects.
**Why Do Namespaces Matter?**
Take, for example, a custom element named `StatusIndicator`. Multiple developers
or even multiple companies might use the same names for such an element.
Without namespaces, that could lead to conflicts or unexpected
behavior. By giving your extension its own namespace, you make sure everything
stays clean and separated — no mix-ups, no surprises.
**What Does a Namespace Look Like?**
Your namespace becomes part of the unique ID of your Custom Elements.
So in our example, the custom element named `StatusIndicator` is part of the
`my-extension` namespace of your company. So the namespace would be
`com.my-company.my-extension` and the actual ID of your element will be:
`com.my-company.my-extension.StatusIndicator`. This ensures that this ID will
never collide with elements from other extensions, or companies, even if other
extensions use the same element name `StatusIndicator`.
What Is a Dynamic Property?
Some properties have an additional secret superpower: the users of your
extension can change their types. These properties are called
Dynamic Property.
See Dynamic Property Basics
for more fundamentals.
Even better, you can even define your own custom Dynamic Properties and make
HELIO even more tailored to your needs.
What Is a Props Schema?
A **Props Schema** lets you configure the API for whatever you build with the
SDK — like
Custom Elements,
Custom Actions, and custom
Dynamic Properties. It lets you control what properties your
users can configure in the
HELIO IDE.
These properties will show up in the
Properties Panel of the
Project Editor whenever an item of your extension is
added or selected.
You define a props schemas by using the createPropsSchema() function.
**Props Schemas Specify**
- What properties are available and how they are called
- The types of these properties (text, numbers, etc.)
- The default property values for new instances
- Validation rules

## 2. Example
Here's an example of a basic custom dynamic property.
```
import { createDynamicProperty, createPropsSchema, values } from '@hmiproject/helio-sdk';
import { namespace } from '../../namespace';

export const basicDynamicProperty = createDynamicProperty(namespace, {
  name: 'Basic Dynamic Property',
  description: 'Read-only dynamic property that displays a single value',
  icon: { name: 'Default' },
  propsSchema: createPropsSchema().initial({}),
  writable: false,
  valueTypes: ['NumericValue'],

  useDynamicProperty() {
    return {
      valueType: values.Number(),
      value: 123,
      displayValue: '123',
      canRead: true,
      canWrite: false,
    };
  },
});
```
L
1
Import the
createDynamicProperty() function for defining
dynamic properties as well as more utilities supporting it.
L
2
Every dynamic property needs to live within a Namespace to prevent naming conflicts.
Check out Create a Namespace for more details.
L
4
Use createDynamicProperty() to create the property in your
namespace and export it so you can later use it in other modules.
L
5
-
7
The `name`, `description`, and `icon` are shown inside the `Choose Type` dialog in the IDE.
Pick these so that your users can easily understand what this property does.
L
8
Props Schemas let you make your custom properties
configurable.
L
9
Dynamic properties can be read-only or writable. Writable properties can
accept user input from elements like Magic Input.
This property however is read-only, so `writable` is set to `false`.
L
10
Each dynamic property can declare what types of data it can produce.
This impacts where the property can be used. For example, a property that
produces numeric values will be accepted as the value for Magic Output.
L
12
-
20
The `useDynamicProperty` function defines how your dynamic property behaves
and what data it provides.
L
14
Define the actual value type that this property currently produces. It must
match one of the types declared in `valueTypes`. In this case, you use
`values.Number()` which matches the `NumericValue` type.
L
15
The dynamic property's raw value.
L
16
The dynamic property's display value in human-readable format after
all formatting has been applied. This must always be a string
and is only used for display, not for data entry.
L
17
Properties can individually enable/disable read permissions based on custom
logic. In this example, these are set to static values. In more
advanced scenarios, you could compute these dynamically based on user
permissions or other runtime conditions.
L
18
Properties can individually enable/disable write permissions based on custom
logic. Since this property shall be read-only, `canWrite` is set to `false`.
Mission accomplished!
Congratulations! You now understand the basic structure of a custom dynamic
property.
