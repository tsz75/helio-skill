
# Trigger Messages
Next, it's time to figure out how the messages are actually going to be displayed on our HMI.
**In HELIO, messages are triggered by a state change in the PLC**.
If HELIO detects such a change, it'll add the corresponding message to the Active Messages.
Once the condition changes again, the message will enter the Message Archive.
Here's where it gets really handy: HELIO handles all the behind-the-scenes
stuff like setting up databases. So all you have to do is define the trigger
rules that tell HELIO when to actually display the messages.
So let's learn all about the different ways to trigger messages:

#### Trigger Messages Using Numeric Variables and Ranges

#### Trigger Messages Using Bits

#### Trigger Messages Using Structured Objects (JSON Objects)

#### Trigger Messages Using Property Variables (Dynamic Messages)
