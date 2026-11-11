
# Open Page as Overlay Action
This action allows you to open a floating overlay on top of your current
Page. Within this overlay, you can display any page
from your HMI. This is possible because HELIO Pages are inherently responsive.

## Get Started With Page Overlays
To watch this embedded YouTube video, you need to accept the marketing cookies.
Watch on

## Example

### Open a Dashboard Page as Overlay
This example action opens a page called `Dashboard`. The overlay will be
centered and faded in. Its size is set to `Full`, so it will take up the
full viewport of your current page.

## Properties

### Select Page
Select the target page you want to display as an overlay.

### Type
- Docked
- Floating
The overlay will be positioned absolutely on top of the current page If
the underlying page is scrollable, the overlay will not be scrolled with
the page but float above the page.
You specify a preferred `Placement` and `Size` for an overlay. If there
is enough space, HELIO will use this preferred option. If not, the best
possible alternative will be selected for you.

### Placement
Centered
Overlay will be docked to the center of the page.
Left
Overlay will be docked to the left side of the page.
Top
Overlay will be docked to the top of the page.
Right
Overlay will be docked to the right side of the page.
Bottom
Overlay will be docked to the bottom of the page.

### Size
Full/Large
The Overlay will be displayed either fullscreen (when docking it to
the center of the screen) or in the largest possible size.
Medium
Small
Use this option when there is not a lot of information you want to
display within the overlay.
Fixed
New
Specify a fixed `Width` or `Height` in pixels or percent. You
can set both properties individually and dynamically.

### Animation
Lets you adjust the way the overlay will animate into the current page.
Choose between fading the Overlay in or sliding it in from either side.
The overlay will be floating next to the element that has initiated the
action. If the underlying page is scrollable, the overlay will be scrolled
with the page and stick to the originating element.
You specify a preferred `Placement` and `Size` for an overlay. If there
is enough space, HELIO will use this preferred option. If not, the best
possible alternative will be selected for you.

### Placement
Left
Overlay will float on the left side of the originating element.
Right
Overlay will float on the right side of the originating element.
Top
Overlay will float above the originating element.
Bottom
Overlay will float below the originating element.

### Size
Large
The overlay will be displayed in the largest possible size.
Medium
Small
Use this option when there is not a lot of information you want to
display within the overlay.
Fixed
New
Specify a fixed `Width` or `Height` in pixels or percent. You
can set both properties individually and dynamically.

## Related

#### Actions
Close Active Overlay Action
