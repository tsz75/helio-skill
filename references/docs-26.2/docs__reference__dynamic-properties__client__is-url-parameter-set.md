
# Is URL Parameter Set
This property returns `true` if the given
URL Parameter has been specified in the URL of the
browser.
In this example, the element will be visible when the URL looks like this:
`http://localhost:8512/project/MyHMI/run?enableAdvancedSettings`
And the element will be hidden when the URL looks like this:
`http://localhost:8512/project/MyHMI/run`

### Value is Ignored
- HELIO will only check to see if the parameter exists, not what its value is.
- Therefore, an actual value does not need to be set.
If you want to use the actual value of the parameter, check out URL Parameter Value.

## Related

#### Dynamic Properties
URL Parameter Value

#### Question
What are URL Parameters and How can I use them?
