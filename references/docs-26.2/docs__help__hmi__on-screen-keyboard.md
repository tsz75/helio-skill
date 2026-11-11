
# Why doesn't HELIO pop up the on-screen keyboard on my touch panel?

## Symptom
So far, you've tested your HMI with your developer machine, primarily using
the mouse due to your desktop computer setup. Now, you're planning to test the
HMI on the actual device it will be running on, typically a touch screen or
tablet.
However, HELIO doesn't function as expected on the device: it fails to open the
on-screen keyboard when an input area has been touched.

## Explanation
- Browsers on Touch Panels are not always configured to correctly behave as
a touch device.
- Manufacturer of Industrial Touch Hardware sometimes lack the ability to setup
browsers correctly.

## Solution
- Contact your Hardware Partner. The Touch Panel might lack other configurations
as well.
- If the correct setup isn't possible you can use the `?enableOSK=true` URL parameter to activate the keyboard manually.
See Configure HELIO HMIs Using URL Parameters for more details.

## Related

#### Reference
Configure HELIO HMIs Using URL Parameters

#### Help
What are URL Parameters and How can I use them?
