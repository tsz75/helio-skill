
# Upgrade HELIO to 26.1.1
HELIO 26.1.1 contains
no breaking changes – for most setups, upgrading is a straightforward drop-in
replacement. The notes below document a few behavioral changes that may be
relevant depending on how you have configured your deployment.

### Before the Upgrade
Before beginning any version-specific upgrade steps, be sure to follow all the
steps in the Before the Upgrade guide.

## Upgrade Notes

### Template Translations Updated
With HELIO 26.1.1, the translation keys used in templates have been updated to
follow a uniform and consistent naming scheme. This change brings two important
improvements: your own custom translations no longer interfere with template
translations, and the overall structure is easier to understand and maintain.

### Action Required When Using the New Templates
One thing to keep in mind: If you want to create a new HMI from the updated
templates, you will need to import the new translations in order for them to
work properly.
- Backup Your Existing Translations
Before importing, export your current translations from the
Translation Manager
as a backup.
- Download & Import New Translations
- `Download HELIO-26.1.1-Translations.json`
- Import this file using the Translation Manager.
- Be Inspired
While you're at it, consider adopting a similar naming scheme for your
own translation keys. It keeps your translation table structured and
easy to navigate — and may help avoid compatibility issues down the road.

### Command-Line Parameter Updated
HELIO-6440 The `--config` command-line parameter has been
deprecated in favor of a clearer replacement:
If you start HELIO using the default options — for example, on your
development machine — nothing changes for you. This only affects deployments
that explicitly pass `--config` on the command line.
| Deprecated | Replacement |
| `--config` | `--appdata` |
The deprecated parameter still works in this release but will be removed in a
future version. If you use it in startup scripts, service definitions, or
deployment configurations, update it at your convenience.
See Command Line Parameters for the full reference.

### OPC UA Connection: DI Namespace Excluded from Browsing by Default
HELIO-6954 New OPC UA connections now exclude the OPC UA DI
namespace (`http://opcfoundation.org/UA/DI/`) from browsing by default.
See OPC UA Connection for details.

### No Action Required for Existing Connections
This only applies to newly created connections — existing connections are not
affected. Keep this in mind when setting up new OPC UA connections: if your
PLC and HMI rely on the DI namespace, you can always opt out and remove the
exclusion in the connection's advanced `Browsing` settings.

### Project URLs Updated
HELIO-5954 The project URLs have been restructured to pave
the way for more powerful URL-based features. The URL format for accessing a
running HELIO project has changed:
| Before | After |
| `/runtime/<project>` | `/project/<project>/run` |

### No Action Required
Existing bookmarks and shared links continue to work — HELIO automatically
redirects the old URL format to the new one. If you have the old format
hardcoded in external systems, dashboards, or scripts, update them at your
convenience.

### "Method Output Parameter" Renamed
HELIO-1931 The dynamic property previously called **Method Output
Parameter** has been renamed to Method Output Argument to align with the terminology
used in the Data View.

### No Action Required
Existing projects are migrated automatically.

### Machine License File Location Changed
HELIO-6544 Machine license files have been moved from the
Data Directory root into the versioned slots of this
directory.

### No Action Required
HELIO handles this automatically. However, if you maintain manual backups of
your data directory, you may notice the changed location.

### Legacy "Messages" Slot Removed (Messaging v2 only)
HELIO-6523 For projects that have already migrated to Messaging v2,
the legacy "Messages" slot has been removed. Projects that have not yet migrated
to Messaging v2 are not affected.
Mission accomplished!
You've successfully upgraded to `HELIO 26.1.1`. Enjoy the new 2D Plot, the
improved Gauge & Radial Bars, and all the other improvements this release brings.
Happy HMI Engineering!

## Got Stuck and Need Help?
If you encounter issues during upgrade:

### Got Questions or Need Help? Don't Hesitate to Ask!
Feel free to reach out to our support team. We are always happy to help in any way we can!
→ Submit a Support Request

### Contact Support from Within HELIO
To access our support team, go use the
Help Buttons within the
Project Editor.
