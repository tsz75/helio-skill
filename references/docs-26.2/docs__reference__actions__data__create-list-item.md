
# Create List Item Action

## About
Adds a new item with the given properties to a List.

## Example
In this example, the `Click` event triggers an action that creates a new
entry in the `/Recipes/RecipesList` list. The specified values are used to
populate the properties of the new item.
We chose the UUID
for the ID, which generates a unique ID every time someone adds a recipe.

## Properties

### Parameters
List of input parameters that the method has defined and can be set when
calling it. You can utilize Dynamic Properties for each parameter, for example
to incorporate additional dynamic data, such as the Data Variable Dynamic
property type.

### Result
Allows you to react to the `Success` and `Error` event. Use
it to inform operators about the positive or negative outcome of the method
call. Most often this is used in combination with the `Show Toast` action.

## Related

#### Actions
Delete List Item Action

#### Elements
Dashboard Page
