
# Traits
Traits define the type and capabilities of your
Custom Elements. They tell HELIO where and how your element
can be used.
**Common Traits Include:**
- `traits.Control` can be added to a Dashboard Page, a Dashboard Widget, or a Parameter Page.
- `traits.Widget` can be placed on a Dashboard Page.
- `traits.Page` let you create pages that take up the whole viewport of your HMI and will be made available in the main navigation.
- `traits.BufferedChanges` adds the option for buffering changes locally.
In general elements can have multiple traits, allowing them to be
used in different contexts. A good example is `traits.Page` combined with
`traits.BufferedChanges` to create a page that caches changes until manual saving.
But not all traits can be combined, e.g. `traits.Widget` and `traits.Control`
cannot be used together, since an element cannot possess both characteristics;
it is either a widget or a control.
Furthermore, some trait combinations require them to be listed in a specific order.
So please check the docs of each trait for further requirements.
**Learn more** with the following resources:
- Learn how to apply traits using the Create a Control Element guide.
- Check out Extend HELIO Using the SDK to learn how you can build custom
elements using the HELIO SDK.
