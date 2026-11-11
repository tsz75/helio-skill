
# Create an Element With Action
Actions make your elements interactive by defining how
HELIO responds to user interactions. Whether it's a button click, a form
submission, or any other event, actions allow you to trigger behaviors like
writing data, navigating to different pages, or displaying alerts. This guide
shows you how to add configurable actions to your custom element.

## 1. Basics
Before creating the element, you should be familiar with the basics of creating
elements, including Namespaces, Traits,
and Props Schemas. If you need to review these concepts,
start with:
Create a Control Element
What are Actions?
Actions let your users tell HELIO how it should react to events or inputs
by operators. For example, when a button is pressed, HELIO can write a
data variable, show an alert, or navigate to a different page.
**Custom Actions**
- Enhance and extend the HELIO with custom logic that is tailored to your needs.
- Are controlled and configured by users. This lets you set up one button to do different
things, depending on how you configure it.
- Are configured using properties that are displayed in the
Properties Panel of the
Project Editor.

## 2. Example
The following example demonstrates how to create a button element with a
configurable action. In the properties panel, users can configure what happens
when the button is clicked.
```
import { createElement, createPropsSchema, props, traits, useAction } from '@hmiproject/helio-sdk';
import { Fragment } from 'react';
import { namespace } from '../../namespace';

export const elementWithAction = createElement(namespace, {
  name: 'Element With Action',
  description: '',

  traits: [traits.Control],

  propsSchema: createPropsSchema().initial({
    onClick: props.Action({ label: 'On Click', optional: true }),
  }),

  Component(props) {
    const onClick = useAction(props.onClick);

    return (
      <Fragment>
        {onClick.render()}

        <button 
          disabled={onClick.canCall !== true} 
          onClick={onClick.call}
        >
          Clickable Button
        </button>
      </Fragment>
    );
  },
});
```
L
11
-
13
Your Props Schema defines a property named `onClick`:
- The `props.Action` helper is used to let HELIO know that you want this
property to be an action
- You give your property a human-readable label called `On click` and mark
it as `optional`
L
15
Your React component will now be given a `props` object
that contains all the properties you have defined with your schema. In this
case, it contains an `onClick` property.
L
16
You utilize the `useAction` hook to get the current configuration of the
`onClick` action that the user has configured for this element instance.
L
20
Actions must be rendered in order to receive their current
configuration.
L
22
-
28
Render a custom button. Disable it when the `canCall` property of
the action is `undefined` or `false`. This could happen for example, if the
action has not been configured yet or if the current HMI user is not allowed
to execute this action.
L
24
Finally, execute the action by executing its `call` function whenever
your custom button is clicked.
Mission accomplished!
You now understand how to add actions to your custom elements,
making them interactive. Your elements can now respond to user
interactions in flexible ways, with behavior that users can customize to fit
their specific needs.
