
# Messaging Settings
The `Messaging Settings` let you customize how messages are going to be displayed
all across your HMI.

### General

#### List Page
Define which page inside your HMI will be responsible for displaying your
messages. This page should be a Message Page.

### Display Options
Let you decide how HELIO should present incoming messages to your
operators.
**Display only in list** will add incoming messages to the
Active Messages and update the
Number of Active Messages.
**Display in list and as Dialog** will additionally display the incoming
messages as a modal dialog that prompts operators to pause their current task.

#### On info
Choose how a new message with the `Information` level should be displayed.

#### On warning
Choose how a new message with the `Warning` level should be displayed.

#### On error
Choose how a new message with the `Error` level should be displayed.

### How can I view these message lists?
Simply add the Message Page to your HMI.

### Allow Acknowledgement by Operator
Enable this option if you would like operators to be able to acknowledge
messages. Use the per-level toggles to control which message levels
(Information, Warning, Error) require acknowledgement.

#### On acknowledge
This event gets triggered whenever an operator acknowledges a message. Use
it to execute actions that inform your PLC about this fact, for example to
reset a trigger condition for particular messages.

### Archive Message When

#### Archive When
Choose when messages are moved from the active message list into the archive:
- **Message is gone**: the message is archived as soon as its trigger condition no longer applies.
- **Message is gone and acknowledged**: the message is archived when the trigger condition no longer applies and an operator has acknowledged it.
See Messaging Storage for more details about
active and archived messages.

### Custom Message Icons
Override the default icons used to represent each message level (Information,
Warning, Error) across the HMI.

## Related

#### Guides
Messaging & Alarming

#### Pages
Message Page

#### Dynamic Properties
Active Message Metadata
Number of Active Messages
