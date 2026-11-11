
# Data Directory

## About
The HELIO Data Directory is a crucial component of the HELIO runtime
environment. It is the primary location where the runtime stores all of its
data, including project files, user databases, and basic runtime configuration.

## Default Location
HELIO keeps its Data Directory in an OS-specific location. This folder is
created when you first launch the Runtime on your development machine or your
target device.
| Operating System | Path |
| Linux | `~/.config/HELIO` |
| Windows | `%AppData%\HELIO` |
| macOS | `~/Library/Application Support/HELIO` |

## Anatomy
**Organized by HELIO-Version Number**
HELIO manages this directory using folders for every HELIO version that has
been installed on this machine:
```
  HELIO (Data Directory)
  ├─ 8.4.0
  │  ├─	...
  ├─ 9.7.0
  │  ├─	...
```
**Upgrades & Migrations Handled with Care**
When a new HELIO version is run for the first time, the most recent version
folder with all of its data will be cloned.
**Tip:** The version directories are cloned by creating hard links instead
of proper copies. This preserves disk space, since assets do not occupy
any additional disk space as more cloned slots are created.
If you revert to a previous HELIO version, the original data will be used.
```
  HELIO (Data Directory)
  ├─ 8.4.0
  │  ├─	...
  ├─ 9.7.0
  │  ├─	... 
  ├─ 10.0.0
  │  ├─	Most of the new files in here will be hard
  │  │  links to previous versions.
```
If the upgrade didn’t work, you can always go back and open your previous
version of HELIO which will simply uses the old untouched version folder.
Once this done, you can safely report a bug by contacting our support, have the
issues resolved and fixed. And then update to the fixed version.
