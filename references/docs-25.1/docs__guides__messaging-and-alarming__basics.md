
# Messaging Basics: Storage, Codes and Levels
Before we get into the nitty-gritty of setting up your messages, let's take a
quick look at some key concepts to ensure we're on the right track.

## Storage
Let's start with some good news: HELIO is here to take care of all the messaging
related data storage so you don't have to. HELIO mainly uses two components to
store your messages:
**Active Messages**
Active Messages
is the collection of messages that are currently active based on the trigger rules set up in the
Message Triggers View
.
**Message Archive**
The
Message Archive
is the collection that contains all the messages that once were active (see
Active Messages
) but now have been moved into the archive because their trigger rule no longer applies.

## Fundamental Message Characteristics
Now that we know our messages are in good hands, let's take a closer look at
the messages themselves. Each message type has two essential properties: a `Code` that uniquely
identifies this type of message and a `Level` that communicates its priority.

### Uniqueness: Each Message Has A Code
←
→
The `Message Code` is the unique identifier of a `Message Type`. These
codes are often used in supporting materials, like documentation,
to identify errors or messages. Additionally, they are often employed in
support communication.So when picking message codes, here are some things to keep in mind:
Make sure they're easy for people to read and understand
Try to make them quick to type
Make sure they're simple to share for all the people involved
Let's have a look at a concrete example: this `Warning` message uses the
code `WARN-1`. To be honest, that's certainly not the most creative choice, but it's both
effective and serves its purpose, which is what really matters!

### Modify With Caution
Especially when a product is already in the field, changing its message codes can
have unwanted consequences. So be sure to change codes only in
exceptional circumstances.

### Priority: Each Message Has A Level
The next thing to consider when sending messages to your operators is the
importance or severity of a message. You can use three message levels to help
operators distinguish between highly critical and less important messages.

#### Error
An `Error` occurs while the machine is running and requires human
interaction to be resolved. Therefore, these errors typically need to be
acknowledged by the operator to ensure that someone has actually provided a
fix.
←
→

#### Warning
A `Warning` is a message used to prevent errors from occurring in the
first place. It provides operators with hints that certain thresholds have been
exceeded and that it's time to act now in order to keep the machine running.
←
→

#### Information
All other messages fall into the category of `Information`. These messages
can provide hints, tips on how to continue, or simply inform the user that a
particular order has been completed. There are no limits to your imagination.
←
→
Mission accomplished!
Now that you've got the gist of the basics, you're ready to move on to the
next step!
