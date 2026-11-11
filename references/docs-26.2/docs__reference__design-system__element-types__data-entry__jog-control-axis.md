
# Single Axis
Use the `Single Axis` to control one axis of a machine, such as rotation,
height adjustment, or linear positioning. This element is opened from an
Axis Control and allows operators to jog
the axis continuously or move it in defined increments. Common applications
include rotating a turret, adjusting table height, or positioning a tool along
a single direction.

## Properties

### General

### Display Actual Position

#### Label
Provides context and information to operators, guiding them and helping them
understand the value of this particular element. A good label instills
confidence in operators when making adjustments.

#### Value
The current value that should be displayed on the element, usually
this will be bound to a `Data Variable`.

### Display Title

#### Title
The Title will be displayed within the Axis Control.

### Appearance

#### Horizontal Layout
The Layout of the Axis control will be displayed horizontally, the arrows
or labels will point left and right.

#### Vertical Layout
The Layout of the Axis control will be displayed vertically, the arrows
or labels will point up and down.

### Button Display

#### Show Icons
Displays arrow icons in the Axis control.

#### Show Label
Displays labels in the Axis control. You can set the decrease and increase
labels independently.

### Jog Mode
Activate Jog Mode to enable operators to continuously increase or decrease the
value of the Axis.

#### Label
Set the label that will be displayed in Jog Mode.

#### Speed
Set the speed of the increases and decreases.

### Decrease Button

#### On down
Action that is triggered once operators click or touch the
decrease button.

#### Repeat while holding
Action that is triggered while operators hold the
decrease button.

#### On Release
Action that is triggered while operators release the click or touch over
the decrease button.

### Increase Button

#### On down
Action that is triggered once operators click or touch the
increase button.

#### Repeat while holding
Action that is triggered while operators hold the
increase button.

#### On Release
Action that is triggered while operators release the click or touch over
the increase button.

### Settings

#### Hold repeat interval
Time interval between the execution of the Repeat while holding actions.

### Step Mode
Activate Jog Mode to enable operators to increase or decrease the
value of the Axis step by step.

#### Label
Set the label that will be displayed in Step Mode.

#### Step Size
Set the step size of each increase and decrease.
- Click
- Hold & Release

### Decrease Button

#### On click
Action that is triggered while operators press and release the click
or touch over
the decrease button.

### Increase Button

#### On click
Action that is triggered while operators press and release the click
or touch over
the increase button.

### Decrease Button

#### On down
Action that is triggered once operators click or touch the
decrease button.

#### Repeat while holding
Action that is triggered while operators hold the
decrease button.

#### On Release
Action that is triggered while operators release the click or touch over
the decrease button.

### Increase Button

#### On down
Action that is triggered once operators click or touch the
increase button.

#### Repeat while holding
Action that is triggered while operators hold the
increase button.

#### On Release
Action that is triggered while operators release the click or touch over
the increase button.

### Settings

#### Hold repeat interval
Time interval between the execution of the Repeat while holding actions.
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
Axis Control
Dual Axis
