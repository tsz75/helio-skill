
# Record Recipe Events
We've already learned how to record authentication and data events but
the HELIO audit trail also tracks changes to your recipes if you use them
within your project.
- Setup Recipes
If you need help enabling recipes in your project, check out the Recipe Management.
To add recipes to our existing small project:
- Using the
Recipes View, create a new recipe type called `Products`
and add the two variables we've been manipulating as recipe parameters,
i.e.:
  - `/Examples/Abstract/ReadWrite/ForEveryone/Integer/WithLimits`
  - `/Examples/Abstract/ReadWrite/ForEveryone/Float/WithLimits`
- Add a
Recipe Management Page to view and load these recipes.
- Add buttons to the existing
Parameter Page in order to save and load recipes using the
Save as Recipe Action and
Open Page as Overlay Action actions.
After completing these steps, your page may look similar to this:
←
→
- Record Events
It's time again to put our HMI into production and record some recipe
events. Proceed by changing parameters, creating new recipes, and loading
and deleting them.
Don't forget:

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
- View the Audit Trail
After recording some events, we can navigate to the Audit Trail Page, which will now contain our additional recipe events.
←
→
Click on one of these events to see more details in an overlay. This
example shows the `Recipe created` event.
←
→
This next examples show a `Recipe loaded` event:
←
→
Mission accomplished!
Kudos on successfully recording and reviewing recipe events! Next, how about
recording some custom events?
