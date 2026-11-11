
# Recipe Management Page
Allows operators to view, load, duplicate, rename, and edit
Recipes of one particular
Recipe Type within the HMI.

## Characteristics
You can include a `Recipe Management Page` in your HMI to allow operators
to view, save and load predefined Recipes.
These recipes will help operators work faster and more efficiently.

## Anatomy
- Title and Icon
- List of Recipes
- Save or Override a Recipe
- Recipe Title
- Recipe Detail
- Recipe Controls

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

### Recipe Types
Choose one of the predefined Recipe Types to be displayed within this
`Recipe Management Page`. Only one type can be displayed on each
`Recipe Management Page`.

### Parameter Table

#### Enable
Enabling this option will add an additional action `Edit Recipe`
to the recipe detail view. It allows users to view all of a recipe's
parameters in a table format and edit them.
See Using the Parameter Table
for a full walkthrough.
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
Recipe Management

#### Actions
Save as Recipe Action
