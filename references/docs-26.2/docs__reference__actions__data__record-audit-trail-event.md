
# Record Audit Trail Event Action

## About
Adds a new custom event to the audit trail database. Use this action to
record custom application- or industry-specific events.

## Example
- This action will record the following message `Current value is: {value}`.
- We are including dynamic data into this message by inserting a `Placeholder` into the
Localizable Text. In this case we are inserting
the value of a Data Variable (Dynamic Property).
- As a result the actual message that will be recorded to the database will be:
`Current value is: true`.

## Properties

### Message
The message that shall be recorded to the database.

## Related

#### Guides
Setup An Audit Trail

#### Actions
Export Audit Trail Action
