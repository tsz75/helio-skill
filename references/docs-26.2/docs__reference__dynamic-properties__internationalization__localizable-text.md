
# Localizable Text

## About
This feature allows you to add texts in your HMI that can be translated
later. Any text you add will be automatically stored in your HELIO
instance's translation tables. You can see all your translations using the
Translation Manager.

## Anatomy
- **Translation Key**Title or key of the translation
- **Edit translations for localized text**
- **Choose translations from existing list**
- **Set translations**How many translations have been set for the specified translation key

## Including Dynamic Data Using Placeholders
You can use the `{<VariableName>}` syntax to create placeholders in within the text.
For each placeholder a new Dynamic Property will be
created that you can use to fill the placeholder with data.
In this example a placeholder `{temperatureLevel}` has been added to the
text. The value of the placeholder is filled with the Data Variable
`/Examples/Concrete/Temperature/Default`.

## The Translation Manager
After you’ve created an HMI with lots of `Localizable Texts` your
Translation Manager will look something like this.
Each new translation you’ve created in your HMI will lead to a new entry in
this table.

## What is the Translation Key?
The text you enter for this property will be used as the `Translation Key`. This
key uniquely identifies a translation throughout your HELIO runtime and across
all the projects.
In this example, "Temperature" is the Translation Key. Whenever you enter
this text in another part of the HMI, it will be automatically translated to
"Temperatur" if the language is set to German aka de-DE.

## Strategies for Choosing Translation Keys
**Using the Default Language**
This is the default approach.
- You enter the text in the default language within the Content Editor.
- The text of the default language becomes the translation key.
'Temperature' becomes the translation key

#### Pros
- Intuitive and quick method to begin with.
- Best suited for prototyping as it requires less upfront planning.

#### Cons
- More challenging to scale, especially when building HMIs for multiple products.
**Using Unique Identifiers**
Another approach that is often taken when building more complex HMIs.
- You enter unique identifiers without any reference to the default language.
- Translation keys are organized using namespaces that provide context and purpose of the translation.
'quantities.temperature' becomes the translation key

#### Pros
- More stable translation keys

#### Cons
- More upfront planning and team communication required

## Related Guides
- Internationalization (i18n)
