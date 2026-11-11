
# Execute Multiple Actions

## About
Use this action if you want HELIO to execute two or more actions either in parallel or in a specific order.

### Handle with care!
If you are using it to execute
complex business logic, ask yourself whether that logic should live within
your PLC instead.

## Example
In this example, the `Click` event triggers a sequence of two actions
that are executed in order, one after the other.
First we’re writing state to our PLC using the
Write Data Variable Action.
After triggering the first action, we close any currently open overlay using the
Close Active Overlay Action.

## Properties

### Type
Control the sequence of action execution. `Parallel` executes all actions
simultaneously, whereas `In Order` executes each action sequentially and will
abort the entire chain if one action fails.

## Related

#### Actions
Actions
Close Dialog Action
Close Active Overlay Action
Call Data Method Action
Confirm and Execute Critical Action
Create List Item Action
Execute Multiple Actions
Delete List Item Action
Export List Items as CSV File
Highlight Legend on Current Page
Import List Items from CSV File
Navigate to Page Action
Open Page as Overlay Action
Reset Buffered Changes Action
Show Simple Alert Action
Show Main Navigation Action
Show Toast Action
Show Dialog Action
Write Buffered Changes to PLC
Write Component Property
Write Data Variable Action
Change Language Action
History Back
History Forward
Toggle Linear Flow Collapsible
Save as Recipe Action
Record Audit Trail Event Action
Export Audit Trail Action
Export Message Archive Action
Export Recipes Action
Import Recipes Action
Change Theme
Request Exclusive Control
Release Exclusive Control
