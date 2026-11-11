
# Embedded Webview Page
An `Embedded Webview Page` enables the embedding of custom and third-party web applications.

## Characteristics
- Think of it like a picture frame (an iframe, to be exact) that you can point
to any other web app URL, either running on your target device or within
your corporate network.
- The page and the iframe are automatically adjusted to fit their parent
container.
**Only Embed Content From Trusted Sources!**Embedding code created by a third party always comes with security risks,
which can open doors for attackers. While iframes can now be sandboxed quite
effectively, it is still important to ensure that you trust the source of the
web application you are about to embed.
**Make Sure Embedding Is Allowed**In order to be able to embed a page from another domain or host, you need to
ensure that the page has set its
Content-Security-Policy
to allow embedding using the HTML meta tag or HTTP headers.

## Anatomy
- Title and IconEmbedded iframe

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

### Webview Content

#### Target
**Same Host**Relative URL without the hostname that points to the same host.**Different Host**Absolute URL that includes the hostname. Use it to navigate to web-apps running on different hosts.
