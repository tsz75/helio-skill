
# Using the ICU MessageFormat
HELIO uses a common standard that professional translators know well, to
handle tricky translations. This language is the ICU
MessageFormat. It has many
tools for translations and internationalization – it can handle things like…
- variables
- plural forms
- genders
- select expressions
…and more. This allows you to create very detailed messages in different languages.

## How to Use the Format in Your HMI
- Create a Parameter Page
…and add a Markdown element to it:
←
→
- Add your message format
Copy the following text into the `Content` property of the Markdown element.
```
{pendingTaskCount, plural,
    =0 {Congrats, you've got it all done! 🎉}
    one {Just one last task, and then you're done! 💪}
    other {You have {pendingTaskCount, number} tasks to do.}
}
```
The text introduces a variable called `pendingTaskCount` and makes use of
the `plural` keyword in order to act upon the state of the variable.
←
→
- Set the type of the `pendingTaskCount` variable
…to Static Value and choose the `Number`.
- Give it a test drive
Change the value of `pendingTaskCount` and see how HELIO reacts to it:

## Consult Further Documentation
There is a nice overview of the format's
features in
the documentation of format.js which is the wonderful library that HELIO uses to
handle internationalization.
