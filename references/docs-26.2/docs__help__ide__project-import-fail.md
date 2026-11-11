
# Why did my HELIO project import fail?

## Symptom
You have …
- …have exported a HELIO project and saved it on your computer as an
`<ProjectName>.helio` file. See
Export an Existing Project.
- …would like to import it into your active HELIO instance.
- …you get an error message during import that the project import failed.

## Resolutions
Did you export the project with an older HELIO 
(prior to 12.4) version?
**Cause**
**Starting with HELIO 12.5, exported projects created with older HELIO
versions (≤ 12.4) can no longer be imported**
Why this change? We are improving the upgradeability of the HELIO project
export format. With newer versions of HELIO, it is now possible to introduce
automatic upgrades when importing older projects. However, to achieve this,
we need to include additional metadata in the export that allows us to
determine the version we are upgrading from. Unfortunately, we cannot
retroactively add this metadata to old exports. So ask yourself the
following question before upgrading…
**Resolution**
See 1. Make sure to upgrade HELIO project backups if you plan to reactivate
with newer Versions of
HELIO

## Didn’t solve the issue for you?
-> Get Support
