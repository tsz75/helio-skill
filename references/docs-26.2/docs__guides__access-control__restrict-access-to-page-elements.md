
# Restrict Access to Elements
In the previous step, you learned how to Restrict Access to Pages.
Now, we will take a more granular approach and restrict access to specific page
elements.
- Add machine controls to your HMI
Open the Content View and add Machine Controls to
`Footer` slot of your HMI:
←
→
- Limit access
Often important actions like these are restricted to experienced users.
So let's use the
Display Condition of the `Machine       Controls` element to make show it when users with `Administrator` roles
are signed into the HMI. Activate the option and choose
Restrict To Users as the type of the `Condition`
property.
←
→
- Test the restrictions
Seems like we're ready to give our HMI another test drive. Switch to the
`Test` mode and sign in as `Operator` and `Administrator` and see how
the element reacts:
Mission accomplished!
- Now as a final lesson we'll have a quick look at how you can
empower your customers to manage their users from withing the HMI…
