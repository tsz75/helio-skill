
# HELIO PLC Protocol over MQTT v1.1

## Protocol Changelog
v1.1 – HELIO 25.2.x and higher
Variables
VariableMeta
Added `ranges` to provide range definitions for variables
Request-Response Pattern: Introduced Improvements to MQTT 3.1 Compatibility
Requests such as `cmd/setVariableValues/req` and
`/cmd/callMethod/req` use the response topic feature of MQTT 5 to
specify the topic to which clients must send a
response after handling such requests.
In order to improve compatibility with clients that only support prior MQTT versions,
we've introduced a compatibility mode that will make sure HELIO includes the response
topic within the payload in addition to the header.
At the moment, this compatibility feature has to be explicitly enabled for
the HELIO MQTT Connection. If you're interested in testing this feature,
please reach out to our support team.
v1 – HELIO 25.1.x
- Initial release
- See v1 Specification

## Overview
MQTT is a messaging protocol: messages are published to individual topics to a broker. Other clients that have subscribed to the corresponding topics receive these messages forwarded by the broker.
In addition, the current version MQTT 5 offers some enhancements that are utilized in the following protocol, notably the Message Expiry Interval for retained messages and the Response Topic header.
An MQTT broker is used to connect one or more PLCs (or similar data sources) to a HELIO Runtime, which in turn communicates with one or more HMIs via WebSocket.
```
           MQTT             MQTT                 WebSocket
+-------+                                                    +-------+
| PLC 1 |---\     +--------+       +-----------+      /------| HMI 1 |
+-------+    \----| MQTT   |       | HELIO     |-----/       +-------+
                  | Broker |-------| Runtime   |
+-------+     /---|        |       |           |-----\       +-------+
| PLC 2 |----/    +--------+       +-----------+      \------| HMI 2 |
+-------+                                                    +-------+
```
A PLC can use the MQTT protocol to provide the following data to HELIO:
**Variables**
Variables, i.e. their current values, can be subscribed to by the HELIO Runtime.
**Methods**
Methods can be called by the HELIO Runtime (with input and output values).
**Messages**
Messages (alarms/events) can be received and acknowledged by the HELIO Runtime.

## Quickstart
This example shows you how to publish messages so that they will be picked up by HELIO and can be used in your HMI. All examples assume that you’re running a local Mosquitto broker.
(Note: Other brokers will also work but their command syntax might differ.)
```
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/meta' -m '{ "version": 1, "name": "PLC 1" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/gauge' -m '{ "version": 1, "name": "Gauge", "type": "Real" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/gauge' -m '50'
```
To check if this worked correctly, run this command:
```
mosquitto_sub -t "#" -v -W 1 --retained-only
```
Your output should like like this:
```
plc/plc1/meta { "version": 1, "name": "PLC 1" }
plc/plc1/variable/meta/test/gauge { "version": 1, "name": "Gauge", "type": "Real" }
plc/plc1/variable/value/test/gauge 50
```
Now, try adding an MQTT Connection in HELIO’s Data View. If everything worked, the connection should show up with the `test/gauge` value and its value.

## Defining PLCs
A PLC publishes its metadata as a JSON payload of type `PlcMeta` with a retained message on the topic `plc/<PLC-ID>/meta`. The HELIO Runtime detects the existence of the PLC based on this retained message. PLC-ID is an internal identifier of the PLC that must not contain forward slashes (`/`).
**Example** (Topic `plc/plc1/meta`):
```
{
  "version": 1,
  "name": "PLC 1"
}
```
**Note:** The following type definitions use TypeScript syntax (`interface`, `enum`, etc.) to define the JSON payloads.
```
/** PLC metadata */
interface PlcMeta {
  /** Payload version */
  version: 1;
  /** Human-readable PLC name */
  name: string;
}
```
- **Optional: Message Expiry Interval**The retained message can be published with a Message Expiry Interval. In this case, the PLC must republish the message regularly before the interval expires. The advantage is that if a PLC fails, the metadata will automatically expire after the Message Expiry Interval, so the HELIO Runtime will no longer be able to find it.A reasonable Message Expiry Interval could be 300 seconds (5 minutes).
- **Optional: Last Will and Testament**As an alternative to a Message Expiry Interval, the loss of the PLC connection can also be detected using the MQTT feature Last Will and Testament: the PLC sets its Last Will and Testament to an empty retained message on the topic `plc/<PLC-ID>/meta` when establishing the MQTT connection. If the connection is unexpectedly disconnected, the MQTT broker automatically resets the retained message, which can be detected by the HELIO Runtime.

