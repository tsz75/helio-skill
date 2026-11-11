
# Dashboard Page
A `Dashboard Page` provides operators with an overview of the machine performance, even from
a distance and is therefore not scrollable but rather provides an absolute
positioned layout. It helps users make informed decisions based on the
machine's current state.

## Characteristics
- A `Dashboard Page` mostly provides key figures and states of the machine.
- This overview allows users to monitor and
manage the machine's performance and make informed decisions.
- Dashboards provide vital information in a structured and easy-to-understand
format. This layout helps operators rapidly recognize issues and take the
required steps to maximize machine performance and minimize downtime.
- A dashboard is not scrollable and should, therefore, contain only a limited
number of widgets.

## Anatomy
- Title and IconDashboard WidgetTitleContent

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

### Custom Layout
Declare a custom Layout for your `Dashboard Page`. This Layout will be used
whenever possible, otherwise HELIO will use the Magic Layout as a fallback. Be
aware that this feature is still in `Beta`, so please use it with caution!

## Slots

### Widgets
Add elements to this slot to fill the dashboard with content. Each widget
can display icon, title and a main action.Child ElementsCollection WidgetDashboard Widget

### Footer
Allows you to add action buttons to the footer, which will always be visible at the bottom of the page. Use this feature for significant actions that can be triggered on this page. It's perfect for the most important actions you can execute on a page.Bear in mind that the footer does take up a bit of vertical screen space, something to think about if you're creating HMIs mostly for smaller screen sizes.Child ElementsButtonFlexible SpacerFixed-Size Spacer

## Related

#### Elements
Linear Flow
Linear Flow Module

#### Actions
Open Page as Overlay Action
