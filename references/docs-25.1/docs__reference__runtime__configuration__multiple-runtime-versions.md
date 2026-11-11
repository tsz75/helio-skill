
# Multiple Runtime Versions
Once you're finished evaluating HELIO and wanna start using it for serious
product development, you should think about where to store the
HELIO Runtime Directory.

## Why should I keep multiple runtimes?
Keeping previous runtime versions is a safety measure when upgrading HELIO to
a newer HELIO Runtime version. It is good practice to keep the previous
HELIO Runtime Directory while you're upgrading until
you can confirm that the migration was successful. By the way: HELIO uses
its
HELIO Data Directory to keep backups of your
project data.

## Where should I store them?
Basically you can move the extracted Runtime Directory to any location on your
hard drive that your user has permission.
Depending on your operating system you might use some standard locations.
- On WindowsOn LinuxOn macOS
`Program Files` directory
Move all the
HELIO Runtime Directory to a directory that you have
full access to.
For example you can **store it in your `Program Files` folder:**Recommended`%ProgramFiles%\HELIO-X.X.X`Example`C:\Program Files\HELIO-24.1.0`
`User Directory` directory
You don't have the necessary permissions to move HELIO into `Program         Files`
directory? **Use your `User Directory`** and create a folder to store
your `HELIO-Runtimes` there.Recommended`%HomePath%\HELIO-Runtimes\HELIO-x.x.x`Example`C:\Users\YourUserName\HELIO-Runtimes\HELIO-24.1.0`
| Recommended`/opt/HELIO-X.X.X`Example`/opt/HELIO-24.1.0` | `/opt/HELIO-X.X.X`Example`/opt/HELIO-24.1.0` | Example`/opt/HELIO-24.1.0` | `/opt/HELIO-24.1.0` |
| Example`/opt/HELIO-24.1.0` | `/opt/HELIO-24.1.0` |
| Recommended`/Applications/HELIO-X.X.X`Example`/Applications/HELIO-24.1.0` | `/Applications/HELIO-X.X.X`Example`/Applications/HELIO-24.1.0` | Example`/Applications/HELIO-24.1.0` | `/Applications/HELIO-24.1.0` |
| Example`/Applications/HELIO-24.1.0` | `/Applications/HELIO-24.1.0` |
