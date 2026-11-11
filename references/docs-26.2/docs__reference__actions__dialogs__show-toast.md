
# Show Toast Action

## Example
A `Toast` is like a quick shout-out on the screen to give operators a heads-up or provide some quick info.
They usually pop up after operators or the machine did something, and then they usually disappear automatically after a short time.
Unlike modal dialogs, they're made to not disturb operators too much, so they can keep doing their work without interruption.

### Toasts in Action

## Properties

### Title
Headline that will be displayed in the toast. Use it to inform about the event
in simple words.

### Description
Optional description to provide more context. Only use it
if the additional description really does provide value. Otherwise just
stick with the title.

### Type
Choose `Info` to provide positive feedback or confirm an action.
Choose `Error` to communicate that something went wrong.

### Discard
Choose `Automatically` to discard the toast without user interaction after 5
seconds. Choose `Manually` if you would like operators to dismiss the toast
explicitly.
