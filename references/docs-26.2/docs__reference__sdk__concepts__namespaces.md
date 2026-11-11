
# Namespaces
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
**Learn more** with the following resources:
- createNamespace() documentation
in the SDK API.
- Learn how to Create a Namespace.
