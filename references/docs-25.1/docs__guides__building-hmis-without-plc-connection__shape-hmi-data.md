
# Shape Your HMI Data Model
So your team already has a rough idea or even better: wireframes or design
mockups of what your HMI should look like. But the PLC development hasn't
started yet? Let's have a look at how to set up and structure your HMI data
to be able to start building the HMI without having access to the
actual PLC.
- Decide **how** to structure
Let's start by working out what basic data you actually need in your HMI
and how to structure it. Of course, you can always change this structure
later, but having a good baseline will help you a lot later on.If you're building a project with a cross-functional team, this is usually a
team process. Based on wireframes, you will create a first proposal that you
will shape with your team.
- Create the structure
In this example, the product team wanted to organize the data according to
how it's used in the HMI. But feel free to create any structure that suits
your needs.
Open your project in the Project Editor
and switch to the Data View.
Start by creating
directories using the HMI Data Explorer.
Click the `Add` button next to the `Data` directory and select
`Directory`.
[img:]Your result data structure should look like this:[img:]
- Add data
OK, now let's add some variables and populate our newly created structure
with some content.
Move your pointer over the `Moulding` directory.
Click on the `Add` button within the row of this directory.
Choose `Variable` from the action menu.
[img:]
- Name your data
Once you've created a variable, you can set its name right away if you
want to. You can always change it later if you feel the need. For this
example choose OEE as the name.[img:]
- Augment with metadata
One of the strengths of HMI Data in HELIO is its ability to integrate
additional information, providing HELIO with the capacity to present more
comprehensive input and output elements for more effective input and
control of this variable.
Choose `Float` as the type of this variable.
Add a description to let other team members know the details of this data.
[img:]There are a lot more properties you can set for each of your HMI data
variables. See Common Properties to learn more.
- Define placeholders
Defining placeholders is a critical step in the HMI development process
because it allows us to create a realistic data set for our HMI. These
placeholders will be displayed in our HMI until we can connect a real PLC
to it, allowing us to move faster.[img:]
Mission accomplished!
You've created an HMI data structure! You are now ready to start creating and
editing your HMI. Once that's done, we'll move on to the next step: connecting
the HMI data to your PLC.
