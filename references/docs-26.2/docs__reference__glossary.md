
# Glossary
When you start digging into HELIO, you'll probably encounter some
unfamiliar terms and phrases along the way. To help you on your journey,
we've defined some of the most common GraphQL vocabulary here in this handy
cheat sheet.

### Action
What HELIO does in response to events that occur in the HMI, like a button click, is determined by actions. HELIO can execute many different actions in these situations, such as:
- Writing to a data variable
- Opening another page in an overlay
- Navigating to a different page
Learn more…

### Actions
Actions
let you control how HELIO will react to an event For example, when a button is pressed. There are many different actions, such as:
- Writing to a data variable
- Opening another page in an overlay
- Navigating to a different page
Learn more…

### CollectionPage
A Collection Page allows you to visualize a  List of items. By default, it is rendered as a vertically scrollable table. You can choose which properties from the linked `Data Source` blueprint will be displayed on this overview page.
→ Learn more…

### Component
A HELIO Component allows you to encapsulate and reuse a parts of your HMI. Additionally each component is able to maintain its own piece of local & temporary state using  Component Property
→ Learn more…

### Dashboard Page
A Dashboard provides a quick overview of the most important key figures and states of an industrial machine. This allows operators to easily monitor and manage the machine's performance and make informed decisions based on the data presented. It is also a handy tool that lets operators peek at how the machine is doing, even from a distance.
→ Learn more…

### HELIO Data Layer
HELIO is equipped with a Data Layer that allows you to connect to different types of data sources and abstract their data in a unified way within your project.
→ Learn more…

### HELIO Data Directory
The HELIO Data Directory is the primary location where the runtime stores all of its data, including project files, user databases, and basic runtime configuration.
→ Learn more…

### Display Conditions
The Display Condition is a feature that every page and every element in HELIO provides. It lets you control whether something is visible to your operators or if it stays out of the way.
→ Learn more…

### Display Condition
The Display Condition is a feature that every page and every element in HELIO provides. It lets you control whether something is visible to your operators or if it stays out of the way.
→ Learn more…

### Dynamic Property
This property is a special one known as a Dynamic Property, which allows you to change its type.
→ Learn more…

### Dynamic Property
Pages and Elements come with properties that allow you to control their visual representation and their behavior. Some properties have an additional secret superpower: you can change their types. These properties are called Dynamic Properties.
→ Learn more…

### Dynamic Properties
Pages and Elements come with properties that allow you to control their visual representation and their behavior. Some properties have an additional secret superpower: you can change their types. These properties are called Dynamic Properties.
→ Learn more…

### Element
Elements are the basic building blocks that comprise your HMI. They can be thought of as the Lego blocks that you use to assemble your HMI.
→ Learn more…

### Elements
Elements are the basic building blocks that comprise your HMI. They can be thought of as the Lego blocks that you use to assemble your HMI.
→ Learn more…

### ETC
Coordinated Universal Time
(UTC) is the primary time standard globally used to regulate clocks and time.
→
Source: Wikipedia

### Extension
An extension is a software package developed using the HELIO SDK. It can be installed in HELIO projects to enhance their built-in functionality. Extensions usually bundle multiple Elements, Actions and Dynamic Property Types together so that they can be reused across your HELIO projects.
→ Learn more…

### Extensions
An extension is a software package developed using the HELIO SDK. It can be installed in HELIO projects to enhance their built-in functionality. Extensions usually bundle multiple Elements, Actions and Dynamic Property Types together so that they can be reused across your HELIO projects.
→ Learn more…

### FDA 21 CFR Part 11
The FDA 21 CFR Part 11 is a regulation created by the U.S. Food and Drug Administration (FDA) that sets standards for electronic records and electronic signatures.
It makes sure that they're trustworthy, reliable, and equivalent to paper records. It is designed for industries such as pharmaceuticals and healthcare to ensure that electronic data is accurate, secure, and traceable.
The regulation includes requirements for access controls, audit trails, and system validation.

### HMI
Abbreviation for
Human-Machine Interface
that is mainly used to refer to user interfaces for industrial machines. HMIs allow operators to interact with a machine, monitor its status, and control functionality.

### HMIs
Abbreviation for
Human-Machine Interface
that is mainly used to refer to user interfaces for industrial machines. HMIs allow operators to interact with a machine, monitor its status, and control functionality.

