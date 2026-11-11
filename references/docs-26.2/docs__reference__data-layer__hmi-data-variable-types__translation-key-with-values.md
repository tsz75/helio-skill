
# Translation Keys with Values (Data Variable Type)
Just like the
Translation Key (Data Variable Type), this type lets your data source send a
Translation Key. However, it also lets the PLC inject
dynamic values into your translations using placeholders.
This enables messages like "Temperature 99 is too high" where the
temperature value changes based on real-time data.

### JSON Format
The data source must provide a string variable containing a JSON object:
```
{
  pattern: 'Status.TemperatureTooHigh',
  arguments: { temp: 99 }
}
```
- **pattern:** The Translation Key to use.
- **arguments:** An object containing one or more values to inject into the translation.

## How It Works
Your data source sends a JSON string containing the
Translation Key and the dynamic values to inject. HELIO
looks up the translation, replaces placeholders with your values, and displays
the result in the current language.
| Data Source Sends | Translation in HELIO | User Sees (e.g., English) |
| `{ "pattern": "Status.TemperatureTooHigh", "arguments": { "temp": 99 } }` | **Key**`"Status.TemperatureTooHigh"`**en-GB**`"Temperature {temp} is too high"`**de-DE**`"Temperatur {temp} ist zu hoch"` | `"Temperature 99 is too high"` |
| `{ "pattern": "Status.TemperatureTooLow", "arguments": { "temp": 2 } }` | **Key**`"Status.TemperatureTooLow"`**en-GB**`"Temperature {temp} is too low"`**de-DE**`"Temperatur {temp} ist zu niedrig"` | `"Temperature 2 is too low"` |

## Related

#### Data Variable Types
Translation Key (Data Variable Type)

#### Content
Internationalization (i18n)
What Are Translations and Translation Keys?
Translation Manager
