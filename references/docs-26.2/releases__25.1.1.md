
# HELIO 25.1.1
March 20, 2025
·
3 min read
·
Tagged with
- # patch
Philipp Kruse
HELIO CTO
Matthias Wagler
HELIO Product Owner
“Claiming that software is bug-free is simply not realistic. Let's be honest:
there will be bugs. What matters is how we deal with them. Do we get frustrated,
or do we take the opportunity to improve our product and move forward?
We as a team are committed to continuous improvement and put a lot of work
into our architecture and infrastructure to be able to do just that: to keep
making HELIO better, one step at a time.”
In this spirit, we're releasing HELIO 25.1.1 - our second patch
release of the year and the first patch for HELIO
25.1, that we've released a month
ago.

## Download HELIO
Grab the Latest Version
HELIO
26.2 (stable)

## Get Started
- Take the Quick Tour
- Start HELIO
- Build your first HMI

## Changelog
**Improved**
IDE
OPC-UA Connection
HELIO-1414 Improved error messages and feedback during the
connection setup process. We now make sure to include the underlying OPC UA
error codes to make debugging easier.
HELIO-1425 The default validity period for **Application
Instance Certificates** has been increased to 10 years.
Read more: OPC-UA Connection
Help Button
We've been improving our support system behind the scenes, and we're going
all in on using the support email as the way to contact our team.
That's why we've removed the built-in support widget in favor of our support
email. It's less friction for you, since you don't have to learn a new
interface, and it makes HELIO less dependent on an internet connection.
Read more: Help Button
Runtime
MQTT Connection
HELIO-1413 Improved handling of disconnected
PLCs
clients when utilizing **Last Will and Testament** messages.
HMI
Image Page With Panels
HELIO-1403 Resolved an issue that resulted in disabling
**Overlay Panels** when **Markers** were added to the underlying
background image.
