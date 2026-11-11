
# HELIO MQTT Connection – FAQs & Troubleshooting
- Why isn't HELIO displaying the MQTT-published data tree as expected?

## Why isn't HELIO displaying the MQTT-published data tree as expected?
**Probable Cause**
- According to the HELIO PLC Protocol over MQTT v1
HELIO expects messages sent as **retained**.
- These messages have to be sent quickly after subscribing. Otherwise,
problems like incorrect data displays can
occur.
- Running Mosquitto MQTT broker inside a Windows console can slow this process
down.
**Solution**
Run Mosquitto as a service, not a console app, on Windows. This speeds
up sending retained messages.
