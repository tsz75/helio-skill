
# Why does my CSV import fail with a “Could not import list – Invalid data format” error?

## Symptom
You have …
- …created a Data Collection,
- …converted it into a List,
- …and used the `Export List Items to CSV file` action to download it onto your computer.
However, when you open it in Excel, add more rows, and try to upload it again
using the "Import List Items from CSV file" action, you encountered an error
message saying "Could not import list - Invalid data format".

## Explanation
**In
Case You Didn't Know: It’s Unicode All the Way Down**
HELIO uses Unicode to display a wide range of characters, making it possible
to work with languages that use non-Latin scripts.
To display special characters in HELIO, all files need to be encoded using
UTF-8. HELIO requires files to be encoded in UTF-8 and also creates them in this
format.
However, when editing these files using tools like Microsoft Excel, it might
change the default encoding of the files created by HELIO. This is especially
true if you have customers who entered data in languages that contain special
characters.

## Resolution
**When Using Microsoft Excel (Windows):**
- Open your CSV file with **Microsoft Excel**.
- Click on **File**.
- Select **Save As** from the dropdown menu.
- Click on the dropdown menu next to **File Format**.
- Choose **CSV UTF-8 (Comma delimited) (.csv)** from the dropdown menu.
- Click on **Save**.
Your new CSV file is now encoded in UTF-8 format and can be imported into
HELIO.
**When Using Numbers (macOS):**
- Open your CSV file with **Numbers**.
- Click on **File** at the top of your screen.
- Select **Export -> CSV...** from the dropdown menu.
- Click on the triangle symbol next to **Advanced Options**.
- Select **Unicode (UTF-8)** from the dropdown menu.
- Click **Next**.
- Choose a **Name** and **Location** for your file.
- Click **Save**.
Your new CSV file is now encoded in UTF-8 format and can be imported into
HELIO.
