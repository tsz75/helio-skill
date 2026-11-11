
# Command Line Parameters
The HELIO Runtime comes in the form of a Command Line Interface (CLI). HELIO
is an executable file that can be started in different ways depending on your
needs. You can start HELIO with its default settings by simply double-clicking
the executable file. This will automatically open a terminal window where
HELIO is executed.
If you want to pass specific options or parameters to customize HELIO's
behavior, you'll need to run it manually through the command line.

### Why a CLI?
While graphical configuration tools are good for controlling complex behavior,
CLIs offer some pretty powerful and scriptable ways to control software
behavior.
This makes them especially useful for automated deployments or specific runtime
configurations.

## Basic Usage
To use HELIO with command line parameters:
- Open a Terminal window (Linux/macOS) or Command Prompt (Windows)
- Navigate to the directory containing the HELIO executable
- Type the command with any desired parameters
```
  $ ./HELIO [OPTIONS]
```

## Available Command-Line Parameters

### Print Usage
The following command provides an overview of all command-line parameters:
```
  $ ./HELIO --help
```

### Data Location
Replaces the deprecated `--config` option.
**`--appdata <APPDATA>`**
By default HELIO stores all of its configuration and data within the
HELIO Data Directory. This options lets you specify an explicit
path where HELIO should store its a configuration file and therefore keep its
HELIO Data Directory.
**Example**
In the following example HELIO will use `./HMI/data/` as its data directory:
```
  $ ./HELIO --appdata ./HMI/data/
```
This option is mutually exclusive with `--appdata-unversioned`.

### Unversioned Data Location
**`--appdata-unversioned <APPDATA_UNVERSIONED>`**
This disables the automatic versioning by subdirectories and uses the given
directory as-is. By default, HELIO uses subdirectories inside the appdata
directory for each release in order to facilitate rollbacks.

### Automated Data Directory Backups Will Be Disabled
This option is often used to put HELIO's data under version control, but using
it will disable HELIO's built-in mechanism to version its data directory after
a HELIO update.
So just make sure that before upgrading to a newer version of HELIO, you
create a backup or use version control by default.
**Example**
In the following example HELIO will use `./HMI/data/` as its data directory,
without creating intermediate directories for each HELIO version:
```
  $ ./HELIO --appdata-unversioned ./HMI/data/
```
This option is mutually exclusive with `--appdata`.

### Log Verbosity
**`-v…`**
By default HELIO logs only errors and warnings. The log verbosity
could be increased by `-v`/`-vv`/`-vvv` to include info/debug/trace
logs respectively.
| Parameter | Log Levels |
| none (default) | error/warn |
| `-v` | error/warn/info |
| `-vv` | error/warn/info/debug |
| `-vvv` | error/warn/info/debug/trace |
Caution: Enabling debug and trace logs will generate many log messages,
resulting in huge log files.
**Example**
The following command will increase the log level to info.
```
  $ ./HELIO -v
```

### Log Directory
**`--logdir <LOGDIR>`**
By default HELIO will write all of its logs to the console. Use this option to
specify a directory that HELIO will use to store its log files. HELIO will
create rolling log files in this directory which means new log files are
automatically created at regular intervals (such as daily) or when the current
file reaches a certain size limit. Files are preserved with
timestamps for historical reference.
**Example**
The following example will make sure HELIO will store its log files in the
`/var` directory, which is a common place to store such files on Unix systems.
```
  $ ./HELIO --logdir /var/log/helio
```