## Variables

### Defining Variables
A PLC publishes metadata about all available variables as JSON payloads of type `VariableMeta` with retained messages on the topics `plc/<PLC-ID>/variable/meta/<Variable-ID>`. The HELIO Runtime detects the existence of the variables based on these retained messages. Variable-ID is an internal identifier of the variables, optionally with slashes (`/`).
**Example 1** (Topic `plc/plc1/variable/meta/test/gauge`):
```
{
  "version": 1,
  "name": "Gauge",
  "type": "Real",
  "unit": "mg",
  "numberFormat": {
    "minimumFractionDigits": 1,
    "maximumFractionDigits": 1
  },
  "minValue": 0,
  "maxValue": 100
}
```
**Example 2** (Topic `plc/plc1/variable/meta/test/setting`):
```
{
  "version": 1,
  "name": "Setting",
  "type": "Int",
  "enumChoices": [
    {
      "value": 1,
      "label": "manual"
      },
    {
      "value": 2,
      "label": "automatic"
    }
  ]
}
```
**Note:** Attributes marked below with `?` after the name are optional and can be omitted in the JSON payload.
```
/** Metadata of variable */
interface VariableMeta {
  /** Payload version */
  version: 1;
  /** Human-readable variable name */
  name: string;
  /** Type of variable */
  type: VariableType;

  /** Physical unit, unset if unitless or not applicable */
  unit?: string | null;
  /** Format for displaying numeric values, unset if not applicable */
  numberFormat?: NumberFormat | null;

  /** Minimum allowed value of numeric variable, unset if not applicable */
  minValue?: number | null;
  /** Maximum allowed value of numeric variable, unset if not applicable */
  maxValue?: number | null;
  /**
   * Allowed enumeration values, unset if not applicable
   *
   * Restricts the list of values allowed to be written to the variable through
   * any means (HMI controls or `WriteDataVariable` action). It works basically
   * the same as, and can be used in combination with, option `minValue` and/or
   * option `maxValue`.
   */
  enumValues?: Array<unknown> | null;
  /**
   * Visible enumeration values with their labels, unset if not applicable
   *
   * Defines the list of options displayed to the operator when the variable is
   * connected to an HMI control (e.g. options when displaying Input control as
   * Dropdown, Radio Group, or Button Group).
   */
  enumChoices?: Array<{ value: unknown; label: string }> | null;

  // Added in v1.1: ranges
  /**
  * Range definitions for value status, unset if not applicable
  *
  * Values between the lower and upper bound (both inclusive) get assigned the
  * given status. Ranges may extend to negative or positive infinity, omitting
  * the lower or upper bound, respectively.
  *
  * Note: Ranges are checked in the order they appear in the list. When ranges
  * overlap, values get assigned the status from the range that comes first in
  * the list. This also applies to ranges that only overlap in a single point,
  * e.g. when a range's upper bound matches the lower bound of the next.
  *
  * # Examples
  *
  * ```json
  * [
  *   { "status": "Good", "lowerBound": 5, "upperBound": 10 },
  *   { "status": "Warning", "lowerBound": 10, "upperBound": 15 }
  * ]
  * ```
  *
  * Here, value `7` has status `Good`. Value `10` also has status `Good` since
  * this range is given first in the list. Value `10.001` has status `Warning`
  * and value `16` has no status at all ("unknown").
  *
  * ```json
  * [
  *   { "status": "Good", "lowerBound": -3, "upperBound": 3 },
  *   { "status": "Warning", "lowerBound": -8, "upperBound": 8 }
  * ]
  * ```
  *
  * Here, values from `-3` to `3` (both inclusive) have status `Good`, whereas
  * values from `-8` (inclusive) to `-3` (exclusive) have status `Warning`, as
  * have values from `3` (exclusive) to `8` (inclusive).
  *
  * ```json
  * [
  *   { "status": "Warning", "lowerBound": -8, "upperBound": 8 },
  *   { "status": "Good", "lowerBound": -3, "upperBound": 3 }
  * ]
  * ```
  *
  * Here, all values between `-8` and `8` have status `Warning`. The range for
  * status `Good` is not taken into account at all because it is never reached
  * (all values between `-3` and `3` have already been assigned to `Warning`).
  */
  ranges?: Array<{ status: ValueStatus; lowerBound?: number | null; upperBound?:
    number | null; }> | null;
}

/** Type of variable */
enum VariableType {
  /** Boolean (`true`, `false`) */
  Bool = 'Bool',
  /** Integer number (`-5`, `42`) */
  Int = 'Int',
  /** Floating-point number (`-1.2345`, `987.6`, `1.23e-11`) */
  Real = 'Real',
  /** Unicode string (`Lorem ipsum`) */
  String = 'String',

  /** Date without time (ISO 8601, `2022-03-03`) */
  Date = 'Date',
  /** Date with time (ISO 8601, `2022-03-03T12:34:56.789Z`) */
  DateTime = 'DateTime',
  /** Time of day without date (ISO 8601, `12:34:56.789`) */
  Time = 'Time',
  /** Time duration (ISO 8601, `P1DT23H45M6.789S`) */
  Duration = 'Duration',

  /** Unknown data type */
  Unknown = 'Unknown',
}

/**
 * Options for formatting numbers, following `Intl.NumberFormat()` options, cf.
 * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat>
 */
interface NumberFormat {
  signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero';
  useGrouping?: boolean;

  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;

  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
}

// Added in v1.1: ValueStatus
enum ValueStatus {
  /** Value is considered good */
  Good = 'Good',
 /** Value has some warning */
  Warning = 'Warning',
  /** Value is critical */
  Critical = 'Critical',
  /** Value is noteworthy */
 Noteworthy = 'Noteworthy',
}
```
- **Optional: Message Expiry Interval**
The retained message can be published like PLC metadata with a Message Expiry Interval; in this case, the PLC must republish it regularly before the interval expires. However, this is only relevant for detecting the known variables of a PLC; if the message with the PLC metadata is already missing, all variable metadata published below it will also be ignored.

