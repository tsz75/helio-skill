
# Configure HELIO HMIs Using URL Parameters
HELIO can adjust specific features to match your hardware requirements. It's
often challenging to determine if a web app is running on a touch-based device
or a Linux-based HMI panel, which may not have all the features of iOS or
Android, such as on-screen keyboards.
In such cases, the simplest solution is usually to modify certain features by
adding URL parameters to your HMI's URL.

### `?skipAnimations=true`
You can enable or disable animations as required. This feature is especially
useful if you're using HELIO on a low-end device. Most transitions, like those
for displaying and hiding dialogs, will then be disabled.

### `?enableOSK=true`
This parameter allows you to manually enable the on-screen keyboard. This is
useful when HELIO's auto-detection does not perform as expected on your system.

### Use "Run With Options" to Set URL Parameters
You don't have to set these URL parameters manually!
The Home Page of the
HELIO IDE provides a "Run with Options" action for
each of your projects.

## Related

#### Help
What are URL Parameters and How can I use them?
Why doesn't HELIO pop up the on-screen keyboard on my touch panel?
