
# Navigate to URL Action
This action enables operators to navigate away from the current
Page to a
different URL.
The navigation triggered by this action will be added to the history stack
of your browser. Therefore, using the back button will take you back to
the original page.

## URLs on Different Hosts
Use this option if you want to navigate to a web app running on different hosts
within your local network.

#### URL
A valid URL with protocol, host and path name.

## URLs on the Same Host
Use this option if you want to navigate to a web app running on the same
host as the HELIO runtime.

#### Path
You have the option to provide a path that can be either static or dynamic.

#### Port
Specify the port that the web app uses.
If you want to navigate to a HELIO URL make sure to use the
default HELIO port `8512`.

#### Protocol
Is the URL served over HTTP or HTTPS? By default, HELIO is served over
HTTP. This is acceptable for local HMIs that are not exposed to internal
or external networks.
If you're interested in serving HELIO or other applications over HTTPS, a recommended best practice is to use a proxy server in front of application servers like HELIO.
In this scenario, you may want to connect to other web applications behind this proxy using the HTTPS protocol.

## Related

#### Pages
Navigate to Page Action
