# Connecting HELIO to the ctrlX OPC UA server

OPC UA is the supported route to ctrlX data; native Data Layer support is only "on the roadmap" in the docs (25.1 and 26.2). The official guide is `docs-25.1/docs__guides__editions__ctrlx-os__get-started-on-ctrlx__setup-secure-opc-ua-connection.md`.

## What the server accepts (tested)

- Anonymous: rejected (`BadIdentityTokenRejected`).
- Username and password with `securityMode: None`: rejected the same way.
- `SignAndEncrypt` + `Basic256Sha256` + username and password: works.

## URL

`opc.tcp://localhost:4840` when the Runtime is on the ctrlX. Use `opc.tcp://<ctrlX-IP>:4840` from a dev PC. Don't use the `ctrlX-CORE` hostname the server displays; the docs say it causes problems.

## Steps through the API

Sign in first. The IDE does the same steps with its Fetch, Test and Create Connection buttons.

1. Create a client certificate. Keep the private key out of logs and files you'd share.

```graphql
mutation { opcuaCreateCertificateV2(commonName:"HELIO", countryName:null, expiresInDays:3650, keySizeBits:null,
  organization:null, sanDns:null, sanUri:null) { success errorKind errorMessage certificatePem privateKeyPem } }
```

2. Present it to the server. `BadSecurityChecksFailed` is expected here, as the server doesn't trust HELIO yet.

```graphql
mutation($u:Url!,$c:String,$k:String) { opcuaFetchCertificateV2(url:$u, clientCertificatePem:$c, clientPrivateKeyPem:$k)
  { success errorKind errorMessage certificatePem } }
```

3. **Ask the user to trust it.** In the ctrlX web UI: certificates for the OPC UA server, find the rejected entry with issuer `HMI Project` and common name `HELIO`, and choose Trust. To tell them which entry is yours, its file name is the certificate's SHA-1 thumbprint: compute it from the PEM's DER bytes. Other rejected entries belong to other clients, so leave them alone. You can list them read-only:

   `GET /certificate-manager/api/v2/applications/rexroth-opcua-server/certificates`

   This is a security decision on the controller, and automated attempts to upload to the trusted store were blocked by the permission system, so don't work around it.

4. Run the fetch again with the same certificate. It now returns the server's certificate.

5. Test. Props for both this and the next step:

```json
{"url":"opc.tcp://localhost:4840","securityMode":"SignAndEncrypt","securityPolicy":"Basic256Sha256",
 "clientCertificatePem":"...","clientPrivateKeyPem":"...",
 "certificateVerification":{"type":"ExpectServer","serverCertificatePem":"..."},
 "userIdentityInfo":{"type":"UserName","userName":"<ctrlX user>","password":"..."}}
```

```graphql
mutation($s:String!,$p:JSON!) { testConnection(serviceId:$s, serviceProps:$p) { success errorKind errorMessage } }
```

`serviceId` is `com.helio-hmi.builtin.Opcua`.

6. Create it, then save. The connection ID is 16 random bytes in base64url without padding.

```graphql
mutation($i:String!,$c:JSON) { defineConnection(connectionId:$i, connectionConfig:$c) }
mutation { saveConfig }
```

```json
{"name":"ctrlX OPC UA","mountPath":"/Services/ctrlX OPC UA","$heServiceId":"com.helio-hmi.builtin.Opcua","props":{ }}
```

7. Check it: `helio.py connections` should show `Connected` and `isBrowsing: false`, and a tree node count (about 29,000 on the tested control).

## Credentials

The user's ctrlX login goes into the Runtime's config, along with the client private key. Tell the user, and suggest a dedicated read-only ctrlX user beyond demos. The `ctrlx-rest` skill's factory default is `boschrexroth` / `boschrexroth`; if login fails, ask rather than retrying.

## PLC symbols and new nodes (tested 2026-11-03, OPC UA server 4.6.2)

PLC tags need publishing first: put `{attribute 'symbol' := 'readwrite'}` (or `'read'`) above `VAR_GLOBAL` in the GVL, build, and do a full download. Link path: `/Services/<connection>/Objects/Datalayer/plc/app/Application/sym/<GVL>/<tag>`. BOOL, UINT, UDINT, DWORD and LREAL plain tags read and write through HELIO. An enum reads over REST as an object, not a number, so publish a UINT copy of it. Arrays and structs were kept out as flat tags rather than tested.

HELIO keeps the browsed tree in `knownData` in its config and links only against that, so new nodes show `node ... not found` while `connections` still says `Connected`. To pick them up:

1. Restart the OPC UA server. A refresh before this left the node count unchanged.
2. Refresh the connection in the IDE (Data view, Data Source Explorer).
3. Check with `helio.py tree "<connection>" 'sym/GVL_'`.

A refresh through the API is `defineConnection(id, null)`, then `defineConnection(id, <config without knownData>)`, as the IDE does. It removes the connection for a moment, Claude Code's permission system blocked it, and the config holds secrets, so ask the user to use the IDE instead. `hyperion_read(ws, "config")["value"]["connections"]` is where the config is; don't print it unredacted.

Read-only checks on the core: `opcuaserver/server-diagnostics/session-diagnostics-summary/array/0/ClientConnectionTime` (Windows FILETIME; `ClientDescription/ProductUri` is `http://helio-hmi.com` for HELIO) and `.../server-diagnostics-summary/cumulated-session-count`.

## Linking

An HMI variable links with `"link":{"type":"DataTree","path":"/Services/<connection name>/Objects/Datalayer/<Data Layer path>"}`. Whether a node really reads is only known from a browser test: see the table in `SKILL.md`.
