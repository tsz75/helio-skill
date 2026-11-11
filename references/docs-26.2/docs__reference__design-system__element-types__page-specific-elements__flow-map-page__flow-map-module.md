
# Flow Map Module
The `Flow Map Module` is a component of the
Flow Map Page. It can be positioned on a page by setting its x
and y coordinates. You can establish connections between modules by defining
one or more outlets for a module that can be linked to other modules on the
page.

## Anatomy
- Module
- Label
- Description
- Outlet

## Properties

### General

#### Label
Choose the headline that will be displayed within the module.
Example Module with Label “Module 1”

#### Description
Choose the line that will be displayed at the bottom of the module. It
can also be used to highlight the most important value that a module
provides.
Example Module with Info

#### Is Blinking
In order to draw the attention of operators to a specific module you can set
this value to `true` an make the module display a subtle animation.
**Note:** This setting only has a visual effect if the module has a
status set and that status is not “Neutral”.
Example Blinking Module

#### On click
Choose the action that is triggered once the user has clicked or touched
and then released the
pointer over the Module.

#### Is diabled
Will display the module as inactive and prevent operators from triggering
the action of this module.

### Position
Use the arrow buttons or the `X` and `Y` settings to position each module.

### Display

#### Icon / Image
Choose wether you want to display an `Icon` or an `Image` on this module.
With Icon
With Image

### Apply Status

#### From Value with Ranges
Use this option, if the variable linked to `Value`  provides status information. This will allow you to automatically apply the status from Value to indicate the quality of the value as either `Good`, `Warning`,  `Critical` or `Accent`.
**Learn more** with the following resources:
- Ranges
- Communicating Machine Status with Clarity

#### Manually
Determine manually which status should be displayed by the element.
-> For more information: visit
Status
.

#### 
Status "Noteworthy"
Status "Good"
Status "Neutral"
Status "Warning"
Status "Critical"

### Text Alignment
Select the alignment of the text within the module.
Bottom Left
Bottom Center
Top Left
Top Center
Center Center

### Outlets

#### What is an outlet?
With outlets, you can define connections between your modules. You can
have none, one, or multiple outlets. However, it is important to note that
having more than 3 outlets will make your Flow Map a complex visualization
that is difficult to understand.
With Default Outlet

#### Status
You can also assign a status to each outlet to highlight specific
connections for the operators' attention.
With Outlet Status

#### Is Active
Finally, you can set an outlet to `Is active` to indicate progress or
activity.
With Active Outlet
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

#### Pages
Flow Map Page

#### Elements
Linear Flow
