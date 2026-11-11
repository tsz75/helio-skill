
# Record Data Events
Once the Audit Trail has been set up, it is time to
start recording events. To establish accountability, the most important events
to record are when operators change or adjust the values of your PLC or
machine. The good news is that you don't need to do anything to accomplish
this.
To keep track of changes to our data, we've got to put some data into our
project first. Let's start by creating a PLC Connection and
bringing in some data variables that we can adjust.

## 1. Create a PLC Connection
- Download & Start the `HELIO Playground PLC`
Setting up a PLC that we can connect to sounds pretty complex, right?

### The `HELIO Playground PLC` Has Got Your Back
It's a software-based demo PLC that you can download for free and
run on your development computer right away. A handy tool when you want
to learn how to connect HELIO to an industrial machine that
communicates using OPC-UA.
←
→
**→ Download the latest version and start it.**
- Add the Connection
Good job on getting the PLC set up and running. Let's keep going:
- If you haven't set up a new project just yet, now is a great time to Create a New Project.
- Open your new project in the Project Editor and switch
to the Data View.
- In the
Data Source Explorer,
add a new OPC UA Connection,
rename it to `HELIO Playground PLC`, and use the default settings.

### The Right Name Is Important!
It is important to name the connection correctly and not to use the
default name, since the template — and thus all the variables it uses — was
created with `HELIO Playground PLC` as the connection name.
- Explore the Structure
Once you've got the connection all set up, feel free to take a look and
explore the data tree of the HELIO Playground PLC.

## 2. Add a Parameter Page
We're starting from scratch and don't have an HMI yet, so we need to create a
basic Parameter Page that lets us adjust some values of our PLC. Our next step
is to create a parameter page and make two of our variables available for
editing by our HMI operators.
- Create a Page
Create a new
Parameter Page and add two
Parameter elements that each contain a Magic Input element that can be used to
adjust variables from our PLC.
- Link the Data
Link the `Value` of those new inputs to these data variables:
- `/Examples/Abstract/ReadWrite/ForEveryone/Integer/WithLimits`
- `/Examples/Abstract/ReadWrite/ForEveryone/Float/WithLimits`
When you're done, your new page should look like this:
←
→

## 3. Create & Review Audit Trail Events
Okay, so now it's time to put our HMI into production and record some real
events. Don't forget:

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
- Adjust Your Parameters
In your HMI feel free to play around with those parameters. Tweak and adjust them
however you like. Just remember that we're only doing this to record these
changes.
- View the Audit Trail
Once we've adjusted some parameters we can now navigate to the Audit Trail Page
we've created before. It will now be filled with lots of events:
←
→
- View Event Details
HELIO can also give you some info about the tracked events.
When you're on the Audit Trail Page, just click on an event to see more
details in an overlay.
←
→
Mission accomplished!
You've successfully recorded your first built-in events, nice job! Hey, do you
think we could record some authentication events as well?
