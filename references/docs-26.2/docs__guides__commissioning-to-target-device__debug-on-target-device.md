
# Debug on the Target Device
Despite thorough testing during development, its's
important to acknowledge that environments can sometimes present
unexpected challenges. It's possible that your HELIO application is encountering
performance issues and connectivity problems when running on target hardware.
The good news is that HELIO includes debugging tools
designed to help us quickly identify and resolve issues on
target devices.
By enabling detailed logging and sharing it with our support team, we can
identify the root cause of a problem, monitor system performance, and gather
the information needed to optimize your application for production use.
- Stop the HELIO Runtime
Before enabling diagnostic logging, ensure the HELIO Runtime is
stopped. The logging functionality is activated through a command line
parameter, requiring a fresh start of the runtime.
- Enable Logging
Start HELIO with the `--logdir` parameter to enable file-based logging.
This will create rolling log files that are automatically managed and
timestamped for easy analysis.
Open a terminal or a command prompt and navigate to your HELIO installation
directory, then start HELIO like this:
```
./HELIO --logdir /path/to/logs
```
**Example for common scenarios:**
- On Windows:`HELIO.exe --logdir C:\helio-logs`
- On Linux or macOS:`./HELIO --logdir /var/log/helio`
HELIO will now write detailed diagnostic information to log files in the
specified directory instead of just displaying them in the console. The
log files are automatically rotated to prevent them from growing too
large.
For more command line options, see Command Line Parameters.
- Package and Share Log Files
Once you've captured the relevant logging data, compress the log files
into a ZIP archive before sharing them. Log files compress extremely well,
often reducing file sizes by 90% or more, making them much easier to send
and analyze.
Our support team can analyze these logs to quickly identify the root cause
and provide targeted solutions. For assistance, visit our
Get Support page to get in touch.
**When contacting support:**
- Include the **compressed log files**
- Provide a **detailed description of the issue** you're experiencing
- Mention the **steps that led to the problem**
- Include your **HELIO version** and **target device information**
Include logs from both before and during the problem occurrence when
possible. This helps our team understand the transition from normal to
problematic behavior.
Mission accomplished!
Now you've taken your project from development to target device,
you've updated it and know how to debug and share logs! Amazing job!
