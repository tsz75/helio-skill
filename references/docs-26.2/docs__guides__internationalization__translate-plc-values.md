
# Translate Texts From Your PLC
Before diving into the details, you may want to review these fundamentals
first: What Are Translations and Translation Keys?

## Basic Example
Suppose you want to send an error message from your PLC to the HMI. You likely
wouldn't want to store the translation on your PLC, along with all other
language translations.
Instead, you would prefer to send a unique key for this particular
translation. The HMI would automatically translate this key into the language
currently selected by the user.
That's precisely the purpose of the
Translation Key (Data Variable Type) data type. It can be used to let HELIO
know that a particular variable should be translated automatically.

## How Does It Work?
In the following example, the PLC provides a string variable. However, its data
type is set to `TranslationKey` in the HMI project. This variable currently
holds the value `"ErrorMessage.500.Title"`.
The HELIO Runtime checks the variable type, looks up the key in its
translations, and renders the translated text in the HMI. In this case, the text
is `“Not Allowed To Execute This Action”`.

## How to Define Translations and Translation Keys
- Import the PLC variable (of type `String`) into your project using the
Data View.
- Change its type from String to Translation Key (Data Variable Type) and
- Link it to the property of an Element inside the Content View.
For instance, the title of a `Message` element.
- Ensure your variable will be set to a unique set of keys, such as
`"ErrorMessage.500.Title"`. Typically, these keys are defined in collaboration
with engineers from the PLC team.
- Use the Translation Manager
to add the unique translation keys `"ErrorMessage.500.Title"`, along with
appropriate translations for each language.
- You're done! HELIO will now ensure that the values provided by your PLC are
displayed in the currently active language inside the HMI.

## Related

#### Content
Translation Manager

#### Data Variable Types
Translation Key (Data Variable Type)
Translation Keys with Values (Data Variable Type)
