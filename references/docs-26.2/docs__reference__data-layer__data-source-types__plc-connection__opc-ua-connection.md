
# OPC UA Connection
The `OPC UA Connection` lets you connect HELIO to PLCs that comply with the
established
OPC UA
 standard.

### Test First!
Before creating the actual connection, make sure to
validate that HELIO can connect to your PLC by using the `Test`
action.
If your test was successful, it's the right time to hit `Create Connection`.

## Basic Options

### Name
Will be used by HELIO internally to differentiate between multiple
connections.

### URL
URL of your OPC-UA endpoint. A valid URL should contain the protocol,
hostname, as well as the port.

## Establish Secure Connection
OPC-UA has a range of ways to boost connection security.
To keep communications safe over less secure networks, you'll need key pairs,
certificates, and settings that both the client and server can use to
establish trust and security between them.
Friendly Reminder: Strike the Right Balance!
Security should always have top priority in every software related project.
Period. But it must also be addressed efficiently and appropriately with
the right tools and mindset. For example:
- If you can ensure a highly secure network connection between
client and server using state-of-the-art security mechanisms such as VPNs, or
- If both the client and the server actually run on the same host and are
properly secured from the outside using state-of-the-art security
mechanisms and tools such as firewalls
Then you may not need to introduce the complexity of encryption.
Dealing with things like certificates always adds potential points of
failure such as caused by expired certificates.

### Got Questions? Let's Talk!
Contact our Professional Services specialists – we're always ready to listen.

### Security Mode
The OPC UA protocol defines several security modes that HELIO allows you
to configure.
None
Mode offering the lowest security:
- Client and server can't tell if messages have been manipulated
- Client and server can't be sure they're talking to a trusted counterpart
- Third parties might be able to read messages sent between client and server
Sign
- Client and server **can ensure that messages were not manipulated**
- Client and server **can ensure they are talking with a trusted counterpart**
- Third parties can potentially read messages that client and server exchange
Sign & Encrypt
Mode offering the highest security:
- Client and server **can ensure that messages were not manipulated**
- Client and server **can ensure they are talking with a trusted counterpart**
- **Third parties cannot read messages**  that client and server exchange

### Application Instance Certificate
The `Application Instance Certificate` is the certificate of an
individual `Application Instance` that has been installed in an
individual host, in your case your HMI project.
HELIO will set up a brand a new `Application Instance Certificate` for your
project and send it to your server on every future request.

### Did You Know?
- Different installations of one software product have different
`Application Instance Certificates`.
- It is sometimes also referred to as the client certificate as it
is the counterpart of your server's certificate.
- The default validity period for `Application Instance Certificates` generated
by HELIO is 10 years.

### Key Considerations Regarding Self-Signed Certificates
- Certificate expiration can pose a significant risk. Therefore, when
deploying HELIO to production with secure connections enabled, it is essential
to implement organizational measures that will allow you to track certificate
validity and regenerate and replace expired certificates.
- The default validity period for application instance certificates generated
by HELIO is 10 years.
- You can specify the expiration date in days by using the `Generate` button.

### Server

#### Trusted Server Certificate
This option let's your store the certificate of the server in order to
to establish trust between HELIO and the server.
Good news is that you don't have to provide it manually because HELIO
will automatically try to fetch the server's certificate.

## Authenticate
Specify how you want to authenticate against your OPC UA server. The
capabilities of your server will determine this setting, so it is important
to check them first.
An OPC-UA server can support different types of so-called `User Identity Tokens`
to implement authentication. Currently, HELIO supports the following types:
| Mode | User Token Type | HMI Users |
| **Disabled** | `Anonymous` | Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network. |
| **Username & Password** | `UserName` | Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API. |
| **Certificate** | `X509` | In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. |

## Advanced
OPC UA connections consist of several layers: a TCP Connection, a
SecureChannel, and a Session, and so on.
Use these advanced settings to adjust low level inner workings of these
layers.

### Be Warned, Young HELIOnaut!
Only change and adjust these settings if you know what you are doing.

### Timeouts & Intervals

#### Secure Channel Lifetime
The lifetime of the SecurityToken that gets requested by HELIO when opening a
SecureChannel. Specifies when HELIO will renew this token for this channel. If it's
not renewed, HELIO's messages will be rejected by the server.
In other words: how long should HELIO wait to try to renew a secure connection?

#### Requested Session Timeout
Maximum amount of time a session will remain open without activity. If HELIO does not
send a request within this interval, the server automatically terminates the session.

#### Connectivity Check Interval
If the interval is greater than 0, HELIO will run a read request against the server
each time the interval is reached.
This can help keep things stable by making sure the PLC doesn't fall
asleep or become inactive.

#### Response Timeout
The maximum time the HELIO OPC UA client will wait for a server response
before treating it as an error.

### Subscriptions
Think of `Subscriptions` as a news channels that the server uses to report news to
HELIO. So they are a key part of making your HMI feel responsive. You can then
use this basic subscription to keep track of things, like variables, on the OPC
UA server to see up-to-date values.

#### Requested Publishing Interval
This interval sets the pace at which HELIO wants
the server to send notifications for subscriptions.
- The server can negotiate this value and respond with the actual rate
that it can handle.
- The negotiated value will then be the standard sample interval for
MonitoredItems assigned to this subscription.
- If the requested value is 0, the server is required to use the fastest
supported publishing interval.

#### Requested Lifetime Count
Controls how long a subscription can exist without communication before the
server deletes it. Think of it as a "maximum patience" value.
- It's measured in multiples of the `Requested Publishing Interval`.

