
# User Management Page
The `User Management Page` allows operators and administrators to modify and
manage their own user base within their facility.

## Characteristics
- You can include a `User Management Page` in your HMI to allow
administrators to create and delete HMI users without accessing the
HELIO IDE.
- It also be used to change a user's password
in case it is forgotten.
- The Authentication & Security Settings let you control details like
applying a password policy.

## Anatomy
- Title and Icon
- List of Users

## Adding A User
- Choose a `Name` that will be displayed while the User is signed into the HMI.
- Enter a strong `Password` – make sure that you and your users choose
strong passwords to hinder unwanted access to your machine.
Finally, grant or restrict the user's access to specific parts of your HMI
by assigning different roles. For more details on how to define roles, refer
to Define HMI User Roles.

## Updating A User In Order To…
- Change the password
- Assign or remove roles

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
Access Control

#### Content
Authentication & Security Settings
