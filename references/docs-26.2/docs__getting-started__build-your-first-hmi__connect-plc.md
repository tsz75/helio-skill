
# 5. Connecting to a PLC
Now that you've finished creating your very first HMI,
let's connect a PLC to it and set up some data connections!

## 5.1 Create a New PLC Connection
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

## 5.2 Connect PLC Data with HMI Data
- Locate both `OEE` variables
First, let's look for the `OEE` variable in the
Data Source Explorer. You should spot it under:
`PLC Connection > HELIO Playground PLC > Objects > Quickstart > Molding`.
And now it's time to locate the `OEE` variable within the
HMI Data Explorer. You'll find it under
`Data > Quickstart > Molding`.
- Start connecting
Click the circle on the right of the "OEE" variable within the
Data Source Explorer to start a new connection.
- Finish connecting
Click the circle on the left of the "OEE" variable within the
HMI Data Explorer to connect the two values.
Mission accomplished!
You successfully connected the OEE variable to the PLC, good job!
- **Challenge**Connect all the dashboard data
Now lets connect some more data points to really bring our
HMI to life!
Navigate through the `Quickstart` folder within the `HELIO Playground PLC`
and connect each value you find to its corresponding HMI Data value.

## 5.4 View Live PLC Data in Your HMI
- Switch to the Content View
…and navigate to the dashboard page we created in a previous step.
- Switch to PLC Mode
Switch from Placeholder mode to PLC mode using the buttons
above the HMI Preview Panel.
- Explore PLC Mode
Now for the fun part! If you connected all the PLC data values to the
corresponding HMI data values, your HMI should look like the one on the
right. And guess what? You should now be able to see live data from the
PLC! Just watch the "OEE" gauge's value change... isn't that amazing?
Mission accomplished!
You finished the entire quick start guide like a boss!
**Learn more** with the following resources:
- Visit our Guides
