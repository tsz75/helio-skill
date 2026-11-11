
# Initial Import to Target Device
In the previous step we've exported our project.
Now we can take it to our Target Device and import the project again.
- Sign in to the Target Device
Make sure HELIO is up an running on your target hardware and sign in (see also Sign Into the HELIO IDE for the First Time).
- Import Your Project
Follow the steps in Import a Project to open the import dialog.
- Ensure that all the data sources defined in the export are created.
- Ensure that all translations are imported.
- Adjust Data Source Credentials
Since you are now running on a production machine, different credentials or security settings may be required for your data connections.
See the OPC UA Connection  page for more details and advanced OPC UA settings.
- Test and Validate
Run through your project's main workflows to ensure everything functions
as expected on the target device. Pay special attention to data
connectivity, screen navigation, and any hardware-specific features that
differ from your development environment.
Perform a functional test of your HMI application: verify real-time data
updates, test operator interactions, check alarm functionality, and validate
that the system responds correctly to all inputs before commissioning for
production use.
Mission accomplished!
You’ve imported your application onto the target hardware and validated its
functionality.
As mentioned earlier, the key is to deploy early and often—in
other words, to iterate on your product based on real-life feedback. One of
the next steps is probably to recommission or redeploy your updated project.
Let's learn how to do that next.
