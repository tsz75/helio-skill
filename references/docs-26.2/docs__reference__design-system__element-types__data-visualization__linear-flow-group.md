
# Linear Flow Group

## About
A group of modules inside of a Linear Flow.

## Anatomy
- Group Title
- Group Children

## Guiding Design Principles of the Linear Flow
**Clarity and guidance** over physical accuracy
In many HMIs, we see a detailed display of machines with many options. While
this may work well for the machine manufacturer, it may not be the best way
to view and operate a machine. Because to operators the machine is mostly a
black box. Seeing all the details of the inner workings can be overwhelming.
Operators usually only need the most important information about the machine
modules they care about.
That’s why the Linear Flow gives you an overview of the most important
elements of a machine, or a data flow with the most important
**Let horizontal swiping and scroll snapping work their magic** – no need to
worry if it doesn't fit correctly
Getting this linear view to fit perfectly on every single screen size out
there? Trust us, it's more trouble than it's worth. Instead, let it expand
to meet the full width at first. If it gets too wide, no worries - users can
just swipe through it. It works like a charm, especially on touch devices.
Plus, HELIO ensures everything snaps into place just right.
**Read only first** –  manipulation can be handled in overlays
Adding interactive elements to a detailed view like this will only make it
more visually cluttered. To simplify the view, highlight only the most
important figures and statuses. Place any interactive elements on separate
pages that can be shown as a layer over the main content using the Open Page as Overlay Action

## Properties

### General

#### Title
The title of the linear flow group.

#### On click
Triggered once the user clicks/touches the title of the linear flow group.
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

#### Elements
Linear Flow
