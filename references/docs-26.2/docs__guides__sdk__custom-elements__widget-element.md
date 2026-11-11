
# Create a Widget Element
A widget is a container that groups related elements and information
on a
Dashboard Page. Check out
the built-in Dashboard Widget for an example.
This guide will walk you through creating a basic widget using the
createElement() function.

## 1. Basics
Before creating the element, you should be familiar with the basics of creating
elements, including Namespaces, Traits,
and Props Schemas. If you need to review these concepts,
start with:
Create a Control Element

## 2. Example
The following example demonstrates a minimal custom element that can be added to
a Dashboard Page, a Dashboard Widget, or a
Parameter Page.
```
import { createElement, createPropsSchema, traits } from '@hmiproject/helio-sdk';
import { namespace } from '../../namespace';

export const widgetElement = createElement(namespace, {
  name: 'Widget Element',
  description: 'An element that can be added to the Dashboard Page'

  traits: [traits.Widget],

  propsSchema: createPropsSchema().initial({
    // Add your custom props here.
  }),

  Component() {
    return <div>Widget Element Content</div>;
  },
});
```
L
8
Tell HELIO that this element can be used as a `Widget`. This will allow the
element to be added to Dashboard pages.
L
10
-
12
The `propsSchema` property defines the properties of your element that can be edited
in the HELIO IDE with the help of a Props Schema.
Note that the `Widget` trait automatically gives your element standard
properties like `Title` and `Icon`, so you only need to configure props that
are specific to your element.
L
14
-
18
The content returned from this
React Component will automatically be wrapped with a
widget container when displayed.
Mission accomplished!
Congratulations! You now understand how to build custom widgets.
