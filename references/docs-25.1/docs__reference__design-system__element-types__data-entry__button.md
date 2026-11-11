
# Button

## About
A button allows operators to initiate an action with a click or touch.

## Properties

### General

#### Caption
Text that will be displayed on the button.
UX Tips and Tricks

#### Don't!
- Avoid using generic labels, such as "Ok", as captions for your
buttons.
- These labels fail to clearly communicate the button's
function to operators.

#### Do
- Instead, describe the action being invoked using a few simple words.

#### Is disabled
Will display the element as inactive and prevent operators from triggering
the action of this button.

#### Is checked
If your button activates an important state or mode of your machine, it
is very helpful to show that this function is now on. Use this property
to tell operators that the button-triggered state is active.UX Tips and TricksThis state should not be confused with the pressed state. A button
that uses this property can be regarded as another form of a checkbox
or radio button.

### Action
**Click**On clickTriggered once operators click or touch the element and release the   
Pointer within the boundaries of it.
If you release the   
Pointer outside of the element, the click event
will not trigger. This is a safety mechanism to prevent
accidental actions.On low-end touch screens, particularly resistive ones, this can sometimes
lead to undesirable effects. If you encounter this and you are are
running mission-critical HMIs, we strongly recommend investing in
better hardware for the safety of your operators.**Hold & Release**On downAction that is triggered once operators click or touch the button.Repeat while holdingAction that is triggered while operators hold the button.On ReleaseAction that is triggered while operators release the click or touch over
the button.Hold repeat intervalTime interval between the execution of the Repeat while holding actions.

## User Guidance
**Assist operators in distinguishing between actions**. Pressing a button on
a machine can do different things. A good button tells users how important
an action is. That's why there is a "Prioritization" option. It helps users
separate important actions from less important ones.

### Prioritization

#### Primary Action
The primary action is the most important thing you can do on the page or
screen you're currently looking at. It's the button that stands out the
most, and it's what you want your users to click on. So be careful with it
and don’t overuse it.[img:]

#### Secondary Action
A secondary button triggers one of several actions on the current page. In
addition to a primary action, there should only be a few of those
secondary actions. As a rule of thumb, a screen should not contain more
than 7 such actions. Anything else quickly leads to confusion and
frustration for users.[img:]

### Consequences
**Advice on When to Be Careful:** A good button Informs users if its action
can potentially be dangerous or harmful. Use this property to help users
distinguish between potentially harmful actions and actions that pose no
risk of harm.

#### Destructive Action - Primary
A primary button that executes a destructive action that can cause data
loss or trigger actions that cannot be undone.[img:]

#### Destructive Action - Secondary
If there's a really important primary action on the screen that should
grab the user's attention, use the secondary destructive button. This will
still warn users about possible data loss or irreversible actions without
distracting them too much.[img:]

### Icon
Decide if you want to add an icon to your button. Icons are quick visual
hints that tell users what the button does. They help users understand what
the button is for, sometimes without needing more info. This is particularly
beneficial for power users who frequently use specific screens and buttons.

#### Icon and Caption
Both, the button's caption and icon will be displayed.[img:]

#### Icon only
The button's caption will not be displayed in the HMI.[img:]

#### Icon
Icon that will be displayed before the caption.UX Tips & TricksIf your button switches between states, do not use the icon to
indicate this status. Instead, use an additional `Magic Output`.
on your page to display the current state. You can use the caption and
icon on the button to inform operators about the state to which this
button will change to.

### Alignment

#### Fill
The button will occupy the available space.[img:]

#### Left
The button will occupy only the space required by the caption and icon,
and it will align to the left.[img:]

#### Center
The button will occupy only the space required by the caption and icon,
and it will align in the center.[img:]

#### Right
The button will occupy only the space required by the caption and icon,
and it will align to the right.[img:]

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

#### Actions
Actions
Close Dialog Action
Close Active Overlay Action
Call Data Method Action
Confirm and Execute Critical Action
Create List Item Action
Execute Multiple Actions
Delete List Item Action
Export List Items as CSV File
Highlight Legend on Current Page
Import List Items from CSV File
Navigate to Page Action
Open Page as Overlay Action
Reset Buffered Changes Action
Show Simple Alert Action
Show Main Navigation Action
Show Toast Action
Show Dialog Action
Write Buffered Changes to PLC
Write Component Property
Write Data Variable Action
Change Language Action
History Back
History Forward
Toggle Linear Flow Collapsible
Save as Recipe Action
