
# Define An Info Message
Finally, let's talk about the `Info` level and create a sample `Message     Type` for it. These messages are sent to operators to make things transparent
and known. They do **not require immediate action**, but are for information
purposes only.
In this step, we're going to define an example message that
informs operators about a successful software update.
←
→
- Add New Message Type
Click `Add Type` within the Message Types View:
←
→
- Choose a Unique `Code`
We'll use `INFO-1` as the code for now:
←
→
- Choose the Right `Level`
Choose `Info` as the `Level` of the new message:
- Choose a Descriptive `Title`
- Define the `Title` that will be displayed in the
message dialog.
- Make sure you're choosing unique translation keys and
provide translations for each language of your project.
- Provide a Clear `Description`
- Describe the cause of this message clearly and precisely.
- Be sure to keep it brief, using only the most essential words.

### Solution Is Optional
We've created other message types before — remember the `Error` and `Warn`?
We've added a `Solution` for both of them.
In this case, we don't need to provide one since this message is just
an information that doesn't need to be resolved.
Mission accomplished!
Great, we've got sample `Message Types` set up for each `Level`. Let's go
ahead and actually trigger them.
