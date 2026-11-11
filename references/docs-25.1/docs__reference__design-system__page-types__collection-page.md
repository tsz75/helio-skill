
# Collection Page
A `Collection Page` gives operators a general idea of a big list of items and
optionally allows them to edit these items using a `Detail` view. By default,
the list is being shown as a table that you can scroll up and down, with easy
sorting and filtering of the items.
Ever Wondered Why It's Called
Collection
Instead of
Table
?
Great question! The answer is quite simple: because **a table is just one
particular way** to visualize a large list of elements. Since the core
principle of HELIO is the separation of content from style, there is a good
reason for the name `Collection page`. In future versions, HELIO will support
more options to turn lists into other things.So stay tuned or get in touch with our professionals if you have special ideas how you would like to
visualize your lists.

## Characteristics
A `Collection Page` lets you visualize a List structure. By
default, it's shown as a table. You can choose which properties of the blueprint of the
linked `Data Source` you would like to be displayed on the overview page.

## Anatomy
- Title and IconPropertyFooter

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
Page Section Conditions

#### Page header
The Page's Header will be displayed by default. Select this option to choose to hide the Page header generally or set conditions for when you want to hide it, for instance on smaller displays.
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

### Data Source

#### List
Choose the List
to be displayed on the Collection Page.

### Detail View

#### Placement
Select whether to display the `Detail View' in the center of the screen or
on either side of the screen.

#### Size
Select how large you'd like the detail view to be. Choose between full,
medium, and small.

### Filters
Add filters controls to the top bar of the page.

### Search
Add a search function to the top bar of the page.

### Sorting
Add a default sort to the collection. Choose which property to sort by and
whether to sort in ascending or descending order.

## Slots

### Properties
Choose which properties of the list you actually would like to show.Child ElementsProperty

### Detail
The Detail slot determines the page that should be displayed when an item has been selected.Child ElementsParameter PagePage Group

### Footer
Allows you to add action buttons to the footer, which will always be visible at the bottom of the page. Use this feature for significant actions that can be triggered on this page. It's perfect for the most important actions you can execute on a page.Bear in mind that the footer does take up a bit of vertical screen space, something to think about if you're creating HMIs mostly for smaller screen sizes.Child ElementsButtonFlexible SpacerFixed-Size Spacer

## Related

#### Actions
Create List Item Action
Delete List Item Action
Open Page as Overlay Action
**Content**
- List
- Data Collection