### Sending Variable Values
A PLC publishes the current value of each of its variables JSON-serialized with retained messages on the topics `plc/<PLC-ID>/variable/value/<Variable-ID>`. Along with the metadata, the HELIO Runtime can receive, evaluate, and forward the values for display on the HMI.
- **Optional: Message Expiry Interval**
The retained message can be published with a Message Expiry Interval. It can also be published as a regular message, i.e., not retained. A variable value whose Message Expiry Interval has expired would no longer be displayed on the HMI after a page change or HMI restart. This would equally apply to values whose messages were not published as retained.

### Variable Types
Variables values are transmitted in JSON serialized format on the topics `plc/<PLC-ID>/variable/value/<Variable-ID>` as well as in all other payloads. Depending on the respective type, the following specific representations are obtained.
**Primitive Types**
- `Bool`: JSON-Boolean, i.e. `true` or `false`
- `Int`: JSON-Number without decimal places, e.g. `5` or `42`
- `Real`: JSON-Number, optionally with decimal places, e.g. `1.2345`, `987.6`, or `1.23e-11`
- `String`: JSON-String (Unicode), e.g. `"Lorem ipsum"` (with quotation marks; possibly with Unicode escapes, e.g. `\\"` or `\\uD83D\\uDE10`)
**Date and Time**
- `Date`: JSON string according to ISO 8601, for example `"2022-03-03"`
- `DateTime`: JSON string according to ISO 8601, for example `"2022-03-03T12:34:56.789Z"` (milliseconds can be omitted; time zone can be specified as `+01:00` instead of `Z`, or omitted)
- `Time`: JSON string according to ISO 8601, for example `"12:34:56.789"` (milliseconds can be omitted)
- `Duration`: JSON string according to ISO 8601, for example `"P1DT23H45M6.789S"` (milliseconds can be omitted; all components `Y`/`M`/`W`/`D` or `H`/`M`/`S` are optional)
**Additional Types**
- `Unknown`: arbitrary JSON value, not further specified.

