
# Define Limits For Numerical Input
Numerical Input is crucial for each machine. Operators need to be able to use
steppers but also the keyboard to input numerical data manually. In both cases
defining limits allows HELIO to provide guardrails for operators.
- **Option:** Using the Data View
Navigate to the Data View and follow these steps:
- Define a numeric variable in the
HMI Data Explorer.
- Set a `Minimum` for this variable to a reasonable value.
- Also set a `Maximum`.
- **Option:** Using the QuickEdit button inside the Content View
Navigate to the Content View and follow these steps:
- Setup a Parameter Page including a  Magic Input
- Link the `Value` property the variable you created in the previous step.
- Click the `Quick Edit` button.
You'll see the same variable properties as before and can change them right
from within the Content View.  Use the `Confirm` button of
the `Edit Variable` dialog to apply the changes to the preview.
**Note:** Changes won’t be persisted to your project until you hit
the `Save` button.
- Test the limits
Switch to `Test` mode and play around with the input to find out what
HELIO does to prevent input outside of the value range:
