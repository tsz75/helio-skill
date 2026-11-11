
# Why is there an offset between the timestamps from my PLC and those displayed on the HMI?

## Symptom
- You have created an HMI variable of type Date & Time (Timestamp)
- You would like to display it in your HMI using a Magic Output
- There is an offset between the actual date you are sending and the one being displayed in your HMI.

## Explanation
A device in your architecture is probably misconfigured for dates and time zones.
When working with date and time variables across devices, it is important that
each computer involved in your client-server HMI architecture is configured
correctly.

## Resolution

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
Also make sure that you follow the specification of the
Date & Time (Timestamp)
.