### Optional: Subscription Handling
The HELIO Runtime informs all PLCs about the variable values it is currently interested in. PLCs can use this option to restrict publishing to the currently subscribed variable values.
To do this, the HELIO Runtime publishes retained messages with a set Message Expiry Interval on the topics `plc/<PLC-ID>/variable/subscription/<Client-ID>/<Variable-ID>`. Client-ID is an arbitrarily chosen, unique identifier for the running HELIO Runtime instance that does not contain slashes (`/`).
The messages published by the HELIO Runtime are not empty, but their specific content is currently not further specified.
A PLC can receive all incoming messages using the wildcard topic `plc/<PLC-ID>/variable/subscription/+/#` and extract the Variable-ID from their topics. The PLC can then decide to enable publishing of variable values only for these subscribed variables.
Based on the remaining Message Expiry Interval indicated in the header of the received message, the PLC can recognize when the subscription for the respective variables expires and stop publishing for these variable values. The HELIO Runtime renews subscriptions for variable values it is still interested in by sending another retained message on the corresponding topic before the interval expires.

### Receiving Variable Values
A PLC can subscribe to change requests for its variables, as the HELIO Runtime is able to write variable values by publishing a regular message with a JSON payload of type `SetVariableValuesReq` on the topic `cmd/setVariableValues/req`. The Response Topic header is used to specify the name of a topic on which all affected PLCs should publish their response messages (see below).
**`cmd/setVariableValues/req`**
```
/** Request `cmd/setVariableValues/req` */
interface SetVariableValuesReq {
  /** Payload version */
  version: 1;
  /** Variables (`plc/<PLC-ID>/variable/value/<Variable-ID>`) */
  variables: Record<string, SetVariableValuesReqVariable>;
  /** Username (user ID) that sets variable values, `null` if unknown */
  setBy: string | null;

  // Added in v1.1:
  /** Explicit response topic (with MQTT 3.1 Request-Response compatibility enabled) */
  responseTopic?: string;
}

/** Payload in `SetVariableValuesReq.variables` */
interface SetVariableValuesReqVariable {
  /** Value to set for this variable */
  value: unknown;
}
```
**Example Payload** (Topic `cmd/setVariableValues/req`):
```
{
  "version": 1,
  "variables": {
    "plc/plc1/variable/value/test/dualBar1": {
      "value": 25
    },
    "plc/plc1/variable/value/test/dualBar2": {
      "value": 10
    }
  },
  "setBy": "John Doe"
}
```
In this request, variables are referenced by the topic name on which PLCs publish the current variable values (i.e., `plc/<PLC-ID>/variable/value/<Variable-ID>`). All PLCs are required to process messages received on the `cmd/setVariableValues/req` topic and compare the variables referenced in the `variables` attribute with the variables they know.
If a PLC recognizes at least one variable it knows, it updates its value as specified (which also updates the retained messages on the `plc/<PLC-ID>/variable/value/<Variable-ID>` topics in case of success). Then, it publishes a regular response message with a JSON payload of type `SetVariableValuesRes` on the Response Topic named in the header.
In this response message, each PLC only lists the variables it knows itself. From the set of incoming responses, the HELIO Runtime can then determine which of the variables marked for setting by itself have actually been adopted.
```
/** Response `cmd/setVariableValues/res/…` */
interface SetVariableValuesRes {
  /** Payload version */
  version: 1;
  /** Variables (`plc/<PLC-ID>/variable/value/<Variable-ID>`) */
  variables: Record<string, SetVariableValuesResVariable>;
  /** Error message (for all variables), `null` if no error or unknown */
  error: null | string | ComplexText;
}

/** Payload in `SetVariableValuesRes.variables` */
interface SetVariableValuesResVariable {
  /** Was variable value successfully set? */
  success: boolean;
  /** Error message, `null` if no error or unknown */
  error: null | string | ComplexText;
}

/** Text with optional `{}` placeholders */
interface ComplexText {
  // Text and values are parsed according to
  // <https://unicode-org.github.io/icu/userguide/format_parse/messages/>.
  /** Text with placeholders `{}` */
  text: string;
  /** Named values (preferred), or positional values */
  values: Record<string, number | string> | Array<number | string>;
}
```
**Example Payload 1** (Topic `cmd/setVariableValues/res/IyYW0sSzRfCl57s6aVbrOQ`):
```
{
  "version": 1,
  "variables": {
    "plc/plc1/variable/value/test/dualBar1": {
      "success": true,
      "error": null
    },
    "plc/plc1/variable/value/test/dualBar2": {
      "success": true,
      "error": null
    }
  },
  "error": null
}
```
**Example Payload 2** (Topic `cmd/setVariableValues/res/IyYW0sSzRfCl57s6aVbrOQ`):
```
{
  "version": 1,
  "variables": {
    "plc/plc1/variable/value/test/dualBar1": {
      "success": true,
      "error": null
    },
    "plc/plc1/variable/value/test/dualBar2": {
      "success": false,
      "error": "Lorem Ipsum"
    }
  },
  "error": null
}
```
**Example Payload 3** (Topic `cmd/setVariableValues/res/IyYW0sSzRfCl57s6aVbrOQ`):
```
{
  "version": 1,
  "variables": {
    "plc/plc1/variable/value/test/dualBar1": {
      "success": false,
      "error": null
    },
    "plc/plc1/variable/value/test/dualBar2": {
      "success": false,
      "error": null
    }
  },
  "error": "Lorem Ipsum"
}
```
Depending on the combination of the `success` and `error` attributes, the following cases can be distinguished:
- All values were successfully transferred.
- Individual values could not be written.
- The writing process could not be executed as a whole.
PLCs are required to atomically transfer all their own variable values as far as possible: if the transfer of a value is not possible, the entire request may be rejected with an error.

