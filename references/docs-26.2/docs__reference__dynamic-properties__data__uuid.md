
# UUID

## About
Sometimes you need to generate globally unique identifiers. For example
when you're creating a new recipe in an overlay and you'd like to store
it in your PLC or backend service. This is where this property comes in.
Use it in Actions that generate new items to generate
a UUID (Universally Unique Identifier) once the action is executed.
The value updates every 500 ms to keep the ID unique.
If you use this property outside an action and continuously monitor or read
its value, keep this update rate in mind.

## Related

#### Actions
Create List Item Action
Call Data Method Action
Write Data Variable Action
Write Component Property
