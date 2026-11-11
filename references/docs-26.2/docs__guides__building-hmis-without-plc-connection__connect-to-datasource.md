
# Connect to PLC Data
So you've defined the content of our HMI using the HMI data model we've
created during the first steps of this guide and the Placeholder Mode.
Now the PLC team ships a first version of the PLC API and provides its data
using OPC-UA. So let's connect the HMI data to this
new PLC.
- Connect to your PLC
If you're not sure how to do this, check out the Connect & Control Your PLC
guide first and then come right back here. You can use your own PLC or
simply use the HELIO Playground PLC.
- Locate the variables
- Locate the PLC variable that you want to connect to within the
Data Source Explorer in the
Data View.
- Locate the HMI variable using the
HMI Data Explorer.
- Connect the variables
- Click the connector to the left of the HMI data variable within the
HMI Data Explorer to initiate a new connection.
- Now click the connector to the right of the corresponding PLC data variable.
- View the live data in the HMI
If you now open up the
Content View and activate the `PLC mode` using the
HMI Preview Panel, you'll be able to watch the live
PLC data within your project.
Mission accomplished!
Your HMI data variable and PLC data variable are now
connected! And, last but not least, your HMI displays the live values from your PLC.