## Lists
Lists can be easily represented as subtrees of variables, arising naturally from the structure of the data tree. To create a list:
- Add items to a parent folder that all follow the same structure. This structure will serve as the blueprint in HELIO later.
- Make each item available under a unique index. In the example below, the indices `1`, `2`, ... can also be any names as long as they are unique. They serve as keys with which HELIO can identify an item in the list.

### Example Data Structure
This example shows how to define a list `/my/list/`, where every item has the attributes `foo`, `bar`, and `baz`:
```
plc/plc1/variable/meta/my/list/1/foo: { …, "type": "Int" }
plc/plc1/variable/meta/my/list/1/bar: { …, "type": "Real" }
plc/plc1/variable/meta/my/list/1/baz: { …, "type": "String" }
…

plc/plc1/variable/value/my/list/1/foo: 123
plc/plc1/variable/value/my/list/1/bar: 1.234
plc/plc1/variable/value/my/list/1/baz: "Lorem"
plc/plc1/variable/value/my/list/2/foo: 456
plc/plc1/variable/value/my/list/2/bar: 5.678
plc/plc1/variable/value/my/list/2/baz: "Ipsum"
…
plc/plc1/variable/value/my/list/99/foo: 789
plc/plc1/variable/value/my/list/99/bar: 9.012
plc/plc1/variable/value/meine/list/99/baz: "Dolor"
```

### Importing Lists Into HELIO
In HELIO, you can later drag the list folder into your project and convert it into an HMI List. More details can be found at 1. Importing List.

## Methods

### Defining Methods
A PLC publishes metadata about all available methods as a JSON payload of type `MethodMeta` with retained messages on the topics `plc/<PLC-ID>/method/meta/<Method-ID>`. The HELIO Runtime recognizes the existence of methods based on these retained messages. Method-ID is an internal identifier of the variable, optionally with slashes (`/`).
```
/** Metadata of method */
interface MethodMeta {
  /** Payload version */
  version: 1;
  /** Human-readable method name */
  name: string;

  /** Metadata of named input arguments, empty object if not applicable */
  inputArgs: Record<string, MethodArg>;
  /** Metadata of named output arguments, empty object if not applicable */
  outputArgs: Record<string, MethodArg>;
}

/** Metadata of method argument */
interface MethodArg {
  /** Type of method argument */
  type: VariableType;
}
```
**Example Payload 1** (Topic `plc/plc1/method/meta/test/print`):
```
{
  "version": 1,
  "name": "Print",
  "inputArgs": {
    "msg": {
      "type": "String"
    }
  },
  "outputArgs": {}
}
```
**Example Payload 2** (Topic `plc/plc1/method/meta/test/calculate`):
```
{
  "version": 1,
  "name": "Calculate",
  "inputArgs": {
    "a": {
      "type": "Real"
    },
    "b": {
      "type": "Real"
    }
  },
  "outputArgs": {
    "res": {
      "type": "Real"
    }
  }
}
```
- **Optional: Message Expiry Interval**
The retained message can be published like the PLC metadata with a Message Expiry Interval; in this case, the PLC must republish it regularly before the interval expires. However, this is only relevant for detecting the known methods of a PLC; if the message with the PLC metadata is already missing, all method metadata published below it will also be ignored.

