
# Display Condition

## About
The `Display Condition` property determines whether an element or entire page
should be visible or hidden to the current user. The condition can be set to
different
Dynamic Properties – as long as the property type returns
`true` or `false` you’re good to go.
Want to learn more? We’ve put together a short video that walks you through
the basics in a bit more detail.
To watch this embedded YouTube video, you need to accept the marketing cookies.
Watch on
**Meet Your New Dynamic Besties!** Check out the following list of properties
and their practical use cases to figure out
what fits your use case best:
| Dynamic Property |  | When to Use |
| Restrict To Users | Restricts or displays elements to specific HMI User Roles. | You would like to show a specific field or even an entire page exclusively to users in the `Administrator` group. |
| Data Variable (Dynamic Property) | Restricts elements based on variables from your PLC. | Your machine must be able to support different hardware configurations, which requires showing or hiding specific parameters based on the machine model. |
| If Condition | Uses complex conditions to show or hide an element. | You would like to hide an element if a variable is below a certain threshold. **Make sure your condition always returns a `Boolean` value!** |
| Switch | Allows you to switch between different values depending rules you define. | You would like to display different icons in a `Header Cell` depending on the state of your machine. |
| Static Value | Displays elements based on a static boolean value. | You may want to toggle an element inside your IDE occasionally for debugging purposes. |
