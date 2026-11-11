
# Providing Options Using Enumerations
Another way to guide operators is to let them choose between distinct
options. In HELIO this is done using Enumerations.

## Via the Data Tab
- Create a string or numeric variable
- Navigate to the Data View.
- If you haven't already done so, create a variable of the following types: Numeric Data Variables or String.
- Add possible options using enumerations
- Locate the `Enumeration` group and activate it for this variable.
- Add possible values for this variable and provide a label for each
state.
- These labels will be used in the HMI, for example if you want to
display a dropdown for setting the machine's state.
- Using enumerations to provide options to `Operators`
- Add Magic Input element to your project.Link its `Value` property to the variable you just defined.Use the `Control type` property to determine how these options are provided to operators.
