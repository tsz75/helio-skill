
# JSON
Use the `JSON` type to exchange structured data between your HMI and PLC. This
type enables you to transmit complex, hierarchical data structures in a standardized
format.
JSON variables are currently limited to custom elements, properties, or actions
built with the HELIO SDK. Typical use cases include graphs,
charts, or other components that require more complex data structures.

## Specification
- A `JSON` variable is represented as a `String` data type on your PLC.
- The string must contain valid JSON syntax according to the JSON
specification.
- The `JSON` data must be **serialized** (converted to a string representation)
before being written to the PLC string variable.
- When reading from the PLC, HELIO automatically parses the string back into a
JSON object for use in your custom elements.

## Example
If you want to send this JSON object:
```
{
  "pressure": 1013,
  "status": "normal"
}
```
Your PLC string variable would contain:
```
'{"pressure":1013,"status":"normal"}'
```
