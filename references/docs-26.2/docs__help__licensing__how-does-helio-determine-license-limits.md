
# How does HELIO determine the license limits?
HELIO considers four factors when calculating the limits for the active license
in your Runtime:

#### Number of projects
This refers to the total number of projects you can create using the HELIO IDE.

#### Number of data sources
The number of data sources, or PLCs, that your runtime can connect to using the
Data View of the Project Editor.

#### What's included in the count?
- Each PLC Connection will be counted as one.

#### What's not included in the count?
- Data Collections will not be counted. You
can have as many collections as you like.

#### Number of variables
When creating your HMI and defining its data model using the
Data View of the
Project Editor,
it is important to consider keep two limitations associated with runtime
licenses in mind. This maximum number is available for each project of the
runtime. So the number of variables do not add up across projects. Each projects
starts with a fresh count.

#### What's included in the count?
- Each `HMI Variable` in you project will be counted as one.
- Each `HMI Variable` that are part of a `List Item Blueprint` will be counted as one.
- Each `HMI Data Method` will be considered as one.

#### What's not included in the count?
- `Lists` will not be counted.
  - Only the variables in the `List Item Blueprint` will be counted as one.
  - The actual length of the list is not important for the calculation.
- `Directories` will not be counted.
- `PLC Variables` will not be counted.

#### Number of connected clients
Every browser that connects to your HELIO Runtime is considered a client. For
example the browser on the touch panel right next to the machine. But also the
browser on the PC in the shift supervisor's office.
