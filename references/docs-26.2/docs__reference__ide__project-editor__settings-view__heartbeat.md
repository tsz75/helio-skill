
# Heartbeat Settings
This section enables you to define actions that the client will repeatedly
execute. Use this feature to notify data sources about the client's status and
to detect when the client is no longer active.

## Use Cases
Given the versatility of this functionality, we would like to offer some
guidance on best practices to ensure optimal use of the tool.

#### Do
- Send heartbeats to your PLC.
- Use heartbeats to implement a "dead man's switch" to ensure that the HMI
frontend application is still active.

#### Don't!
- Maintain synchronization of client-side state, such as the active
language, with the backend by sending updates at a very high frequency.

## Sections

### Enable HMI Client Heartbeat
Specify an action that each HMI client should execute repeatedly. In this
example a PLC data method will be executed every 5 seconds.

### No Heartbeat During Inactivity
Since this action is executed client-side using JavaScript it will not
be executed by the browser if the tab or the window is inactive or running
in the background.

### Handle With Care
Remember that browsers are single-threaded. Specify low values for the
`Every` setting with extreme caution. Doing so will cause the browser to
be excessively busy, which will negatively impact the performance of
your HMI.

## Related

#### Actions
Write Data Variable Action
Call Data Method Action
