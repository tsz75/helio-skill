
# Local Variable

## About
A `Local Variable` is quite similar to an
HMI Variable created in the
Data View, offering identical options and metadata.
However, they are only stored within a component's scope in the user's
browser.
`Local Variables` represent scoped client-side state which is crucial for
defining reusable components. For example when you need to keep and manipulate a
temporary value within an overlay without immediately writing it
to the PLC.

## Typical Use Case: Providing Components with Local State
Local variables are mainly used to set up the API and the state of
HELIO Components.
The example shows a Component with 4 properties. Each of these properties
uses the `Local Variable` type. This means they create variables that only
exist within this specific component. These properties can be given to a
component instance and then changed by the component itself.
You edit the type and properties of this variable by clicking the button
of this property which opens a Quick Edit Dialog like this one.
The example shows how editing a `Float` variable looks like.

## Related

#### Guides
HELIO Components
