
# Export Audit Trail Action
Create and download an audit trail export as a CSV file to back up or perform
advanced analyses.

## Example
This action has no further options. It will open the export dialog.

## Export Dialog
←
→
This action will open a dialog that lets operators specify the time frame
that shall be exported.

## Export Format
The result of the export will be a CSV File in the following **format**:
```
Timestamp,User,Type,Event
2025-05-30T10:42:05.724319Z,Bob (wqGMvn4LQj6gfkug_UnqxA),WriteVariable,Changed variable [/Examples/Abstract/ReadWrite/ForEveryone/Integer/WithLimits] (Unknown) from [71] to [72]
```

### Example Event Types
| Timestamp | User | Type | Event |
| `2025-05-30T10:42:05.724319Z` | `Bob (…)` | `WriteVariable` | `Changed variable [/Examples/Abstract/ReadWrite/ForEveryone/Integer/WithLimits] (Unknown) from [71] to [72]` |
| `2025-05-30T10:42:05.724319Z` | `Alice (…)` | `SwitchUser` | `Switched user from [wYiC-rAyRY643SIsFkwVWg] (Alice) to Guest` |

## Related

#### Guides
Setup An Audit Trail

#### Actions
Record Audit Trail Event Action
