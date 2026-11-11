
# Date
A `Date` variable is a way to specify a particular wall-clock date, without a time part. You
 can use it to show the numeric components of that date.

### Specification
- A `Date` variable is represented as an RFC 3339 string using the `full-date` profile.
- It does not include a time component. 
Need a time component?Use the Date & Time (Timestamp) type.

## Examples
| Date String | Description |
| `2020-12-24` | December 24, 2020 |

## Additional Metadata
- Placeholders for Offline Editing
- Auto Reset a Variable

## Troubleshooting

### Ensure Correct Date and Time Settings on All Devices
Juggling with dates and time can be a real pain, especially in a client-server
architecture with multiple computers being involved.
So, make sure all the computers involved are set up correctly:
- **Backends (aka your PLC)**
  - The time on the PLC must be set correctly, including the time zone in which the system clock is running.
  - Timestamps from the PLC must always include an offset specification (e.g. UTC or UTC+2).
- **Computers Executing the HELIO Runtime**
  - The time on the computer that is executing the HELIO Runtime must be set correctly as well.
- **Computers Executing the HMIs**
  - Finally the time zone on all the computers running the HMI in the browser must be set correctly.

### Learn More
Why is there an offset between the timestamps from my PLC and those displayed on the HMI?