### Calling Methods
The HELIO Runtime can invoke methods by publishing a regular message with a JSON payload of type `CallMethodReq` on the topic `plc/<PLC-ID>/cmd/callMethod/req`. The Response Topic header specifies a topic on which the respective PLC should publish its response message(s) (see below).
```
/** Request `plc/<PLC-ID>/cmd/callMethod/req` */
interface CallMethodReq {
  /** Payload version */
  version: 1;
  /** Method topic (`plc/<PLC-ID>/method/meta/<Method-ID>`) */
  method: string;
  /** Named input arguments */
  inputArgs: Record<string, CallMethodReqInputArg>;
  /** Username (user ID) that calls the method, `null` if unknown */
  calledBy: string | null;

  // Added in v1.1:
  /** Explicit response topic (with MQTT 3.1 Request-Response compatibility enabled) */
  responseTopic?: string;
}

/** Payload in `CallMethodReq.inputArgs` */
interface CallMethodReqInputArg {
  /** Value of this input argument */
  value: unknown;
}
```
**Example Payload** (Topic `plc/plc1/cmd/callMethod/req`):
```
{
  "version": 1,
  "method": "plc/plc1/method/meta/test/calculate",
  "inputArgs": {
    "a": {
      "value": 2
    },
    "b": {
      "value": 3
    }
  },
  "calledBy": "John Doe"
}
```
In this request, methods are represented by the topic name on which PLCs publish metadata (i.e., `plc/<PLC-ID>/method/meta/<Method-ID>`). Each PLC is required to process incoming messages on its topic `plc/<PLC-ID>/cmd/callMethod/req` and compare the referenced method in the `method` attribute with the methods it knows.
If a PLC recognizes a known method, it executes it with the provided input values. Then, it publishes a regular response message with JSON payload of type `CallMethodRes` on the Response Topic specified in the header.
In this response message, the PLC either confirms the successful execution of the method (and reports the generated return values to the HELIO Runtime) or provides details on why the method execution could not be completed.
```
/** Response `plc/<PLC-ID>/cmd/callMethod/res/…` */
interface CallMethodRes {
  /** Payload version */
  version: 1;
  /** Was method call successfully completed? */
  success: boolean;
  /** Error message, `null` if no error or unknown */
  error: null | string | ComplexText;
  /** Named output arguments, empty object if not applicable */
  outputArgs: Record<string, CallMethodResOutputArg>;
}

/** Payload in `CallMethodRes.outputArgs` */
interface CallMethodResOutputArg {
  /** Value of this output argument */
  value: unknown;
}
```
**Example Payload 1** (Topic `plc/plc1/cmd/callMethod/res/BK4XmkP_T3G_tkEgrDz-0A`):
```
{
  "version": 1,
  "success": true,
  "error": null,
  "outputArgs": {
    "res": {
      "value": 5
    }
  }
}
```
**Example Payload 2** (Topic `plc/plc1/cmd/callMethod/res/BK4XmkP_T3G_tkEgrDz-0A`):
```
{
  "version": 1,
  "success": false,
  "error": "Lorem ipsum",
  "outputArgs": {}
}
```
PLCs are required to respond to every request received on their topic `plc/<PLC-ID>/cmd/callMethod/req` with exactly one response message. This includes the case where the requested method is not known to the PLC, which should result in an appropriate error feedback.

