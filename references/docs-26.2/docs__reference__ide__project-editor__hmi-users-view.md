
# HMI Users View

## About
Use the `HMI Users View` to configure the HMI Users and Roles
for your project. Roles allow you to control access to pages, data variables,
and recipes within your HMI.
What's the difference between IDE & HMI Users?
Before we start, it is important to understand the difference between **IDE Users** and **HMI
Users** in HELIO. Let's have a look at their differences:
|  | IDE Users | HMI Users |
| **Who?** | You and your team will using their `IDE Users` to authenticate and sign into the HELIO IDE. | Once your HMI is deployed to the actual machine, the operators in the factory will sign in as `HMI Users`. |
| **When?** | While you are developing & engineering the HMI. | Once your HMI is deployed to the actual machine and running inside the factory. |
| **Where?** | Use the IDE Authentication to define and configure IDE Users. | Use the HMI Users View of the Project Editor to define and configure Initial HMI Users & Roles for your project. |
| **Limitations** | `IDE Users` are only used for signing into the IDE. They can NOT be used to sign into an HMI. | HMI users are only used for signing into an HMI. They can NOT be used to sign into the HELIO IDE. |
What's the difference between Project & Runtime?
**Project** — configure initial users, vendor users, and roles. These are
design-time settings that seed the runtime user database on first start.
**Runtime** — the live user database created when the project starts.
It cannot be edited from the IDE. Use `Overwrite Runtime Users` to
reset it back to the initial project state.

## Project

### Initial HMI Users
The `Initial HMI Users` are seeded into the runtime user database on the first
start of the project in a HELIO Runtime.
Once the user database has been initialized, the `Initial HMI Users` can no
longer be managed from the HELIO IDE. Any changes made to the runtime database —
such as edits or deletions via User Management Page —
will not be reflected back to this list.

### Properties of an HMI User

### Name
The unique name to identify this user. Displayed on the
User Management Page and in the `Authenticate User`
dialog (via Show Dialog Action).

### Password
The initial password for this user. It can later be changed by the user
themselves or by any user with a role that has the `Manage users` permission.

### Description
An optional description for documentation purposes.

### Roles
Assign one or more roles to this user. Roles control what pages, elements,
and data variables this user can access or interact with.

### Roles
Roles are the building blocks of access control in the HMI. Assign them to
users to:
- Restrict access to Data Variables using Restrictions
- Hide specific pages and elements using the Display Condition
- Disable elements using their `Is disabled` property
- Restrict access to recipes using the Recipes View

### Properties of a Role

### Role ID
Internal role ID that is used to uniquely identify this role.

### Display name
The name that will be displayed on the User Management Page
and the dropdown in the `Authenticate User` dialog (via Show Dialog Action).

### Vendor
Hides this role from the User Management Page so
customer administrators cannot assign it to users. See Vendor Users & Roles.

### Localize
Enable this feature to translate role names displayed on the
User Management Page or in elements using the
User Information into the active HMI language.

#### Translation key
Select the translation to be used for translating this role.

### Permissions

#### Manage users
Allows users with this role to manage HMI users via the
User Management Page.

## Vendor Users & Roles
Machine vendors can use `Vendor Users` to pre-configure service or maintenance
accounts that survive customer administration. Because vendor users are hidden
from the User Management Page, HMI administrators on the
customer side cannot delete or edit them — only the vendor can manage
them from within the IDE.
Similarly, `Vendor` roles can only be assigned to Vendor Users — customer
administrators cannot see or apply them, keeping vendor-specific access
completely separate from the customer's own user management. To create a `Vendor`
role, add a new role in the Roles section
and check the `Vendor` checkbox in the dialog.

### Properties of a Vendor User

### Name
The login name used to identify this user.

### Password
The password for this vendor user. Unlike regular HMI users, this can
only be changed from within the IDE.

### Description
An optional description for documentation purposes.

### Roles
Assign one or more roles to this user. Assign a `Vendor` role to grant
access that remains hidden from the User Management Page.

## Related

#### Guides
Access Control

#### Pages
User Management Page

#### Dynamic Properties
User Information
