
# Image

## About
Allows you to display an image on your HMI. Use this to
provide context to a Parameter Page.**Example**: In this example, we have uploaded a technical drawing and made sure that all
areas of the image will always be visible by using the **`Fit`** property.

## Properties

### General

### Image Upload

#### Image
The asset that should be used for this image.

### Dynamic URL

#### URL
The URL at which to find the image.

#### Image fit
**Show entire image**: The image will keep its aspect ratio but will be resized to fit
within the given dimensions. It will never be clipped.
**Cover available space**The image maintains its aspect ratio and fills
the given dimension. However, it can be clipped to fit.

#### Place markers
You can place markers on the image to provide visual cues or actions to
the user. This can be done by adding a clicking the `Expand Markers`.
Markers can contain a labels.[img:]'Show entire image' is requiredPlacing Markers is only possible when the image will not be clipped. So
make sure to set the `Fit` property to `Default`.

### Display Condition

#### Condition
Determines whether an element or page should be visible or hidden to the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

## Related

#### Elements
Parameter Page
Dashboard Widget
