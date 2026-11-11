
# Export Message Archive Action
Create and download an export of the
Message Archive to back up or
perform advanced analyses.

## Example
You can choose either JSON or CSV as your export format.

## Export Formats

### CSV
The export will result in a CSV file with the following format:
```
code;level;arrivedAt;goneAt;acknowledgedBy;acknowledgedAt;title;description
WARN-1;WARN;2025-07-03T08:22:18.230497Z;2025-07-07T21:09:35.50149Z;Guest;2025-07-03T08:22:24.75345Z;Warning Triggered By Setting Bit 1;"This warning is triggered by setting the bit with index 1 of the variable “Messaging/ProcessVariable/BitSet/AsInteger”. The message remains active until the bit is reset. "
INFO-1;INFO;2025-07-18T15:49:38.642471Z;2025-07-18T15:49:47.154837Z;;;Warning Triggered By Setting Bit 0;"This warning is triggered by setting the bit with index 0 of the variable “Messaging/ProcessVariable/BitSet/AsInteger”. The message remains active until the bit is reset. "
```

### JSON
The export will result in a JSON file with the following format:
```
[
  {
    "code": "WARN-1",
    "level": "WARN",
    "arrivedAt": "2025-07-03T08:22:18.230497Z",
    "goneAt": "2025-07-07T21:09:35.50149Z",
    "acknowledgedBy": "Guest",
    "acknowledgedAt": "2025-07-03T08:22:24.75345Z",
    "title": "Warning Triggered By Setting Bit 1",
    "description": "This warning is triggered by setting the bit with index 1 of the variable “Messaging/ProcessVariable/BitSet/AsInteger”. The message remains active until the bit is reset. ",
    "additionalRecordValues": {}
  },
  {
    "code": "INFO-1",
    "level": "INFO",
    "arrivedAt": "2025-07-18T15:49:38.642471Z",
    "goneAt": "2025-07-18T15:49:47.154837Z",
    "acknowledgedBy": "",
    "acknowledgedAt": "",
    "title": "Warning Triggered By Setting Bit 0",
    "description": "This warning is triggered by setting the bit with index 0 of the variable “Messaging/ProcessVariable/BitSet/AsInteger”. The message remains active until the bit is reset. ",
    "additionalRecordValues": {}
  }
]
```

## Related

#### Guides
Messaging & Alarming
