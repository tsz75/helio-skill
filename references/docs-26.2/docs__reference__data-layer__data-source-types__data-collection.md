
# Data Collection
`HELIO Data Collections` are used to store lists of structured data within
your HMI, rather than in the memory of your PLC. This type of data is usually too
large for your PLC to handle, as it is only interested in specific properties
of a collection item.
Some possible use cases include tool metadata or tasks that operators can manage
using the HMI.

## Behind the Scenes
- HELIO uses basic JSON files to store those collections on the device that executes the HELIO Runtime.
- Each file and therefore item hast to follow the same schema.
- HELIO monitors these files for changes and notifies all connected HMIs of them.
- Other software components can perform actions such as reading, writing, and deleting files in a data collection.

## Creating a Data Collection
To create a new Data Collection use the Add button on the Data Collection root
folder in the Data Source Explorer of the
Data View.

### Managed Collections
Managed collections have limitations, but they also relieve you of some
decision-making responsibilities. When it comes to managed collections,
HELIO will handle tasks such as selecting the storage location and creating
an attribute that uniquely identifies each item.
As a result you will not be able to access the unique key of Managed Data
Items in your HMI.

### Unmanaged Collections
Use unmanaged collections when you need a simple exchange format between HMI
and PLC.
The HMI has the capability to create, store, and update items in a
designated folder on your target device. After the items are stored, the HMI
can trigger the PLC. The PLC, in turn, can load the items as JSON files and
commence procedures based on the values they contain. HELIO will then…
- store each collection in one directory.
- add a new folder in this directory for each item in the collection.
- Each folder contains a `data.json` file that will store all the data for
this item.
**Directory**
The path where HELIO will store this collection. Can either be…
- a relative path to the
Data Directory.
- an absolute path on the operating system HELIO is running on.
**Key attribute**
Define the name of the attribute that will define the name of the folder.

## Defining the Blueprint of Items in Your Data Collection
To define the shape of your items, add variables to your item blueprint.
Please note that you don’t have access to the “normal”
Data Variable Types here since you are limited to Data Types
supported by JSON.

### Importing the Collection as a List Into Your HMI
Once defined, you can use Drag & Drop to import your Data Collection into
HMI Data Explorer. This action
will create a
List in your project that you can now use, for example,
to create a
Collection Page for your recipes.
If you have created an unmanaged collection and set its `Key attribute`, for
example, to `myCustomId`, the blueprint of the imported List will also include
this property.

## Related

#### Actions
Create List Item Action
Delete List Item Action
- Managing Structured Data