## Notifications
A PLC can signal messages (alarms/events) by publishing their details as a JSON payload of type `Notification`, using a retained message on a topic `plc/<PLC-ID>/notification/<Notification-ID>`. The Notification-ID is an arbitrarily chosen, unique identifier for each message, optionally with slashes (`/`).
```
/** Details of notification */
interface Notification {
  /** Payload version */
  version: 1;

  /** Internal code (e.g. `E-123`) */
  code: string;
  /** Severity level */
  level: SeverityLevel;
  /** Can notification be acknowledged? */
  canAcknowledge: boolean;

  /** Short message */
  message: string | ComplexText;
  /** Long description */
  description: string | ComplexText;

  /** Time of arrival (ISO 8601, e.g. `2021-12-01T13:54:15Z`) */
  arrivedOn: string;
  /** Time of acknowledgement (ISO 8601), `null` if not acknowledged */
  acknowledgedOn: string | null;
  /** Time when notification has gone (ISO 8601), `null` if still active */
  goneOn: string | null;

  /** Username (user ID) that acknowledged notification, `null` if unknown */
  acknowledgedBy: string | null;
}

/** Notification severity level */
enum SeverityLevel {
  // As used in syslog:
  debug = 'debug',
  info = 'info',
  notice = 'notice',
  warning = 'warning',
  err = 'err',
  crit = 'crit',
  alert = 'alert',
  emerg = 'emerg',
}
```
**Example Payload 1** (Topic `plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw`):
```
{
  "version": 1,
  "code": "E-147",
  "level": "alert",
  "canAcknowledge": true,
  "message": "Lorem ipsum",
  "description": "Lorem ipsum dolor sit amet",
  "arrivedOn": "2021-12-06T14:40:41.329Z",
  "acknowledgedOn": null,
  "goneOn": null,
  "acknowledgedBy": null
}
```
**Example Payload 2** (Topic `plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw`):
```
{
  "version": 1,
  "code": "E-147",
  "level": "alert",
  "canAcknowledge": false,
  "message": "Lorem ipsum",
  "description": "Lorem ipsum dolor sit amet",
  "arrivedOn": "2021-12-06T14:40:41.329Z",
  "acknowledgedOn": "2021-12-06T14:43:41.246Z",
  "goneOn": null,
  "acknowledgedBy": "John Doe"
}
```
**Example Payload 3** (Topic `plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw`):
```
{
  "version": 1,
  "code": "E-147",
  "level": "alert",
  "canAcknowledge": false,
  "message": "Lorem ipsum",
  "description": "Lorem ipsum dolor sit amet",
  "arrivedOn": "2021-12-06T14:40:41.329Z",
  "acknowledgedOn": "2021-12-06T14:43:41.246Z",
  "goneOn": "2021-12-06T14:45:19.429Z",
  "acknowledgedBy": "John Doe"
}
```
If information about an existing notification changes (e.g. the `acknowledgedOn` attribute), a new retained message with JSON payload of type `Notification` should be published on the same topic (i.e. retaining the original Notification ID in the topic name).
**Optional:** The retained messages with the notification details can be published with a Message Expiry Interval. In this case, the messages must be republished by the PLC before the interval expires.
There are two ways to indicate that a notification is no longer pending or active:
- By publishing an empty retained message on the corresponding topic, the message and the notification will be deleted from the MQTT broker.
- By publishing a new retained message with JSON payload of type `Notification`, where the `goneOn` attribute is set. In this case, a Message Expiry Interval should be set so that these messages do not need to be retained indefinitely by the MQTT broker. A reasonable Message Expiry Interval could be 3600 seconds (1 hour).
Outgoing notifications (explicitly by publishing an empty retained message or a message with the `goneOn` attribute set, or automatically after the Message Expiry Interval expires) will no longer appear in the active notifications list on the HELIO Runtime. However, these notifications may still be viewed as historical notifications in the HMI; the permanent storage in this case is handled automatically by the HELIO Runtime without involving the MQTT protocol.

### Acknowledging Notifications
The HELIO Runtime can acknowledge notifications by publishing a regular message with JSON payload of type `AcknowledgeNotificationsReq` on the topic `cmd/acknowledgeNotifications/req`.
```
/** Request `cmd/acknowledgeNotifications/req` */
interface AcknowledgeNotificationsReq {
  /** Payload version */
  version: 1;
  /** Notification topics (`plc/<PLC-ID>/notification/<Notification-ID>`) */
  notifications: Array<string>;
  /** Username (user ID) that acknowledges notifications, `null` if unknown */
  acknowledgedBy: string | null;
}
```
**Example Payload** (Topic `cmd/acknowledgeNotifications/req`):
```
{
  "version": 1,
  "notifications": ["plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw"],
  "acknowledgedBy": "John Doe"
}
```
In this request, previously published notifications are referenced by their topic name, on which they were received (i.e., `plc/<PLC-ID>/notification/<Notification-ID>`). All PLCs are required to process messages received on the topic `cmd/acknowledgeNotifications/req` and compare the referenced notifications in the `notifications` attribute with the notifications they are aware of.
For each applicable notification, a PLC should mark it as acknowledged. In doing so, it updates the `acknowledgedOn` attribute in the notification details to the current time. If a notification cannot be acknowledged (see `canAcknowledge`), a PLC may ignore the acknowledgement request for that notification.
After updating the notifications in this manner, the PLC publishes them on the topics `plc/<PLC-ID>/notification/<Notification-ID>` as described above.
An explicit response to the request is currently not provided.

