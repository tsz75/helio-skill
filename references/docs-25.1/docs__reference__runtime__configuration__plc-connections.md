
# PLC Connections

## Manual Configuration
**Use Manual Configuration as Last Resort**Manual settings should only be used as a last resort, e.g. when…
…specific configurations are needed to make connections to certain PLCs work
…configuration of these features are not yet possible via the IDE
Please be aware that the stability of manual configurations may not be
guaranteed when upgrading to new versions of HELIO.

### Options for Restricted & Limited PLCs (OPC-UA)
Some PLCs provide a very limited OPC-UA API to ensure they fulfill their main
tasks. Unfortunately these limits are often not available as OPC-UA metadata so
HELIO can take it into account.
However, the OPC-UA Connection in HELIO provides the following flags to
adjust the HELIO runtime to the needs of specific PLCs:
```
/** Maximum batch size for browsing node IDs */
maxBatchSizeBrowse: schema.number().positive().optional()

/** Maximum batch size for reading node IDs */
maxBatchSizeRead: schema.number().positive().optional()

/** Timeout when browsing node IDs (ms) */
timeoutBrowse: schema.number().positive().optional()

/** Timeout when reading node IDs (ms) */
timeoutRead: schema.number().positive().optional()

/** Timeout when connecting (ms) */
timeoutConnect: schema.number().positive().optional()

/** Timeout when creating session (ms) */
timeoutCreateSession: schema.number().positive().optional()

/** Timeout when creating subscription (ms) */
timeoutCreateSubscription: schema.number().positive().optional()
```

### Restricting Browse Requests
- Locate the Runtime Config File
Navigate to the HELIO Data Directory and open the `config.json` in your favorite editor.
- Add `maxBatchSizeBrowse` options
- Locate the `connections` section within the file and locate your OPC-UA
connection. Each connection is identified by a unique `ConnectionID`.
- Add the `maxBatchSizeBrowse` option and provide a positive integer as
its value.
```
{
  "connections": {
    "<ConnectionID>": {
      "$heServiceId": "com.helio-hmi.builtin.Opcua",
      "props": {
        "url": "opc.tcp://...",
        "maxBatchSizeBrowse": 20,
        "clientOptions": {
          "endpointMustExist": false
        }
      }
    }
  }
}
```
