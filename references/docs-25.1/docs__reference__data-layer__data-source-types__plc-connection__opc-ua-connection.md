
# OPC UA Connection
←
→
The `OPC UA Connection` lets you connect HELIO to PLCs that comply with the
established
OPC UA
 standard.

### Test First!
Before creating the actual connection, make sure to
validate that HELIO can connect to your PLC by using the `Test`
action.If your test was successful, it's the right time to hit `Create Connection`.

## Basic Options

### Name
Will be used by HELIO internally to differentiate between multiple
connections.

### URL
URL of your OPC-UA endpoint. A valid URL should contain the protocol,
hostname, as well as the port.

## Establish Secure Connection
←
→
OPC-UA has a range of ways to boost connection security.
To keep communications safe over less secure networks, you'll need key pairs,
certificates, and settings that both the client and server can use to
establish trust and security between them.Friendly Reminder: Strike the Right Balance!Security should always have top priority in every software related project.
Period. But it must also be addressed efficiently and appropriately with
the right tools and mindset. For example:

If you can ensure a highly secure network connection between
client and server using state-of-the-art security mechanisms such as VPNs, or


If both the client and the server actually run on the same host and are
properly secured from the outside using state-of-the-art security
mechanisms and tools such as firewalls

Then you may not need to introduce the complexity of encryption.
Dealing with things like certificates always adds potential points of
failure such as caused by expired certificates.Got Questions? Let's Talk!Contact our Professional Services specialists – we're always ready to listen.

### Security Mode
The OPC-UA protocol defines several security modes that HELIO allows you
to configure.
None
Mode offering the lowest security:
Client and server can't tell if messages have been manipulated
Client and server can't be sure they're talking to a trusted counterpart
Third parties might be able to read messages sent between client and server
Sign
- Client and server **can ensure that messages were not manipulated**
- Client and server **can ensure they are talking with a trusted counterpart**
- Third parties can potentially read messages that client and server exchange
Sign & Encrypt
Mode offering the highest security:
Client and server **can ensure that messages were not manipulated**
Client and server **can ensure they are talking with a trusted counterpart**
**Third parties cannot read messages**  that client and server exchange

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
←
→
Specify how you want to authenticate against your OPC UA server. The
capabilities of your server will determine this setting, so it is important
to check them first.
An OPC-UA server can support different types of so-called `User Identity Tokens`
to implement authentication. Currently, HELIO supports the following types:
| ModeUser Token TypeHMI Users**Disabled**`Anonymous`Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | User Token TypeHMI Users**Disabled**`Anonymous`Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | HMI Users**Disabled**`Anonymous`Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | **Disabled**`Anonymous`Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `Anonymous`Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | **Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | **Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. |
| **Disabled**`Anonymous`Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `Anonymous`Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | Using this setting indicates that your OPC UA Server does not require any credentials. This approach is suitable as long as both HELIO and the OPC UA server are running on the same host and you have implemented the necessary security measures to ensure that the OPC UA server is not accessible from other devices on your network.**Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | **Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | **Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. |
| **Username & Password**`UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `UserName`Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | Choose this mode if your server requires authentication using a `Username` and a `Password` in order to prevent unauthorized access to your PLC's API.**Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | **Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. |
| **Certificate**`X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | `X509`In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. | In this case HELIO will use its `Application Instance Certificate` for authentication as well. If you chose this option you need to download the certificate and store it in the trusted client certificates on your server. How this is actually done depends on the type of OPC UA server you are using. |

## Auto Connecting
Once you establish a connection, HELIO will add it to the runtime permanently.
The runtime will automatically connect to this connection during startup and
will try to reconnect it if the connection is lost.

### Related

#### Guides
Connect & Control Your PLC
Create a Secure Connection to the ctrlX OPC-UA Server