### HMI Variable
The HMI variables in your project serve as your link to the data in your PLC. You can create them by importing variable definitions from your PLC.
All clients connected to a HELIO Runtime can access these variables to visualize and manipulate data from your PLC.
→ Learn more…

### HELIO IDE
The HELIO Integrated Development Environment is the graphical environment where users design and test their HMIs. It features a visual interface with drag-and-drop, a library of elements, icons, and real-time testing. No coding skills are required to create sophisticated HMIs.
→ Learn more…

### IPC
An Industrial PC is a computer designed for use in industrial settings, such as manufacturing, with a form factor somewhere between a  DIN rail device  and a server rack. Industrial PCs are built to higher standards of dependability and precision, and they usually cost more than consumer electronics.
→ Learn more…

### Message Code
The Message Code is the unique identifier of a  Message in HELIO. These codes are frequently utilized in supplemental materials, such as documentation, to identify errors or messages.
→ Learn more…

### Namespace
Namespaces help to solve naming conflicts between the elements found in Extensions. A namespace is basically a unique prefix that helps keep your code organized and conflict-free. Think of it like putting your extension’s elements into their own folder, so they don’t accidentally clash with anything else in your HELIO project.
Learn more…

### Namespaces
Namespaces help to solve naming conflicts between the elements found in Extensions. A namespace is basically a unique prefix that helps keep your code organized and conflict-free. Think of it like putting your extension’s elements into their own folder, so they don’t accidentally clash with anything else in your HELIO project.
Learn more…

### UX
The
User Experience
is how a user interacts with and experiences a product, system or service. It includes a person's perceptions of utility, ease of use, and efficiency.

### OEE
Overall equipment effectiveness (OEE) is a measure of how well a manufacturing operation is utilized.
→  Source: Wikipedia

### OPC-UA
OPC Unified Architecture (OPC UA) is a cross-platform and open-source standard for data exchange from sensors to cloud applications.
→  Source: Wikipedia

### Overlay
An Overlay is a container that floats in front of the current page. It is usually used to accomplish a sub-task without loosing the context of the current page
→ Learn more…

### Page
A Page refers to a specific screen in your HMI. Every  Page Type in HELIO serves a particular purpose.
- Pages & Overlays
- Page Types

### Pages
A Page refers to a specific screen in your HMI. Every  Page Type in HELIO serves a particular purpose.
- Pages & Overlays
- Page Types

### Page Types
HELIO comes with a variety of Page Types, with each type serving a specific purpose.
- Learn more…
- Page Types

### Parameter Page
A Parameter Page is designed to display elements that can modify various 'Parameters' of a machine. Unlike data-displaying pages, this page is interactive, enabling data input. If there are more parameters than can fit on the current screen, a scrollbar will become visible.
→ Learn more…

### Placeholders
You may often need to work on an HMI without access to the actual PLC. However, you still want to be able to view the pages and elements of your HMI as if they were populated with data. That's why HELIO allows you to set placeholder for each HMI variable.
→ Learn more…

### Placeholder Mode
HELIO offers a real-time preview of your HMI, allowing you to see the effects of your configuration as you adjust it. When Placeholder Mode is active in this preview, HELIO does not connect to data sources. Instead, it displays the placeholder values that you have defined for each of HMI variables.
→ Learn more…

### PLC
A Programmable Logic Controller is a special type of computer that helps control industrial machinery. It gets information from motors, sensors and other devices, processes this information, and triggers actions based on pre-determined rules.
Usually, a PLC offers an API that is used by Human-Machine Interfaces to show data or carry out commands.

### Project Editor
The Project Editor is the tool you use to create, develop and configure your HMI projects. It contains, different views for changing aspects of your project.
→ Learn more…

### Project Template
HELIO Project Templates are the perfect blueprints for anyone starting a new project! They're easy to use and ready to help you succeed!
→ Learn more…

### Project Templates
HELIO Project Templates are the perfect blueprints for anyone starting a new project! They're easy to use and ready to help you succeed!
→ Learn more…

### Pointer
HELIO supports a variety of input and pointing devices, including fingers, a mouse, a pen, and a stylus. Therefore, whenever the term
Pointer
is used, it refers to all of these devices.

### Properties Panel
Panel on the right side of the Project Editor  that allows you to adjust the properties of the element that is currently selected in the editor.
→ Learn more…

