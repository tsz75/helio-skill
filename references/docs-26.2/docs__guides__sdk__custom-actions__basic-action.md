
# Create a Basic Action
This guide walks you through creating a custom Action using the
createAction() function.

## 1. Basics
Before creating the action, let's quickly review some basic concepts and terms
you should know:
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
What Is an Action?
Actions let your users tell HELIO how it should react to events or inputs
by operators. For example, when a button is pressed, HELIO can write a
data variable, show an alert, or navigate to a different page.
**Custom Actions**
- Enhance and extend the HELIO with custom logic that is tailored to your needs.
- Are controlled and configured by users. This lets you set up one button to do different
things, depending on how you configure it.
- Are configured using properties that are displayed in the
Properties Panel of the
Project Editor.
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
Here's an example of a basic custom action that shows a native alert using the
browser's built-in
alert() method.
```
import { createAction, createPropsSchema } from '@hmiproject/helio-sdk';
import { namespace } from '../../namespace';

export const basicAction = createAction(namespace, {
  name: 'Basic Action',
  description: 'Displays an alert',
  icon: { name: 'Runner' },

  propsSchema: createPropsSchema().initial({}),

  useAction() {
    return {
      canCall: true,

      call() {
        alert('Action called');
      },
    };
  },
});
```
L
1
Import the necessary functions from the SDK. The
createAction() function is the core function for defining
actions, while
createPropsSchema() is a utility supporting it.
L
2
Every element needs to live within a Namespace to prevent naming conflicts.
Here you import the namespace you have created in the Create a Namespace
guide.
L
4
Use createAction() to create the action in your namespace
and export it so you can later use it in other modules.
L
5
-
6
The `name` and `description` are shown inside the `Select Action` dialog in the IDE.
Pick these so that your users can easily understand what this element does.
L
9
The `propsSchema` property defines the properties of your element that can be edited
in the HELIO IDE with the help of a Props Schema.
Since this action is super simple, no properties are defined.
L
11
-
19
The `useAction` function defines how your action behaves. It returns an
object with:
- `canCall`: Whether the action is currently executable (boolean)
- `call()`: What happens when the action runs
This example always allows execution (`canCall: true`) and displays a
browser alert when called.
Mission accomplished!
Congratulations! You now understand the basic structure of custom actions.
