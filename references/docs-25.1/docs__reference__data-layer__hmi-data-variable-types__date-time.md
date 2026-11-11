
# Date & Time (Timestamp)
A `Date & Time` (Timestamp) variable is a way to specify a particular moment in time. You
can use it to show the current time or a specific point in the past or future.

### Specification
- A `Date & Time` variable is represented as an RFC 3339 string using the
`date-time` profile.
- It does include offset information.
- We highly recommend to use UTC time as this ensures consistent time handling across different regions, avoids timezone-related bugs, and simplifies data synchronization between services.

## Examples
| Date & Time StringDescriptionOffset`2020-12-24T14:30:00Z`**2:30 pm on December 24, 2020** in Coordinated Universal TimeUTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | DescriptionOffset`2020-12-24T14:30:00Z`**2:30 pm on December 24, 2020** in Coordinated Universal TimeUTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | Offset`2020-12-24T14:30:00Z`**2:30 pm on December 24, 2020** in Coordinated Universal TimeUTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | `2020-12-24T14:30:00Z`**2:30 pm on December 24, 2020** in Coordinated Universal TimeUTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | **2:30 pm on December 24, 2020** in Coordinated Universal TimeUTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | UTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | `2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | **3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | UTC+01:00 |
| `2020-12-24T14:30:00Z`**2:30 pm on December 24, 2020** in Coordinated Universal TimeUTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | **2:30 pm on December 24, 2020** in Coordinated Universal TimeUTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | UTC`2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | `2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | **3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | UTC+01:00 |
| `2020-12-24T15:30:00+01:00`**3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | **3:30 pm on December 24, 2020** e.g. in Central European TimeUTC+01:00 | UTC+01:00 |

### Did You Notice?
Both timestamps in this table represent the exact same moment in time, just
expressed using different offsets. One speaks UTC, the other UTC+1, but
they're pointing to the same cosmic event.
Ain't that nice?

## Additional Metadata
- Placeholders for Offline EditingAuto Reset a Variable

## Troubleshooting

### Ensure Correct Date and Time Settings on All Devices
Juggling with dates and time can be a real pain, especially in a client-server
architecture with multiple computers being involved.So, make sure all the computers involved are set up correctly:
**Backends (aka your PLC)**

The time on the PLC must be set correctly, including the time zone in which the system clock is running.
Timestamps from the PLC must always include an offset specification (e.g. UTC or UTC+2).


**Computers Executing the HELIO Runtime**

The time on the computer that is executing the HELIO Runtime must be set correctly as well.


**Computers Executing the HMIs**

Finally the time zone on all the computers running the HMI in the browser must be set correctly.

### Learn More
Why is there an offset between the timestamps from my PLC and those displayed on the HMI?
