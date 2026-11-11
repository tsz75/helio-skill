
# Duration
A `Duration` variable represents a length of time or time interval. Use it to
indicate how long something takes, such as a period of time or a delay.

### Specification
- A `Duration` variable should be represented as an ISO 8601 duration string.
- The format is `P[n]Y[n]M[n]DT[n]H[n]M[n]S` where `P` marks the start, `T`
separates date and time components, and each `[n]` represents a number.
- We recommend using ISO 8601 duration strings for all new implementations as
this provides a standardized, human-readable format that's widely supported
across systems.

### ISO 8601 Duration Components
The ISO 8601 duration format supports various time components:
- **P** - Period designator (required, placed at start)
- **Y** - Years
- **M** - Months (before T) or Minutes (after T)
- **W** - Weeks
- **D** - Days
- **T** - Time designator (separates date from time components)
- **H** - Hours
- **M** - Minutes (must come after T)
- **S** - Seconds (can include decimal fractions)
These components are intentionally kept separate and are not combined into a
single unit. This lets you express periods like "3 months" (`P3M`), or "1
year" (`P1Y`), which mean different lengths of time depending on the
situation. For example, "1 month" can be 28, 29, 30, or 31 days, depending on
the month. And "1 year" can be 365 or 366 days in a leap year. This approach
is more meaningful than converting all specifications to a fixed number of
milliseconds.

### Historical Fallback
For backwards compatibility, HELIO still supports duration values provided as
integer numbers representing **milliseconds**.
However, this approach is considered legacy and should not be used in new
implementations. Units other than milliseconds are not currently supported in
the integer format.
When using this approach, the integer millisecond values will be converted to
seconds when displayed, since ISO 8601 durations don't have a dedicated
millisecond component (fractional seconds are used instead). This means large
durations may appear as an unexpectedly high number of seconds (e.g., 86,400
seconds instead of 1 day), rather than being converted to more readable units
like hours or days.

## Examples
| Duration String | Description | Equivalent (ms) |
| `P1Y6MT10H` | **1 year, 6 months, and 10 hours** |  |
| `P1DT12H` | **1 day and 12 hours** |  |
| `PT2H15M` | **2 hours and 15 minutes** | 8100000 |
| `PT30S` | **30 seconds** | 30000 |
| `PT0.5S` | **500 milliseconds** | 500 |
**Learn More**
- ISO 8601 Duration Standard
- Why is there an offset between the timestamps from my PLC and those displayed on the HMI?
