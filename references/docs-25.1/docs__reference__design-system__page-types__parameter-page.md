
# Parameter Page
A `Parameter Page` allows operators to adjust and change machine parameters, and
provides structure and guidance when the list of parameters grows large.
It assists by clarifying the effects and context of the parameter settings.

## Characteristics
- A `Parameter Page` is designed to display elements that can modify various
`Parameters` of a machine.
- Unlike pages that only display data, this page is
interactive and allows for data input.
- If the parameters exceed the screen's
capacity, a scrollbar will appear.

## Anatomy
- Title and IconParameterLabelInput

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

### Parameter Groups

#### Preferred Columns
Choose how many columns of Parameter Groups you want on this Parameter
Page.

### Parameters

#### On Change
Choose whether to write the changes directly to PLC or to buffer the changes
and write to PLC with a specified action.
**Apply Immediately:** Changes will be immediately written to the PLC
without requiring an explicit confirmation step.
**Confirm With Action:** Changes will be buffered within the current page.
Use buttons to explicitly save or discard any current changes.

#### Orientation
Choose whether Parameters should be oriented horizontally or vertically.

### Side Panel

#### Size
Size that will be applied to the side panel content.

## Slots

### Side Panel
Add things like Images, Flow Maps, etc. into the Visualization slot. It'll
help operators get a better picture of what's going on. These visuals will
be displayed right next to the page content.[img:]With Trend[img:]With Data List[img:]With Flow MapChild ElementsImageData ListFlow Map ModuleGaugePie ChartRadial BarsTrendEmbedded Webview

### Parameters
This is the slot for the main content of this page. Here, you'll add the parameters, organize them into groups to make a hierarchy, and provide more information using markdown.Child ElementsParameterParameter GroupMarkdown

### Footer
Allows you to add action buttons to the footer, which will always be visible at the bottom of the page. Use this feature for significant actions that can be triggered on this page. It's perfect for the most important actions you can execute on a page.Bear in mind that the footer does take up a bit of vertical screen space, something to think about if you're creating HMIs mostly for smaller screen sizes.Child ElementsButtonFlexible SpacerFixed-Size Spacer
