
# Time
The `Time` data variable type represents a time of day. It’s used whenever
you want to store or display a
specific clock time without a date.

### Specification
- A `Time` variable should be represented as an ISO 8601 time string.
- The format is `hh:mm:ss.ms` where `hh` marks the hours, `mm`
marks the minutes, `ss` marks the seconds and `ms` represents the
milliseconds with a maximum of three decimal places.
- We recommend using ISO 8601 time strings for all new implementations as
this provides a standardized, human-readable format that's widely supported
across systems.

### ISO 8601 Duration Components
The ISO 8601 time format supports various time components:
- **[hh]** refers to a zero-padded hour between 00 and 24.
- **[mm]**  refers to a zero-padded minute between 00 and 59.
- **[ss]** refers to a zero-padded second between 00 and 60 (where 60 is only
used to denote an added leap second).

### Historical Fallback
For backwards compatibility, HELIO still supports time values provided as
integer numbers representing **milliseconds**.
However, this approach is considered legacy and should not be used in new
implementations. Units other than milliseconds are not currently supported in
the integer format.
When using this approach, the integer millisecond values will be converted to
seconds, minutes and hours when displayed. This means large
durations may appear as an unexpectedly high number of hours (e.g., 34
hours instead of 1 day and 10 hours), rather than being converted to more
readable units days and weeks.

## Examples
| Time String | Description | Equivalent (ms) |
| `00:00:30.000` | **30 seconds** | 30000 |
| `02:15:45.000` | **2 hours, 15 minutes, 45 seconds** | 8145000 |
| `00:00:00.200` | **0 hours, 0 minutes, 0 seconds, 200 milliseconds** | 200 |
**Learn More**
- ISO 8601 Times Standard
- Why is there an offset between the timestamps from my PLC and those displayed on the HMI?
