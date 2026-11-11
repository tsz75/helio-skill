
# HELIO Components
**[BETA] This Feature Is Currently in Beta!**
We’re working hard to shape and tune it by gathering feedback from pilot
customers and early adopters.

### Under Construction…
- We’re currently working hard to improve this section.
- Contact us at [email protected] if you have questions, feedback or ideas on this topic.

## About
As your HMIs grow in complexity and number of pages, you will need other tools
to maintain and manage your project. HELIO Components is one of those tools that
can help you in two situations:

### Allow a Part of Your HMI to Maintain its Own Piece of Local State
This could be, for example, a workflow that stores temporary state until the
process is completed. Only then will it use this local state to modify the state
of your machine using a PLC Connection.

### Encapsulate and Reuse a Part of Your HMI
This is usually done to prevent repetitive work while also keeping the look and
feel of recurring patterns consistent and manageable. This can be, for example,
a particular type of dashboard widget with a configuration that you often reuse.

## Creating a Component From an Existing Element or Page
You create a Component from an existing element. For example if you would
like turn a Dashboard Page into a component:
Open the context menu of the element.
Choose `Create Component`.

## Use A Component to Maintain Local State

### Define Component Properties to Provide Local State
The local state of your component is defined using the `Component     Properties` property group.You can add new properties as desired. Each property should have the
following:
A unique name
Its `Value` set to `Local Variable (Property Type)`
By doing this, you can define the data type and any additional metadata for
it, just like you would for "normal" HMI variables.
To define a new local property:
Add a new entry to your property list
Give the variable a unique and speaking name.
Open the Local Variable Editor, and chose the right type as well as its
initial value.
The property will be set to the `Initial value` every time the element
enters the viewport.For example, this occurs when you:
Navigate to a Page Component.
Open a Page Component as an overlay.
Display a Dashboard Widget Component on the screen.

### Reading the Current Value of the Property
To read and display the current value of the component, simply add a
Magic Output as a child of your component
and set its value to the `Component Property`.You can only access the value from inside the component!

### Changing the Current Value of the Property
To write and manipulate the current value of the component, simply add a
Magic Input as a child of your component
and set its value to the `Component Property`.You can only access the value from inside the component!
If you prefer to change the value of a property when an operator touches a
certain button, you can use the `Write To Component Property`
function.
Use Your Creativity!Inside your component, you can use the value of your property for various
purposes, such as:Showing or hiding elements using their
Display Condition property.Write different values to another PLC Variable using the
Condition and on its current value

## Use Page Components to Create Reusable Overlays

### Define the Properties of the Page Component to Provide Both Local State and an API for Your Reusable Component
If you have turned a page into a component you can define its component
properties as an API that can be used inside the
Open Page as Overlay Action  later.
To define a component property:
Add a new entry to your property list
Give the variable a unique and speaking name.
Open the Local Variable Editor, and chose the right type as well as its
initial value.
The property will still be set to the `Initial value` every time the Page
enters the viewport.However, this default value can also be overwritten from outside, as you
will find out in the next step.

### To Open the Page Component, Use the Open Page as Overlay Action and Override its Properties
Now, when you use the Open Page as Overlay Action
with your Page Component, you will have access to additional settings beyond
the usual `Placement` and `Animation` options.It is now possible to override component properties from outside using
dynamic property types, such as:Static ValueData Variable (Dynamic Property)
