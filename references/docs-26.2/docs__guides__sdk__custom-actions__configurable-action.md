
# Create a Configurable Action
A custom action can be configured by your users. You can utilize
Props Schemas to define the properties that the users of
your action can configure, making your action much more flexible.
Even better, you can make use of HELIO's
Dynamic Property system to make the
configuration of your action even more dynamic.

## 1. Basics
Before creating the action, you should be familiar with the basics of creating
actions, including Namespaces and
Props Schemas. As well as a basic understanding of the
Dynamic Property system. If you need to review
these concepts, start with:
Create a Basic Action
What Is a Dynamic Property?
Some properties have an additional secret superpower: the users of your
extension can change their types. These properties are called
Dynamic Property.
See Dynamic Property Basics
for more fundamentals.
Even better, you can even define your own custom Dynamic Properties and make
HELIO even more tailored to your needs.

## 2. Example
This example action illustrates how to define a configurable `message` property
that is then displayed by the browser's built-in
alert()
method. On top of that, another dynamic property, `isDisabled`, is
defined that lets your users disable your action.
```
import { createAction, createPropsSchema, dynamicProperties, props, useDynamicProperty, values, } from '@hmiproject/helio-sdk';
import { Fragment } from 'react';
import { namespace } from '../../namespace';

export const configurableAction = createAction(namespace, {
  name: 'Configurable Action',
  description: 'Performs custom logic',
  icon: { name: 'Runner' },

  propsSchema: createPropsSchema().initial({
    message: props.DynamicProperty({
      label: 'Message',
      valueType: 'String',
      optional: false,
      defaultValue: dynamicProperties.StaticValue('Action called!'),
    }),

    isDisabled: props.DynamicProperty({
      label: 'Is disabled',
      valueType: 'Boolean',
      optional: true,
    }),
  }),

  useAction(props) {
    const message = useDynamicProperty(props.message, { 
      valueType: values.String() 
    });
    const isDisabled = useDynamicProperty(props.isDisabled, { 
      valueType: values.Boolean() 
    });

    return {
      canCall: props.isDisabled ? !isDisabled.value : true,

      call() {
        alert(message.displayValue);
      },

      render() {
        return (
          <Fragment>
            {message.render()}
            {isDisabled.render()}
          </Fragment>
        );
      },
    };
  },
});
```
L
10
-
23
Your Props Schema is you define the custom properties
of the action.
L
11
-
16
First, you define a `message` property and set its type to be a
`Dynamic Property` using the DynamicProperty() function.
L
12
The `label` lets you define how this property will be labeled in the
Properties Panel.
L
13
You narrow down the types that can be selected by your
users. In this case, you want to ensure that only strings can be selected
for this message. HELIO will then make sure that properties that produce
numbers or Booleans cannot be set here.
L
15
You set a default value for this property, which is especially important in this case because you have configured this property not to be optional.
L
18
-
22
Next, you define a second Dynamic Property `isDisabled`. But in this case
you choose its value type to be a boolean.
L
25
-
49
The `useAction` function defines how your action behaves.
L
26
-
31
You utilize the `useDynamicProperty` hook to get the current configuration
of the dynamic properties that the user has configured for this action
instance.
L
34
`canCall` controls whether the action is currently executable. In this case,
you check if the `isDisabled` property has been configured, and if so, use
its inverted value to control executability.
L
36
-
38
The `call` method is executed when the action is triggered by the HMI user.
Here, you grab the `displayValue` of the message property and display it in
a native alert.
L
40
-
47
Dynamic properties must be rendered in order to receive their current
configuration.
Mission accomplished!
Congratulations! You have configured a fairly complex action that is now
dynamically configurable by your users.
