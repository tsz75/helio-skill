
# Recipe Management Page
Allow operators to save and load recipes within the HMI.

## Characteristics
You can include a `Recipe Management Page` in your HMI to allow operators
to view, save and load predefined recipes.These recipes will help operators work faster and more efficient.

## Anatomy
- Title and IconList of RecipesSave or Override a Recipe
- Recipe TitleRecipe DetailRecipe Controls

## Page Properties
General

#### Title
Will be displayed in the navigation and the page header.

#### Page reference
This optional property lets you define unique short code that is human readable and helps to refer to that page without specifying its actual name. This is helpful especially in multilingual environments becauseIt helps your Support-Team to quickly navigate users.It can be picked up by the product manual and documentation.[img:]Example reference in main navigation[img:]Example reference in the page title

#### Icon
This icon will be displayed in the main navigation, the page header, and inside an embedded navigation of a  `Page Group`.
Main Navigation

#### Show/Hide Page
Each page is automatically displayed in the main navigation. If you do not want the page to be visible in the main navigation, select `Hide page`. The page will remain reachable and can be opened as an overlay or navigated to directly.
Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

## Specific Properties

### Recipe Types
Choose one of the predefined Recipe Types to be displayed within this
`Recipe Management Page`. Only one Recipe Type can be displayed on each
`Recipe Management Page`.

## Related

#### Guides
Recipe Management

#### Actions
Save as Recipe Action