### Props Schema
A Props Schema lets you configure the API for whatever you build with the SDK — like custom Elements, custom Actions, and custom Dynamic Properties. It lets you control what properties your users can configure in the IDE.
Learn more…

### Props Schemas
A Props Schema lets you configure the API for whatever you build with the SDK — like custom Elements, custom Actions, and custom Dynamic Properties. It lets you control what properties your users can configure in the IDE.
Learn more…

### React
React is a JavaScript library that lets you build user interfaces out of individual pieces called components.
HELIO is built using React. Its foundational yet strikingly simple component model is one of the key elements that has enabled us to develop such a complex product.
→ Learn more…

### Recipe
A Recipe is a stored set of parameter values that can be loaded onto the PLC all at once. It's a saved instance of a  Recipe Type, which defines which parameters it contains.
→ Learn more…

### Recipes
A Recipe is a stored set of parameter values that can be loaded onto the PLC all at once. It's a saved instance of a  Recipe Type, which defines which parameters it contains.
→ Learn more…

### Recipe Type
A Recipe Type groups the parameters that make up a recipe — which PLC variables belong together. Each  Recipe is a saved instance of a Recipe Type, with its own values for those parameters.
→ Learn more…

### Recipe Types
A Recipe Type groups the parameters that make up a recipe — which PLC variables belong together. Each  Recipe is a saved instance of a Recipe Type, with its own values for those parameters.
→ Learn more…

### HELIO Runtime
HELIO ships in the form of a small and efficient executable web server – the so-called HELIO Runtime. It is the only piece of software that needs to run on your target devices or on your development PC. This server also serves your HMIs as well as the IDE as web applications, so any computer or device with a browser can access them.
→ Learn more…

### HELIO Runtime Directory
The
Runtime Directory
is the folder obtained by downloading and extracting a version of the HELIO Runtime. It includes the HELIO executable and setup directories needed for startup. You can have
Multiple Runtime Versions
on one computer.

### Seats
HELIO licenses are linked to computers or machines. Each computer or machine is counted as a seat. A license can only be used on a certain number of seats.
- Developer and Runtime License are restricted to 1 seat each.
- The Trial License can be activated on up to 5 seats, allowing you to evaluate HELIO with your team.

### Trait
A trait is an important building block of the HELIO SDK. You use Traits to define the type and capabilities of your custom elements. They tell HELIO where and how your element can be used.
Learn more…

### Traits
A trait is an important building block of the HELIO SDK. You use Traits to define the type and capabilities of your custom elements. They tell HELIO where and how your element can be used.
Learn more…

### HELIO SDK
HELIO's no-code approach allows your team to build powerful HMIs without programming. However, Machines often have unique requirements that extend beyond standard toolbox capabilities.
The HELIO Software Development Kit provides developers with the necessary tools to expand and enhance HELIO's standard functionality.
Learn more…

### HELIO HTTP API
In some cases, you may want to interact with HELIO from external systems or automate certain tasks instead of using the HELIO IDE user interface. The HELIO HTTP API provides an easy way to control and communicate with HELIO via HTTP.
Learn More

### SVG
Scalable Vector Graphics (SVG) is an XML-based vector image format for defining two-dimensional graphics, having support for interactivity and animation.
Learn More

### Translation Manager
App that allows you to view, edit, export, and import all translations across your projects.

### Translation Key
A translation is uniquely identified in a HELIO Runtime using its TranslationKey. This key is the unique identifier of this translation.
Learn More

### Trial License
A HELIO Trial License is a temporary license that lets you try out HELIO. It gives you full access to all the features of HELIO so you can see if it's right for you. You can easily obtain a trial license by filling out the
HELIO Test Form
.

### URL Parameter
Usually, a parameter is something that a user can provide to an application. Web apps are programs that run in your browser and are accessed using a URL. You can use the URL of HELIO HMIs to provide parameters to them and to adjust and change their behavior.
→
Learn More

### URL Parameters
Usually, a parameter is something that a user can provide to an application. Web apps are programs that run in your browser and are accessed using a URL. You can use the URL of HELIO HMIs to provide parameters to them and to adjust and change their behavior.
→
Learn More

### UTC
Coordinated Universal Time
(UTC) is the primary time standard globally used to regulate clocks and time.
→
Source: Wikipedia

### UTC+01:00
This time offset is used in: Central European Time, West Africa Time, etc.
→
Source: Wikipedia
