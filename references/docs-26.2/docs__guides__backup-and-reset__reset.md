
# Reset HELIO to Its Initial State
Since HELIO stores all of its data in a single HELIO Data Directory, resetting
HELIO to a clean, factory-like state means removing this directory.

### This Action Cannot Be Undone
Deleting the HELIO Data Directory will permanently remove all projects and data stored within HELIO. Make sure you no
longer need this data or Backup HELIO first.

### Keep Your License Key at Hand
Deleting the HELIO Data Directory also removes your
activated license. After resetting, HELIO will ask you to activate it again
the next time it starts — so keep your license key ready, or see
Licensing Help if you need to look it up.

## Reset the Data Directory
- Stop the HELIO Runtime.
- Locate your Data Directory for your operating system.
- Delete the directory (or move it aside, if you'd rather archive it than delete it outright). Note that this removes the data of **every** HELIO version that has ever run on this machine. To reset only the version you're currently running, delete just its version-specific subfolder inside the Data Directory instead.
- Start HELIO again. It recreates an empty Data Directory and the initial default IDE user, exactly as on a brand-new installation.
**Learn more** with the following resources:
- Data Directory
