
# Create a Connection to Your PLC
HELIO can connect to different Data Source Types.
For HMIs, the PLC Connection
is the most important, as it allows you to connect to your PLC using
standardized protocols. In this guide, we're gonna mainly focus on OPC UA,
because it's pretty popular and widely accepted.
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
- Add Connection
Open the
Data View and locate the
Data Source Explorer.
←
→
- Locate the `PLC-Connections` folder and open either the `Add` menu or the
context menu of the item
- Then choose a protocol that your PLC is compatible with.

### Tip
The OPC UA Connection is the most widespread of the
options. See PLC Connection for more information
about the different types.
- Specify Connection Details
- Choose a `Name`. This will be used by HELIO internally to differentiate
between multiple connections.
- Specify the `URL` of your OPC UA endpoint. A valid URL should contain the
protocol, hostname, as well as the port.
←
→
- Test the Connection
Before creating an actual connection to the URL, make sure to
validate that HELIO can connect to your PLC by clicking the **`Test`**
button.
- Create the Connection
If your test was successful, click the `Create Connection` button. Once
the connection is successfully established, it will
gets added permanently to the HELIO Runtime.

### Auto Connect
From now on the HELIO Runtime will automatically connect to
this connection during startup and will reconnect if the connection is
lost.
Mission accomplished!
Nice Job! You got yourself connected. Time to import some data from our new connection.
