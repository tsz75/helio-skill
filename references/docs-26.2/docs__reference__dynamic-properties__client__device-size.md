
# Device Size
Use the `Device Size` property to check the dimension of the device that the
project is currently displayed on.
The example property will return true if the current device is equal to or larger than a desktop device.

## Anatomy
- **Operator**Describes how you would like to compare the values of the device. In this example, we're using the `At least or larger than` operator.
- **Device Sizes**Select one or more device sizes that the operator should use for comparing the client's current dimensions.

## Examples

### Show Element on All Devices Except Mobile Phones
This condition will make sure to display an element on all elements larger
than mobile devices.

### Show Element on Mobile Devices
This condition will make sure to display an element if the current device
is a mobile device with relatively small dimensions.

### Show Element on Tablet Only
This condition will be truthy if the device matches the exact dimensions
of the tablet device.
