
# Upgrade HELIO to 26.2.0
HELIO 26.2.0 does not
introduce breaking changes. The notes below document a few behavioral
changes that may be relevant while working with the IDE.

### Before the Upgrade
Before beginning any version-specific upgrade steps, be sure to follow all the
steps in the Before the Upgrade guide.

## Upgrade Notes

### "Main Action" Renamed and Integrated Into "Container" Settings
HELIO-6747 The `Main Action` property, previously found on
individual elements, is now supported uniformly across all elements that have
a `Container` and has been integrated into the `Container` settings. It is
now simply called `Action`.

### No Action Required
Existing projects are migrated automatically.

### Renaming in the Content Tree Is Now More Predictable
HELIO-7368 HELIO used to synchronize an element's name in the
HMI Content Tree with its `Title`/`Label` property in both directions — a logic that
could lead to unintended data loss, for example silently overwriting a `Title`
connected to a `Data Variable` when the tree name was changed.
With HELIO 26.2, this is replaced by a simpler heuristic: by default, an
element's tree name is still derived from its `Title`/`Label` property. It will
still be translated automatically if that property is connected to a
Localizable Text. As soon as you manually rename the
element in the tree, that name takes over — HELIO no longer syncs it back into
the properties.

### Clear the Name to Resume Syncing
To go back to the automatic behavior, simply rename the element in the tree and
clear the name field. HELIO will then resume deriving the tree name from
the element's `Title`/`Label` property.
Mission accomplished!
You've successfully upgraded to `HELIO 26.2.0`.
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
