
# Restrict Access to Pages
You've learned how to Restrict Access to Data.
However, controlling access is not only about data, but also about pages and
sections of your HMI. Now, let's explore how we can use roles to show or hide
entire pages in your HMI.
- Add a welcome page for everybody
Open the Content View of your project and follow these steps:
- Add a Parameter Page and change its title to `Welcome Page`.
This page will be visible to everybody including guests.
- Add a new Markdown element to the `Parameters` slot of this page.
- If you like, go ahead and adjust the text of the markdown or the icon
of the page.
- Add a page for `Operators` only
Duplicate the `Welcome Page`, and adjust its title to `Page for Operators`.
←
→
Adjust the
Display Condition of the page using the Restrict To Users
property type and check only the `Operator` role. This will make sure the page will be
visible to operators only and hidden for users that are not signed in.
- Add a page for `Admins` only
Duplicate the `Welcome Page`, and adjust its title to `Page for Admin`.
←
→
Adjust the
Display Condition of the page using
Restrict To Users and uncheck everything except
the `Admin` role. So this page will be visible only to admins.
- Test the restrictions
Seems like we're ready to give our HMI a test drive. Switch to the
`Test` mode and explore how signing into affects the navigation:
Mission accomplished!
Good job restricting access to those pages! If you want to be even more
specific, you can
Restrict Access to Elements in
the next section.