## Test Messages
With the following messages or calls to the CLI tool `mqtt`, a PLC can be simulated for the HELIO Runtime configured in `config-mqtt.json` and visualized together with the demo runtime.

### PLC Metadata
```
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/meta' -m '{ "version": 1, "name": "PLC 1" }'
```

### Variable Metadata
```
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/gauge' -m '{ "version": 1, "name": "Gauge", "type": "Real" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/dualBar1' -m '{ "version": 1, "name": "Dual Bar 1", "type": "Real" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/dualBar2' -m '{ "version": 1, "name": "Dual Bar 2", "type": "Real" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/float1' -m '{ "version": 1, "name": "Float 1", "type": "Real" }'

mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/date1' -m '{ "version": 1, "name": "Date 1", "type": "Date" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/datetime1' -m '{ "version": 1, "name": "DateTime 1", "type": "DateTime" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/time1' -m '{ "version": 1, "name": "Time 1", "type": "Time" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/duration1' -m '{ "version": 1, "name": "Duration 1", "type": "Duration" }'

mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/string1' -m '{ "version": 1, "name": "String 1", "type": "String" }'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/meta/test/ipaddress1' -m '{ "version": 1, "name": "IP Address 1", "type": "String" }'
```

### Sending Variable Values
```
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/gauge' -m '50'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/dualBar1' -m '50'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/dualBar2' -m '75'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/float1' -m '-12.3'

mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/date1' -m '"2022-03-03"'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/datetime1' -m '"2022-03-03T12:34:56.789Z"'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/time1' -m '"12:34:56.789"'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/duration1' -m '"P1DT23H45M6.789S"'

mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/string1' -m '"Lorem ipsum"'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/ipaddress1' -m '"127.0.0.1"'
```

### Receiving Variable Values
```
mosquitto_pub -D publish response-topic 'cmd/setVariableValues/res/IyYW0sSzRfCl57s6aVbrOQ' -t 'cmd/setVariableValues/req' -m '{ "version": 1, "variables": { "plc/plc1/variable/value/test/dualBar1": { "value": 25 }, "plc/plc1/variable/value/test/dualBar2": { "value" :10 } }, "setBy": "John Doe" }'

mosquitto_pub -t 'cmd/setVariableValues/res/IyYW0sSzRfCl57s6aVbrOQ' -m '{ "version": 1, "variables": { "plc/plc1/variable/value/test/dualBar1": { "success": true, "error": null }, "plc/plc1/variable/value/test/dualBar2": { "success": true, "error": null } }, "error": null }'

mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/dualBar1' -m '25'
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/variable/value/test/dualBar2' -m '10'
```

### Messages
```
mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw' -m '{ "version": 1, "code": "E-147", "level": "alert", "canAcknowledge": true, "message": "Lorem ipsum", "description": "Lorem ipsum dolor sit amet", "arrivedOn": "2021-12-06T14:40:41.329Z", "acknowledgedOn": null, "goneOn": null, "acknowledgedBy": null }'

mosquitto_pub -t 'cmd/acknowledgeNotifications/req' -m '{ "version": 1, "notifications": ["plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw"], "acknowledgedBy": "John Doe" }'

mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw' -m '{ "version": 1, "code": "E-147", "level": "alert", "canAcknowledge": false, "message": "Lorem ipsum", "description": "Lorem ipsum dolor sit amet", "arrivedOn": "2021-12-06T14:40:41.329Z", "acknowledgedOn": "2021-12-06T14:43:41.246Z", "goneOn": null, "acknowledgedBy": "John Doe" }'

mosquitto_pub -r -D publish message-expiry-interval 3600 -t 'plc/plc1/notification/huBMayaoS5yi9rLyCge6Iw' -m '{ "version": 1, "code": "E-147", "level": "alert", "canAcknowledge": false, "message": "Lorem ipsum", "description": "Lorem ipsum dolor sit amet", "arrivedOn": "2021-12-06T14:40:41.329Z", "acknowledgedOn": "2021-12-06T14:43:41.246Z", "goneOn": "2021-12-06T14:45:19.429Z", "acknowledgedBy": "John Doe" }'
```
