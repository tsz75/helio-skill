
# Audit Trail Settings
The Audit Trail Settings allow you to activate the audit trail and specify the
events to be recorded in the database. The following events can be recorded:

## Data

### Variable changed
This event is recorded whenever a variable is changed from within the HMI.
Changes to variables initiated by the PLC are not recorded.

### Method called
This event is recorded whenever the HMI executes a method call.

## Authentication

### HMI user signed in/out
This event occurs when a user signs in or out of the project.

### HMI user created
This event occurs when a user is being created in the HMI via the
User Management Page.

### HMI user updated
This event occurs when a user's details are changed in the HMI via the
User Management Page. For example, the password has
been changed.

### HMI user deleted
This event occurs when a user has been deleted within the HMI.

## Custom

### Record custom event
This event is recorded whenever the Record Audit Trail Event Action action
is being triggered from within the HMI.

## Recipes

### Recipe created
This event occurs when a new recipe is being created in the HMI via the
Recipe Management Page.

### Recipe updated
This event occurs when a recipes's details are changed in the HMI via the
Recipe Management Page. For example, a parameter has
been changed.

### Recipe deleted
This event occurs when a recipe has been deleted within the HMI.

### Recipe loaded
This event occurs whenever recipe has been loaded using
the Recipe Management Page.

## Related

#### Pages
Audit Trail Page

#### Actions
Record Audit Trail Event Action
Export Audit Trail Action
