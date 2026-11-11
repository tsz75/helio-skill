
# Trigger Messages Using Structured Objects (JSON Objects)
In the previous steps, we learned how to trigger messages by watching numeric
variables or setting the bits of a variable. In more advanced scenarios these
basic ways of triggering messages can be too limited.
For example:
- You have a huge amount of possible `Message Types`.
- You want the PLC to have control over message metadata like `Level`, `Title`, `Description`, etc.
- You want to attach additional metadata to messages from your PLC.
In such scenarios, it is the PLC that actually provides the message metadata using a
structured object. Let's find out how we can use the trigger called `JSON Object`
to make this all work.

## 1. What is a Message Object?
First, let's clarify what `Message Objects` actually are. Each message is a data
structure that can trigger messages and needs to adhere to
the following rules:

### A Message Object…
- **Can** be represented as a string variable that provides all of the message data using a JSON payload.
- **Must** contain a `Code` variable that will actually trigger the message.
- Can optionally include additional variables that can be be used to define
message metadata.
Code
(required)
- Its value represents the Message Code of the message that shall be displayed.
- Must be of type String.  But can of course be used to represent numerical values as well.
- Signals HELIO to display a message, if the variable is set to a non-empty string e.g. `WARN-001`
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

### Legacy Support: Directory With Child Variables
In previous HELIO versions (25.1 and below), structured objects could be
represented as a data directory with message properties as child variables. This
is still supported in HELIO 25.2.0 and later versions to support older project
configurations without breaking existing projects. For newer projects, use the new
Dynamic Message Triggers introduced in HELIO 25.2.0.
They allow you to select a variable for each message property instead of
specifying a property name, which is a bit more secure since HELIO can verify
if this variable still exists.

### Outlook: Simplified Message Object Configuration via Structs/Extension Objects
Custom data types and structures, also known as extension objects in OPC UA,
will undoubtedly streamline the configuration of such object triggers. We've
already started foundational efforts to make this possible in the future. so
expect a more simplified setup of message trigger for structured objects in
future versions of HELIO.

## 2. Import Message Objects from Your PLC
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

## 3. Setup Your Triggers
Now that we've got our structured objects, let's define the triggers that will make sure
changes to these objects will actually trigger a message.
- Define Your First Trigger
Switch to the Message Triggers View, click
the `Add Type` action and choose `JSON Message` as a trigger type.
- Configure the Trigger
The main difference from previous triggers is that we **do not hardcode a
specific message code for each trigger**.
Instead, we will set the `Source` property of our trigger, which needs to
point at our structured object. Select the first message object called `Message 0`
in the `Dynamic Message` directory that we imported in the previous steps.
←
→
Now, we need to map the properties of the `Message 0` object to the fields
of our message. Enter the property name `Code` into the `Code Field` to
instruct HELIO to look into the object and retrieve the message code from
the `Code` property.
←
→

### When Will Messages Appear?
Once `Code` changes from an empty to a non-empty string e.g. `WARN-001`.
- Add Additional Triggers
Repeat this procedure for every message object by duplicating the message
trigger and simply adjusting the `Source` property:
←
→

## 4. Create a Page to Trigger Messages
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

## 5. Simulate Our First Messages

### Let's Get Those Messages Fired Up!
- Switch to `PLC Mode` to make sure you will be writing to the actual PLC.
- Switch to `Test Mode` so you can toggle the inputs.
- Click on the button to simulate messages.
Your HMI should behave something like this:

## 6. Map More Object Metadata
So far HELIO only receives the `Code` from the PLC. But we can provide more message
metadata from the PLC.
- Map More Message Fields
Go back to your trigger definition and make sure all of the object's properties
will get mapped from the PLC to the fields of the message:
- Locate the `Mapping` section.
- For each field of the message (`Title`, `Description`, …) enter the name of the structured object property
that will provide the metadata.
Once this is done, your trigger configuration should look like this:

## 7. Removing Messages
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
You've learned how to trigger and archive messages using structured objects.
However, there is another way! So, if you're interested in triggering dynamic
messages using property variables, stick around for the next guide.
