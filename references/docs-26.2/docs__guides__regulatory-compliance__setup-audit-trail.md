
# Setup An Audit Trail
The HELIO `Audit Trail` is a chronological record of all system activities,
including user actions, data changes and system events. Are you ready to put
one in your own HMI? Let's do this!
But before we get started on the nitty-gritty of the audit trail, keep this in mind:

### Events Will Not Be Recorded While Editing
No events will be logged or recorded in the audit trail while you are editing
and previewing your HMI.
You need to
Run a Project in Production Mode in order to actually generate
entries in the audit trail database.
Why Is That?
- **Prevents Misleading Records:** During
configuration and testing, you may perform many actions that don't
represent actual operational usage. Recording these could create
confusing audit records.
- **Avoids Database Clutter:** Configuration activities can generate large
volumes of test events that would unnecessarily fill your audit trail database with
non-operational data.
- Enable the Audit Trail
First thing we need to do is to navigate to the Audit Trail Settings
and activate `Enable Audit Trail`.
- Choose Events to Be Recorded
By default, HELIO records all events, but you can choose to disable
some of them if you want to save space or are not particularly
interested in some event types.
For each of those events HELIO will now record:
- The **name** of the user that initiated the action
- The **timestamp** when the action actually took place
- The **type** aka the nature of the action
- Specific **event details** (for example the previous and the new value of a variable that has been written to)
- Specify the Database Limits
HELIO allows you to set limits that prevent the audit trail database
from growing infinitely.
- Be sure to check the legal requirements of
your industry and use case, then adjust the limits as necessary.
- The first threshold that is reached ensures that the database is limited
accordingly.
- Add an Audit Trail Page
Finally, we want to ensure that our operators have access to view the
audit trail within the HMI. In HELIO, there is a designated page that
achieves this objective.
Open the Content View of your project and
simply add an Audit Trail Page.
←
→

### Access Control Required?
For instructions on how to ensure that this page is accessible
exclusively to designated user roles, refer to the
Access Control guides.
Mission accomplished!
You have now set up your own audit trail. Time to record some events.
