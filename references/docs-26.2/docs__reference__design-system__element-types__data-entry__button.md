
# Button

## About
A button allows operators to initiate an action with a click or touch.

## Properties

### General

#### Icon
Optional icon that will be displayed before the caption. Icons are visual
cues that quickly let users know what the button does. Compared to text, the
human brain can process them much faster. In other words, they help users
understand more quickly and, above all, recognize what the button is for
more rapidly when using a button for the second or third time. So, an icon
is particularly useful for power users who regularly use certain pages and
buttons.
Button with Icon and Text
Button with only an Icon
UX Tips & Tricks: Icons and State
If your button switches between states, do not use the icon to
indicate this status. Instead, use an additional `Magic Output` on your
page to show the current state. Instead, use the caption and icon on the
button to let operators know what state the button will change to.

#### Text
Text that will be displayed on the button.
UX Tips & Tricks: Naming Buttons

#### Don't!
- Avoid using generic labels, such as "Ok", as captions for your
buttons.
- These labels fail to clearly communicate the button's
function to operators.

#### Do
- Instead, describe the action being invoked using a few simple words.

#### Is checked
If your button activates an important state or mode of your machine, it
is helpful to indicate when the feature is active. Use this property to
let operators know that the state triggered by the button is active.
UX Tips & Tricks: Checked vs. Pressed
This state should not be confused with the pressed state. A button
that uses this property can be regarded as another form of a checkbox
or radio button.

#### Is disabled
Will display the element as inactive and prevent operators from triggering
the action of this button.

### Container

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the Dashboard Page. An Element can make use of the icon to:
- Provide more context to add meaning
- Improve recognition and discoverability, especially on larger pages

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Description
Will be displayed underneath the element. This description provides additional guidance or instructions for operators manipulating the element. It expands on the label by offering supporting details and clarifying what the element represents or how it behaves. It provides an opportunity to offer more detailed context regarding the potential impact of changes or further instructions on the desired input format.

#### Action
Button that will be displayed in the upper right corner of the element. By pressing it, users can execute an action.

#### Label
Label that will be used for the action button.

#### Icon
Icon that will be displayed on the action button.

#### On click
Action that gets executed when clicking the button. Use it to:
- Open overlays that provide additional context or detailed controls for this element using the  Open Page as Overlay Action.
- Navigate to other pages using the  Navigate to Page Action.
- Execute logic on your PLC using the  Write Data Variable Action or  Call Data Method Action

#### Is disabled
Disable the action by setting this boolean property to true. The action will never execute while it is disabled.

### Action
**Click**

#### On click
Triggered once operators click or touch the element and release the   
Pointer within the boundaries of it.
If you release the   
Pointer outside of the element, the click event
will not trigger. This is a safety mechanism to prevent
accidental actions.
On low-end touch screens, particularly resistive ones, this can sometimes
lead to undesirable effects. If you encounter this and you are are
running mission-critical HMIs, we strongly recommend investing in
better hardware for the safety of your operators.
**Hold & Release**

#### On down
Action that is triggered once operators click or touch the button.

#### Repeat while holding
Action that is triggered while operators hold the button.

#### On Release
Action that is triggered while operators release the click or touch over
the button.

#### Hold repeat interval
Time interval between the execution of the Repeat while holding actions.

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
and don’t overuse it.

#### Secondary Action
A secondary button triggers one of several actions on the current page. In
addition to a primary action, there should only be a few of those
secondary actions. As a rule of thumb, a screen should not contain more
than 7 such actions. Anything else quickly leads to confusion and
frustration for users.

### Consequences

### Advice on When to Be Careful
A good button informs users if its action
can potentially be dangerous or harmful. Use this property to help users
distinguish between potentially harmful actions and actions that pose no
risk of harm.

#### Destructive Action - Primary
A primary button that executes a destructive action that can cause data
loss or trigger actions that cannot be undone.

#### Destructive Action - Secondary
If there's a really important primary action on the screen that should
grab the user's attention, use the secondary destructive button. This will
still warn users about possible data loss or irreversible actions without
distracting them too much.

### Alignment
Fill
Left
Center
Right
Select whether your button should occupy the available space or align left,
right, or in the center.
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
Record Audit Trail Event Action
Export Audit Trail Action
Export Message Archive Action
Export Recipes Action
Import Recipes Action
Change Theme
Request Exclusive Control
Release Exclusive Control
