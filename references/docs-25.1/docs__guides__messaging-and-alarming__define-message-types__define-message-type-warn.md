
# Define A Warn Message
In the previous step we learned that `Error` messages are the highest
level of escalation. `Warn` messages are the next level down.Their main purpose, therefore, is to alert operators so that they can
resolve issues before they ever escalate to an error.In this step, we're going to define an example warning message that alerts
operators when a temperature has reached a threshold value.
←
→
- Add New Message Type
Click `Add Type` within the Message Types View:←→[img:]
- Choose a Unique Code
We'll use `WARN-1` as the code for now:←→[img:]
- Choose the Right `Level`
Choose `Warn` as the `Level` of the new message:[img:]
- Choose a Descriptive `Title`
- Define the `Title` that will be displayed in the
message dialog.
- Make sure you're choosing unique translation keys and
provide translations for each language of your project.
- Provide a Clear `Description`
Always remember that warnings will occur in or cause stressful situations.
With this in mind:
Describe the cause of warning clearly and precisely.
Be sure to keep it brief, using only the most essential words.
Don't add unnecessary complexity by apologizing. Apologizing is
human. But it can be annoying, especially if it happens repeatedly.
Perhaps well-intentioned statements such as `Sorry!` are usually
unnecessary since they will distract your operators from finding the
solution.
- Offer a Structured `Solution`
- Be clear about what operators can do to fix the warning.
- Keep in mind that clear, step-by-step instructions are key.
- Speed before politeness – avoid every unnecessary word like `Please`
in order to get operators to the solution as quickly as possible.
Mission accomplished!
Wonderful, we've got our warning message type defined. So let's go
ahead define a message
of the final level that we've been missing so far.
