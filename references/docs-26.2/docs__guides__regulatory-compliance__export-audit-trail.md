
# Export An Audit Trail
In the first step of this guide, we've learned how to setup a
simple Audit Trail Page that gives
you instant access to the stream of audit trail events from within your HMI.
While the `Audit Trail Page` provides instant access, complex
debugging and in-depth auditing often require more advanced analysis tools. CSV
(Comma-Separated Values) export offers a powerful solution, enabling you to take
your event stream and analyze it using spreadsheet software, data analysis
tools, or custom processing scripts.
HELIO offers the Export Audit Trail Action to achieve this
behavior. Let's find out how we can make use of it…
- Explore the Audit Trail Page
By default, HELIO includes an `Export` button on each
Audit Trail Page. This button is configured to
execute the
Export Audit Trail Action, so you can get
started right away. Open the
Content View of your project, visit the audit trail
page, and check its footer:
←
→
- Create a Sample Export
Click the `Export` button to open a dialog that lets you specify the time
frame for your export.
←
→
Select a timeframe, click Export, and HELIO will download a CSV file containing
all the events that occurred within the specified timeframe.
Mission accomplished!
Amazing! You've set up your Audit Trail page, tracked a variety of events,
and can even export the audit trail for analysis. Great job!
