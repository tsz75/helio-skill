
# How to run my HMI on a touch panel using a browser in fullscreen mode?

## 1. Install a Chromium-Based Browser
In order to run your HMI you have to install a Chromium-Based Browser. For a
list of supported browsers see
Minimum System Requirements.

## 2. Ensure that Touch Events are Working Correctly
Often, a panel's browser may not be configured correctly, which can cause it to
respond incorrectly to touch events. If you are unable to configure the browser
or operating system to properly handle touch events, but still want to use the
On-Screen Keyboard on certain devices, use the `enableOSK` URL-Parameter.
For more information, see `?enableOSK=true` in
Configure HELIO HMIs Using URL Parameters.

## 3. Enable Kiosk Mode
Both Chrome and Edge support a feature called Kiosk Mode, which enables you to
run the browser in fullscreen and disable additional features that operators
should not have access to.
Google Chrome
- Chrome Flags
- How to set flags from the command line?
- List Of Chromium Command Line Switches
See `--kiosk` flag…
Microsoft Edge
- Configure Microsoft Edge kiosk
mode

## 4. Launch HELIO (in Kiosk Mode) After Boot
For example on Windows, create a batch file that launches your HMI in your
preferred browser like this:
```
msedge.exe --kiosk http://localhost:8512/project/<Name-Of-Your-HMI-Project>/run
--edge-kiosk-type=fullscreen
```

## Tools & Helpers
These test pages can help you determine if the browser on your target device
is correctly handling touch events:
HELIO-touch-feature-detection.zip
