
# Message Page
The `Message Page` lists active and archived messages and allows operators to
view the details of each message.

## Characteristics
- The `Message Page` displays the list of active messages as well as the
archived messages.
- Using the Button Group in the header of the page, operators can easily
switch between these two collections.

### Active Messages
Will display the
Active Messages collection
and provide controls to filter them by type and date.

### Archived Messages
Will display the
Message Archive collection
and and provide controls to filter them by type and date.

### Message Detail
When operators click one of the messages, they will be taken to the details
of that message.

## Properties

### General

#### Title
Will be displayed in the navigation and the page header.

#### Page reference
This optional property lets you define unique short code that is human readable and helps to refer to that page without specifying its actual name. This is helpful especially in multilingual environments because
- It helps your Support-Team to quickly navigate users.
- It can be picked up by the product manual and documentation.
Example reference in main navigation
Example reference in the page title

#### Icon
This icon will be displayed in the main navigation, the page header, and inside an embedded navigation of a `Page Group`.

### Navigation

#### Show/Hide Page
Each page is automatically displayed in the navigation. If you do not want the page to be visible in the navigation, select `Hide page`. The page will remain reachable and can be opened as an overlay or navigated to directly.

### Page Section Conditions

#### Page header
The Page's Header will be displayed by default. Select this option to choose to hide the Page header generally or set conditions for when you want to hide it, for instance on smaller displays.

### Default View
Select which view to display by default: active or archived messages.
Display Condition

#### Condition
The
Display Condition
controls the visibility of an element or page for the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

## Related

#### Guides
Messaging & Alarming

#### Dynamic Properties
Active Message Metadata
Number of Active Messages

#### Content
Messaging Settings