#### Requested Maximum Keep Alive Count
This settings controls when the server should send "empty" keep-alive
messages when there are no data changes to report.
- If no monitored items have changed for this many times, the server sends
an empty message saying "I'm still here".
- It's measured in multiples of the `Requested Publishing Interval`.

### Practical Example
Imagine you configure the following settings:
| `Publishing Interval` | `1 second` |
| `Maximum Keep Alive Count` | `3 times` |
| `Lifetime Count` | `10 times` |
This will result in:
- The server checking for changes every second
- If no changes occur for 3 seconds, it will send a keep-alive message
- If the client does not respond for 10 seconds total, the server will delete the subscription

#### Maximum Notifications per Publish
Controls how many Notifications HELIO will receive in a single publish
response.
- Setting this to 0, means there's no limit.

#### Priority
Controls how the server will handle this subscription under heavy load.
- When multiple Subscriptions are ready to send Notifications and server resources
are limited, the server will first service subscriptions with higher priority
values.
- For Subscriptions with equal priority, the server will use a round-robin
approach to ensure fair distribution of publish requests.
- If your HMI doesn't require special priority handling, just leave this value to
0, which is considered the default priority level in OPC UA.

### Monitored Items
OPC UA clients like HELIO define `MonitoredItems` to subscribe to data and
events. If we continue to apply our analogy that `Subscriptions` are news
channels, a `MonitoredItem` would be a specific topic that our HMI is
interested in that is sent through such a channel. The item to be monitored
may be any node within the OPC UA data hierarchy.

#### Sampling Interval
This interval tells the OPC UA server how often it should check for changes to a
particular value. The server tries to perform the monitoring according to your
specified schedule, then sends updates to HELIO when changes occur.
One More Time in Simple Words, Please!
**Picture This: A Connected Thermometer in Your Home**
- When you (the client) connect to the thermometer (the server) via your
computer, you can set how often it should check the temperature.
- If you set the `Sampling Interval` to 5 seconds, the thermometer will
check the value every 5 seconds.
- The server will then run all the checks according to the schedule
you've set.
- So it is the server that uses the `Sampling Interval`. You can
just sit back and wait for updates as they come in.
Now, if you want to know every little temperature detail, you need to
check very often. But if you only care about big temperature changes,
you can check less often, which saves energy.

#### Setting the Interval to `0`
According to the OPC UA specification, setting the interval to `0` instructs
the server to use its fastest practical rate. Use this setting when maximum
responsiveness is needed.

### Imporant Note
However, setting the interval to `0` does not guarantee instantaneous
updates. The actual rate depends on the capabilities of your server and
the underlying data source. The server will determine and return the
fastest interval it can support.
Additionally, please note that HELIO also throttles data updates from its
backend to the HMI running inside the browser to ensure the user interface
remains responsive. Therefore, even if you select the maximum
responsiveness between the OPC UA server and the HELIO backend, the data
updates to the actual browser client may still be less frequent.

### Use With Caution
Using `0` may significantly increase network traffic and server load. Only
utilize this setting when necessary for your application.

#### Shorter vs. Longer Intervals
When should you use which? As always, the answer depends on your use case
and requirements:
**Shorter Intervals**e.g., every 100ms

#### Pros
- More data points are collected and potentially transmitted
- Will result in near real-time visibility into rapidly changing values
- Less likely to miss brief but important events or spikes
- Better for tracking fast-moving processes or critical systems

#### Cons
- Network congestion in environments with many subscriptions
- Higher CPU/memory usage on both server and client
- Could impact other network applications
**Longer Intervals**e.g., every 10 seconds

#### Pros
- More efficient use of network resources
- Better scalability (can monitor more points with same bandwidth)
- Less processing burden on server and client

#### Cons
- Less responsive to changing conditions
- Potentially delayed awareness of critical situations

### Recommendations By Use Case
| Use Case | Sampling Interval | Sampling Rate |
| Standard automation tasks | `100-500 ms` | `10-50 Hz` |
| Process monitoring | `1-5 seconds` | `1-0.2 Hz` |
| Historical trending | `5–60 seconds` | `0.2–0.017 Hz` |

### Browsing
Browsing allows HELIO to explore and discover the structure of your OPC UA
server's address space. Think of it as navigating a file system. You can see
what folders, and variables are available. Use the settings in this section to
control how HELIO explores your OPC UA server.

#### Requested Browse Batch Size
Controls how many items HELIO will request from the OPC UA server in a
single browse operation. A larger batch size means fewer round trips to
the server but may use more memory and take longer to process. A smaller
batch size provides more responsive browsing but requires more
communication with the server.
Smaller PLCs may require reducing the batch size to ensure they can handle
browsing requests while maintaining responsiveness for other operations.
Valid range: `10–1,000`.

#### Excluded Namespace URIs

### New This Feature Was Added In HELIO  26.1.1
A list of OPC UA namespace URIs that HELIO will skip when browsing the
server's address space. Nodes that belong to an excluded namespace are
hidden from the address space tree in HELIO.
The OPC UA DI namespace (`http://opcfoundation.org/UA/DI/`) is excluded
by default. Some PLCs — including B&R controllers — implement the
OPC UA for Devices
companion specification in a way that exposes both type definitions and
device instances under the same root. This can cause duplicate nodes to
appear in the address space, which may lead to unexpected behavior.
Excluding the DI namespace prevents this.
If you need to access nodes from an excluded namespace, simply remove its
URI from this list. You can also add additional namespace URIs to exclude
if your PLC uses a layout that introduces similar issues.

## Auto Connecting
Once you establish a connection, HELIO will add it to the runtime permanently.
The runtime will automatically connect to this connection during startup and
will try to reconnect it if the connection is lost.

## Related

#### Guides
Connect & Control Your PLC
Create a Secure Connection to the ctrlX OPC-UA Server
