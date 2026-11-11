
# Update a Project on a Target Device
In the previous step, we imported the project on the target device for the first
time. It's only natural that a project
changes over time and needs to be
updated. Let's figure out the best way to make this happen.
- Export the Updated Project From the Development Machine
On your development machine, follow all the steps on the
Export an Existing Project page to bring up the export dialog.
Make sure you export all the translations, since you probably made changes
to some of them while working on your project.

### Do Not Export Data Source Defintions
You don't need to export the data source definitions again because they
were already created when the initial import occurred.
Unless, of course, you've made new ones or changed the ones you already had.
Then you should include these sources into your export again.
- Sign in to the Target Device
Make sure HELIO is up an running on your target hardware and sign in (see also Sign Into the HELIO IDE for the First Time).
- Delete the Previous Project Version
You cannot have two projects with the same name in one HELIO Runtime. It's best to delete the previous version of your project.

### All Runtime Data of Your Will Be Kept Safe!
Deleting a project will not delete the runtime data, such as the user
database, the audit trail database, or any historical data that HELIO
has reported.
- Import Updated Project
Follow the steps in Import a Project to open the import dialog.
Ensure that all translations are imported and updated.
- Test and Validate
It is crucial that you test and validate your project again, just like
during the first import.
Perform a functional test of your HMI application: verify real-time data
updates, test operator interactions, check alarm functionality, and validate
that the system responds correctly to all inputs before commissioning for
production use.
Mission accomplished!
You’ve updated your application on the target hardware.
