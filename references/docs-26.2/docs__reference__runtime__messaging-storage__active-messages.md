
# Active Messages
Active Messages
is the collection of messages that are currently active based on the trigger rules set up in the
Message Triggers View
.
**How do messages enter?**
Whenever a trigger rule turns `true`, HELIO will add the message with
the `Code` specified by that rule to the `Active Messages` collection.
**How do messages leave?**
As soon as a trigger rule no longer applies, i.e. a message should no longer
be displayed to the operators, HELIO will take care of moving this message
to the Message Archive.
**What does acknowledging an active message mean?**
Once a message is acknowledged, it is still active and will remain in
the collection of `Active Messages` until the trigger rule no longer applies.
However, it is no longer displayed as a dialog.

## Related

#### Guides
Messaging & Alarming

#### Pages
Message Archive
Messages View
