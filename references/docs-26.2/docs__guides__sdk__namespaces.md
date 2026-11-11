
# Create a Namespace
Before using the HELIO SDK to create any
Custom Elements, Custom Actions, and
Custom Dynamic Properties, you'll need a
namespace. Think of it as your extension's unique address space that prevents
naming conflicts with other extensions
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
Your namespace should follow reverse domain name
notation, like
this: `com.my-company`. You can also add more segments if you want to be more
specific, for example: `com.my-company.my-extension`.
This way, HELIO always knows exactly where each element belongs, and your
extensions stay neatly organized inside your project.

## 1. How to Create a Namespace?
In your extension repository, create a file called `src/namespace.ts` with the
following content:
```
import { createNamespace } from '@hmiproject/helio-sdk';

export const namespace = createNamespace({
  name: 'com.my-company.my-extension',
});
```
L
1
Import the createNamespace() function from the HELIO SDK.
L
3
Use this function to create a namespace variable. You export it right away
so that all your custom elements, actions, and dynamic properties can use
it.
L
4
Give your namespace a name that follows the rules mentioned above.

## 2. How to Use a Namespace?
Now that you have defined a namespace, you can make use of it. Basically, you
pass this namespace as the first argument to functions like
createElement(), createAction(), or
createDynamicProperty().
Mission accomplished!
You've learned why namespaces matter, and you've created your first one. You'll
be using this namespace in the following SDK guides.
