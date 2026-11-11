
# HMI Preview Panel
The `HMI Preview Panel` offers a real-time preview of your HMI, allowing you to
see the effects of your configuration as you adjust it. It features two
`Interaction Modes`: `Edit Mode` and `Test Mode`.
Additionally, there's a switch to alternate between `Data Modes`, letting you
display either live data or placeholder data.

## Anatomy
- Switch to toggle between `Data Modes`.
- Switch to toggle between different devices sizes.
- Switch to toggle between `Interaction Modes`.
- Live preview of your HMI as you make changes. It will adjust instantly
to any modifications you make.

## Data Modes
PLC Mode
When PLC Mode is active, HELIO will connect to data sources such as a
PLC Connection and display the actual data from the
connected source.
**Note:** You are live editing actual data from your PLC! Be cautious and make
sure not to execute critical functions in this mode.
Placeholder Mode
When Placeholder Mode is active, HELIO **does not connect to data sources**.
Instead, it displays the Placeholders that you have defined for your HMI data.
This makes it the perfect mode for working without access to the PLC. For more
information on how to define placeholders, please refer to Placeholders.

## Interaction Modes
Edit Mode
When `Edit Mode` is active, you can select the parts of the HMI you would like to
configure. This will be the default way to work when editing your HMI. In this
mode you will not have the ability to interact with elements like buttons and
inputs.
**Previously hidden parts may become visible!** Switching to this mode may
reveal parts of your current page that were hidden during `Test Mode`,
such as elements with a set
Display Condition. This is intentional, allowing
you to configure all elements, even if they might be hidden in the HMI
later.
Test Mode
When `Test Mode` is active, you can interact with your HMI as an operator would.
This allows you to quickly test a specific feature without having to save the
entire HMI and view it in a separate browser tab. In this mode you will not have
the ability to inspect elements.
**Elements might be hidden!** When switching to this mode, parts of your current page may
be hidden, such as if the Display Condition of some elements has been set.
This is intentional so that you can truly test how the HMI looks for a
particular role.

## Related

#### Pages
Keyboard Shortcuts (Content View)
