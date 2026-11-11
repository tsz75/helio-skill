
# Embedded Webview

## About
Integrates third party web applications into HELIO. It
basically renders an iframe that you can point to a URL of another web
application running on your target device or inside somewhere inside your
corporate network.The element will adapt its size to its parent container and resize the iFrame
element accordingly.
**Only Embed Content From Trusted Sources!**Embedding code created by a third party always comes with security risks,
which can open doors for attackers. While iFrames can now be sandboxed quite
effectively, it is still important to ensure that you trust the source of the
web application you are about to embed.
**Make Sure Embedding Is Allowed**In order to be able to embed a page from another domain or host, you need to
ensure that the page has set its
Content-Security-Policy
to allow embedding using the HTML meta tag or HTTP headers.

## Element Properties
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

### General

#### Target
**Same Host**Relative URL without the hostname that points to the same host.**Different Host** Absolute URL that includes the hostname. Use it to navigate to web-apps running on different hosts.

## Related

#### Elements
Embedded Webview Page
Dashboard Widget
