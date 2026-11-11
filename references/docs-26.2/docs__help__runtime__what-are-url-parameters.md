
# What are URL Parameters and How can I use them?

## Challenge
HELIO uses URL Parameters in different contexts, but you're not sure what that means or how to use it.

## Explanation
Usually, a parameter is something that a user can provide to an application. Web
apps are programs that run in your browser and are accessed using a URL.
You can use the URL of HELIO HMIs to provide parameters to them and to adjust
and change their behavior.

### How Do URL Parameters Look Like?
URL parameters appear after a question mark (`?`) in a URL and consist of
key-value pairs separated by ampersands (`&`). Here's the basic structure:
**Single Parameter**
`https://my-application.com?location=factory-floor`
**Multiple Parameters**
`https://my-application.com?location=assembly-line&shift=morning&debug=true`

### Hash Fragments
Hash fragments are the part of a URL that comes
after the hash symbol (`#`). Unlike URL parameters, hash fragments are typically
used for client-side navigation and are not sent to the server when making
requests. In this example, `#section-name` is the hash fragment.
`https://my-application.com?location=factory-floor#section-name`

## Usage

### HELIO Project URLs
HELIO project URLs have two parts that identify your project and its child
elements, like pages. A typical HELIO project URL looks like this:
`http://localhost:8512/project/MyHMI/run#/fy8Ce4LrTLeR7KGtNwU_rA`
- Base URL: `http://localhost:8512/project/`
- Project Name: `MyHMI`
- Mode Name: `/run`
- Hash fragment: `#/fy8Ce4LrTLeR7KGtNwU_rA`

### How Does HELIO Use the Hash Fragment?
The hash fragment `#/fy8Ce4LrTLeR7KGtNwU_rA` is a unique identifier that HELIO uses to:
- Enable direct linking to specific pages or configurations
- Maintain session state and routing

### How can I specify URL Parameters for a HELIO Project?
URL parameters must be placed **before** the hash fragment. The correct format is:
`http://localhost:8512/project/MyHMI/run?parameter=value#/fy8Ce4LrTLeR7KGtNwU_rA`
**Single Parameter**
`http://localhost:8512/project/MyHMI/run?location=station-1#/fy8Ce4LrTLeR7KGtNwU_rA`
**Multiple Parameters**
`http://localhost:8512/project/MyHMI/run?location=station-1&shift=morning&debug=true#/fy8Ce4LrTLeR7KGtNwU_rA`

### Using URL Parameters in HELIO
- Provide additional context to your HMI, e.g. at which location of the machine
will this client be displayed
- Enable special features for selected customers

## Related

#### Reference
Configure HELIO HMIs Using URL Parameters

#### Dynamic Properties
URL Parameter Value
Is URL Parameter Set

#### Help
What are URL Parameters and How can I use them?
Why doesn't HELIO pop up the on-screen keyboard on my touch panel?
