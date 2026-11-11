
# HELIO Messaging API v1

### This Feature Is Deprecated
- Messaging v1 has been marked as deprecated in HELIO 24.2.
- It is still available in HELIO 24.2 but might be removed in future versions.
- Feel free to upgrade to Messaging v2 when it is convenient for you.

## Goal of this API
This specification defines what kind of interface the PLC has to provide via a
OPC UA or KEB connection, so that HELIO can:
- Display all messages on a `Message List` page
- Display new incoming messages in dialogs
- Acknowledge incoming messages

## Reference Implementation (OPC UA)
You can find a sample implementation of this specification using OPC UA in our
HELIO Playground PLC:
- HELIO Playground PLC
This can also be utilized for creating HMIs with a spec-conformant PLC. The
HELIO Playground PLC can later be replaced by the actual implementation.
**Using OPC UA as a Reference Implementation**
This guide will focus on implementing the Messaging API in OPC UA for clarity.
However, other PLC Connection types, such as the NOA Connection
, can also provide the messages using this specification.

## Message Types
HELIO uses three types of messages to provide guardrails on how to best
communicate with operators.
- An `Error` occurs while the machine is running and requires human
interaction to be resolved. Therefore, these errors typically need to be
acknowledged by the operator to ensure that someone has actually provided a
fix.
- A `Warning` is a message used to prevent errors from occurring in the
first place. It provides operators with hints that certain thresholds have
been
exceeded and that it's time to act now in order to keep the machine running.
- All other messages fall into the category of `Information`. These messages
can provide hints, tips on how to continue, or simply inform the user that a
particular order has been completed. There are no limits to your
imagination.

## API Definition
The PLC must provide a way to:
- Query for messages and inform about new, incoming messages
→ `MessageList` (Folder)
- Acknowledge active messages
→ `AcknowledgeMessage` (Method)
Optional but helpful:
- A `SimulateMessage` method can be very useful to test your API.
- A `HighestUnacknowledgedMessageLevel` property can be very useful to test
your
API.
- A `MessageCountUnacknowledged` property to display how much message still
have
to be confirmed by operators.
Example implementation

## Query for Messages – The MessageList
Define a `MessageList` folder. Within this folder, create a folder for each
message.
The names of the message subfolders can be chosen freely, as long as the
contained variables adhere to the following schema…
**Required Message Properties**
| Name | DataType | Example | Description |
| Id | String | “2d01c1e8-8878-4e94-9b5e-92005fbb9b50” | Should be a unique identifier for this message. In order to prevent id collisions, it is recommended to utilize a UUID. |
| Code | String | “E-001” | This code identifies the type of message, similar to an HTTP status code. The IDE uses it to find the corresponding content to display. There is no particular naming schema that you must follow, as long as you use the same codes in the IDE when generating your actual Messages content. |
| ArrivedOn | DateTime | 2023-08-14T06:41:05.935Z | Date that will be used to sort the messages in the HMI. |
| CanAcknowledge | Boolean | true | Do operators need to acknowledge this message? |
| WasAcknowledged | Boolean | false | Has this message been acknowledged? If not, and the ID of the message is unknown, then HELIO will treat this message as incoming and display it, if the project is configured to do so. |
| AcknowledgedOn | DateTime | 2023-08-14T06:41:05.935Z | By default this date should be set to the same value as ArrivedOn. As soon as a message has been acknowledged using the AcknowledgeMessage method, update this property to hold the timestamp when the acknowledgement took place. |
**Optional Message Properties**
| Name | DataType | Example | Description |
| Level | String | "Info" "Warning" "Error” | When using the Default Message element for managing most of your messages, define this property to inform HELIO about the type of notification dialog you want to display. |
| customProp | Any | HelpUrl, ImageUrl,… | You can add numerous properties to your messages. These properties can then be referenced when defining Default or Custom Messages in the editor. |

## Let the HMI Know About Incoming Messages
If you want the operator to take action on a message, you can define it as
incoming/active so it will be displayed by the HMI. When a message is
incoming,
the HMI can react to it and draw the user's attention by displaying it as a
dialog.
An active/incoming message needs to…
- …have a unique `Id` that HELIO has not seen yet. You’ll get the best
results
when you use a UUID for this property.
- …set its `CanAcknowledge` property to `true`.
- …set its `WasAcknowledged` property to `false`.

## Acknowledging an Incoming Message
Define a method `AcknowledgeMessage` that will be executed by the HMI when
the
operator presses the “Acknowledge” button in the HMI.
It is then the responsibility of the PLC to change the state of the message.
To
accomplish this, the PLC should modify the message's properties to:
- Set `CanAcknowledge` to `false`.
- Set `AcknowledgedOn` to the current date.
This method will receive an input argument called `MessageId` . It holds the id
of the message that should be acknowledged:
| Input Parameter | DataType | Description |
| MessageId | String | ID of the message that needs to be acknowledged |

## Removing Messages
To entirely eliminate a message from the active messages list, you need to
remove the message from the MessageList. However, removing elements from Lists
can be challenging because most PLCs only support arrays or lists of a fixed
size. A common solution is to assign a specific sentinel attribute to each list
item.
HELIO allows you to do this and filter your list based on whether a certain
field is filled or not.
You can apply this filter to your MessageList using the Data View
of the Project Editor.
The 'Id' attribute is typically an excellent choice as a sentinel attribute.
In
the `MessageList` example on the right, the 'Id' attribute is used to flag
messages as empty. Simply set the 'Id' to an empty string, and the message
will
vanish.

## Related
- Data Variable Types **→** List
