
# Trigger Messages Using Property Variables (Dynamic Messages)
In the previous step, we learned how to trigger messages by using structured
objects.
In some scenarios we also want to provide dynamic message data from the PLC
in a similar way, but we cannot follow the structured object approach.
For example, because the variables that provide the message metadata
are different in another way. They could, for example, not be provided by an
object but a flat list of variables.
In such situations you can use the `Dynamic Message` trigger and simply connect
a bunch of variables to provide the metadata of your message.

## 1. Import Message Variables From Your PLC
- Locate the `Examples/Concrete/Messaging/DynamicMessages` Variables
Locate the variables and methods in the Data Source Explorer.
You should spot them in this directory:
`Examples/Concrete/Messaging/DynamicMessages`.
←
→
- Import Variables & Methods
Let's import
the variables and methods into the project so that we can use them in our
HMI.
- First of all import the whole `DynamicMessages` directory as it contains
our dynamic message objects.
- We're also going to use the two methods `SimulateMessage` and
`AcknowledgeAllMessages`. So make sure you import those too.
←
→

### Why Do We Need Those Methods?
Both methods are only needed for simulation purposes:
- `SimulateMessage` tells our HELIO Playground PLC to fill one of our dynamic
objects, so we can simulate a message appearing on our PLC.
- `AcknowledgeAllMessages` will cause our HELIO Playground PLC to clear all the
active messages in the `DynamicMessages` directory.

## 2. Set Up Your Triggers
Now that we've got some data, let's define the triggers that will make sure
changes to this data will actually trigger a message.
- Define Your First Trigger
Switch to the Message Triggers View, click
the `Add Type` action and choose `Dynamic Message` as a trigger type.
←
→
- Link the Code Variable
As with structured object
triggers, we do not hardcode a
specific message code for each trigger.
But instead of mapping the message fields to a structured object, we'll
link each message field to a variable that supplies the metadata.
We start with the required `Code Variable` property and link it to:
`DynamicMessages/MessageList/Message 0/Code`
←
→

### When Will Messages Appear?
Once this variable changes from an empty to a non-empty string e.g. `WARN-001`.
- Link Additional Variables
Yor are free to link additional message fields to other variables. As with
structured object triggers, there
are some rules that apply to the message fields that the PLC must
respect:
Code
(required)
- Its value represents the Message Code of the message that shall be displayed.
- Must be of type String.  But can of course be used to represent numerical values as well.
- Signals HELIO to display a message, if the variable is set to a non-empty string e.g. `WARN-001`.
- Signals HELIO to remove the message, if the variable is set to an empty string again.
- Should best be called `Code`, but you can actually call it whatever you like.
Level
(optional)
- Is used by HELIO to determine the level of the message. See Messaging Basics: Storage, Codes and Levels for more details…
- Must be of type String.
- Allowed values: `Info`, `Warn`, or `Error`.
Title
(optional)
- Is displayed by HELIO in the Message Dialog as the title of this message.
- Must be of type String.
- Can be a Translation Key. HELIO will translate it automatically.
Description
(optional)
- Is displayed by HELIO in the Message Dialog as the description of this message.
- Must be of type String.
- Can be a Translation Key. HELIO will translate it automatically.
After connecting all the message fields your trigger should look like this:
- Add Additional Triggers
Repeat this procedure for every message object by duplicating the message
trigger and simply adjusting the variables.

## 3. Create a Page to Trigger Messages
The excitement is building because we're all set to start sending messages
to our HMI. All we need to do is create a small page to simulate the whole
thing. Let's get started!
- Add a `Parameter` Page
First things first, we need to create a page. To keep it simple, we're
just going to create a basic
Parameter Page.
So switch to the Content View and add a Parameter Page.
- Turn the Page Into a Component to Add Local State
In order to be able to send multiple Message Codes, we first have to turn
the page into a Component (see HELIO Components to
learn more about Components).
←
→
Define a Component Property named `Message Code` and add `ERROR-1` and `INFO-1` as possible values. This will allow
us to send these values to the PLC.
- Add a `Magic Input` to Control the `Message Code`.
- Add a `Magic Input` to control the Message Code that shall get sent to
the PLC and set its value property to the Component Property that we've just defined.
- Add a `Button` to call the `SimulateMessage` method.
←
→

## 4. Simulate Our First Messages

### Let's Get Those Messages Fired Up!
- Switch to `PLC Mode` to make sure you will be writing to the actual PLC.
- Switch to `Test Mode` so you can toggle the inputs.
- Click on the button to simulate messages.
Your HMI should behave something like this:

## 5. Removing Messages
Now that we have messages in our
Active Messages list, we need to ask ourselves how
those messages will become inactive. How are messages resolved and moved into the
Message Archive?

### When Will Messages Disppear?
Once the `Code` changes back from a non-empty string e.g.
`WARN-001` to an empty string.
So the PLC is able to remove messages from the list by resetting the `Code`
property of the object to an empty string. Once this is detected,
HELIO will mark this message as archived.
**In real life, this might be caused by:**
- The actual error or situation that caused the error has been resolved,
so the message can be archived.
- There is an additional hardware button to acknowledge all messages
which can be pressed by operators. This hardware acknowledgement will be
used by the PLC to reset all the message objects and set their `Code`
attribute to an empty string.
**For our simple test HMI:**
We will simulate this process by calling
the `AcknowledgeAllMessages` method. This resets all objects in the
`DynamicMessages` directory and sets their `Code`
attribute to an empty string.
- Add a Header Cell
Let's add a simple Header Cell to trigger
the method:
- Add it to the header of your HMI.
- Set its `Title` to `Clear Messages`.
- Choose a nice `Icon` that gets the message across, e.g. `Broom`.
- Configure `On click` Property
Activate the `On click` property and choose the Call Data Method Action
as its type:
←
→
- Clear Some Messages
Switch to test mode and click `Clear Messages`. Any active messages that
you triggered before should no longer appear.
Mission accomplished!
You've configured and used all sorts of triggers now.
Ready to learn about displaying active and archived messages within your HMI?
