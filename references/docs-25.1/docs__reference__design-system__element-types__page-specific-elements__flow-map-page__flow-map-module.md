
# Flow Map Module

## About
The Flow Map Module is a component of the
Flow Map Page. They can be positioned by setting their x
and y coordinates. You can establish connections between modules by defining
one or more outlets for a module that can be linked to other modules on the
page.

## Anatomy
- ModuleLabelInfoOutlet

## Properties

### General

#### Label
Choose the headline that will be displayed on top of the module.[img:]Example Module with Label “Module 1”

#### Description
Choose the line that will be displayed at the bottom of the module. It
can also be used to highlight the most important value that a module
provides.[img:]Example Module with Info

#### Is Blinking
In order to draw the attention of operators to a specific module you can set
this value to `true` an make the module display a subtle animation.[img:]Example Blinking Module

#### On click
Choose the action that is triggered once the user has clicked or touched
and then released the
pointer over the Module.

### Position
Use the arrow buttons or the `X` and `Y` settings to position each module.

### Display

#### Icon / Image
Choose wether you want to display an `Icon` or an `Image` on this module.[img:]Example Module with Icon[img:]Example Module with Image

### Apply Status

#### From Value with Ranges
If the displayed value includes a status, you can use the "Apply Status From Value with Ranges" option to visually indicate the value’s status as either "Good", "Warning", "Critical" or "Accent".

#### Manually
Determine manually which status should be displayed by the element.

#### 
Module With Status `Ok` Applied

### Outlets

#### What is an outlet?
With outlets, you can define connections between your modules. You can
have none, one, or multiple outlets. However, it is important to note that
having more than 3 outlets will make your Flow Map a complex visualization
that is difficult to understand.[img:]

#### Status
You can also assign a status to each outlet to highlight specific
connections for the operators' attention.[img:]Example Modules with Outlet Status

#### Is Active
Finally, you can set an outlet to `Is active` to indicate progress or
activity.[img:]Example Modules with Active Outlet

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
Linear Flow
