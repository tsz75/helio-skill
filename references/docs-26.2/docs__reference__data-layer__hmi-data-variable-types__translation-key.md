
# Translation Key (Data Variable Type)
The `Translation Key` type allows a data source to send a
Translation Key instead of actual translated text.
HELIO automatically translates these keys based on the current language, so
your PLC doesn't need to handle multiple languages.

## Why Use Translation Keys?
When your data source needs to display dynamic status messages, you have two options:

#### Send Translation Keys
Your data source sends a simple key, and HELIO handles all translations.
Translation keys keep your PLC logic simple while supporting unlimited
languages.

#### Send Translated Text
Your data source must store and manage translations for every language.

## How It Works
Instead of sending the actual text, the data source will provide the
Translation Key as a string value. HELIO looks up the
Translation Key in its translation database and displays
the correct translation for the current language.
For example, displaying dynamic status messages like `The temperature is too high` or `The temperature is too low` based on your PLC's internal state:
| Data Source Sends | Translation in HELIO | User Sees (e.g., English) |
| `"Status.TemperatureTooLow"` | **Key**`"Status.TemperatureTooLow"`**en-GB**`"Temperature too low"`**de-DE**`"Temperatur zu niedrig"` | `"Temperature too low"` |
| `"Status.TemperatureTooHigh"` | **Key**`"Status.TemperatureTooHigh"`**en-GB**`"Temperature too high"`**de-DE**`"Temperatur zu hoch"` | `"Temperature too high"` |

## Related

#### Data Variable Types
Translation Keys with Values (Data Variable Type)

#### Content
Internationalization (i18n)
What Are Translations and Translation Keys?
Translation Manager
