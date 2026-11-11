
# Best Practices for Translating Your HMI
**In Case You Didn't Know: It’s Unicode All the Way Down**HELIO uses Unicode to display a wide range of characters, making it possible
to work with languages that use non-Latin scripts.

## 1. Define the Languages Your HMI Project Needs to Support
Open your project in the Project Editor
to define the supported languages of your project.
- Switch to the Content View
- Open the Project Settings
- Find the `Languages` property group in the Properties Panel.
- Add the languages by providing a `Name` which will be used by the
Language Chooser in your HMI. As well as correct `Locale` (Locale ID) for
this language.
←
→
Not sure which Locale ID to choose?
Here’s a list of the most common languages and their locales…
`en-GB` English (United Kingdom)
`en-US` English (United States)
`fr-FR` French (France)
`es-ES` Spanish
`de-DE` German
`it-IT` Italian
`jp-JP` Japanese
`pt-BR` Portuguese (Brazil)
`pt-PT` Portuguese (Portugal)
`nl-NL` Dutch (Netherlands)
`ru-RU` Russian
Locale ID is not included? → See Microsoft's complete list of Locale
ID.

## 2. Create Your HMI Using Your Default Language and Localizable Texts
HELIO has several built-in features that make translating your content easy.
First, it allows you to define texts within the HMI that you would like to be
translatable using the Localizable Text.
If you use this type of text definition, it will automatically be included in
the translations of your HELIO instance. You can view these translations using
the Translation Manager.

## 3. Export Language Files Using the Translation Manager
To export all the translations of your HELIO instance, open the Translation Manager
app and click on the `Export` button. You can use the exported CSV or JSON file
to add translations for all the supported languages.

## 4. Import the Translated Language Files Back Into Your HELIO Data Directory
Once translation is done, import your updated translations file using the
`Import` button in the Translation Manager.
Once the import is complete and successful, you can reload your HMI, switch to
the language of your choice, and display the translated text.
Having trouble with this step?
Why aren’t the special characters I added to the translation files rendered correctly in my HMI?
