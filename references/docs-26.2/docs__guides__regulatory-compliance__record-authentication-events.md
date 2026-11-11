
# Record Authentication Events
Now that we've learned how recording Data Events
works, it's time to try the same with authentication.
After all, accountability means keeping track of who signed in and out of an
HMI and when.
As before, we're starting from scratch and can't sign into our HMI yet. Let's
fix that!
- Add a Way to Sign In
The simplest way to do this is to add the `User & Login`
Header Cell to the header of your HMI.
←
→
- Track a Sign In
That's it! Now, we can start signing in and out of our HMI, and HELIO will
record all the related events. And don't forget, you can only do this if
you run your HMI in production:

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
In this example we've signed in as `Bob`.
←
→
- View Event Details
HELIO can also give you some info about the tracked events.
When you're on the Audit Trail Page, just click on an event to see more
details in an overlay.
←
→
- Add a User Management Page
With HELIO, you can also give your customers the ability to create and
manage their own user base using the User Management Page.
If administrators then create, update or delete users within the HMI,
these actions will also be tracked by HELIO. To simulate this:
- Add a User Management Page to your HMI.
- Add a Header Cell that uses the Open Page as Overlay Action to open the
User Management page.
←
→
- Track User Management Events
Now, when signing in as an administrator, we can start creating, updating
and deleting HMI users, and HELIO will record all related events. Remember
that events will only be recorded if you run your HMI in production mode.

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
The following example shows an event that recorded the creation of a new
HMI User called `John`.
←
→
Mission accomplished!
Great job successfully recording and reviewing your first authentication
events! How about recording some recipe events next?
