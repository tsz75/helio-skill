
# Create an Element With Migrations
As your Extensions evolve, you may need to change the structure of your
element properties – renaming props, changing types, or adding new features.
Migrations ensure that projects using older versions of your elements continue
to work seamlessly when updated. This guide shows you how to use HELIO's migration
system to maintain backward compatibility as your extensions grow.

## 1. Basics
Before creating the element, you should be familiar with the basics of creating
elements, including Namespaces, Traits,
and Props Schemas. If you need to review these concepts,
start with:
Create a Control Element

### How Migrations Work
Migrations become necessary when you need to change the
Props Schema of an existing element. This could mean
renaming properties, changing their types, or adding new properties.
Migrations Form a Chain
This chain runs automatically when HELIO loads a project.
Migrations Transform Data
These transformations are applied from the initial version up to the
latest version.
Append Only
Always append migrations. Never insert them between existing
migrations or modify the schema structure in any other way.
Let's have a look at how different elements handle a migration chain which
consists of three versions:
- An element stored in the `initial` version will first execute the `initial→V2` migration, then the `V2→V3`
migration.
- An element stored in `V2` format will run: `V2→V3` migration only.
- An element already in `V3` format needs no migration.
Your element always receives props matching the latest schema after all applicable
migrations have completed.

### Never Modify Shipped Migrations
Once a migration is released, never change it. If you find issues or need
to make adjustments, append a new migration. Modifying migrations can
corrupt data in projects that have already applied them.
Migrations transform user data. If your migration function doesn't properly
handle all cases or forgets to copy values, data can be permanently lost.
Always test migrations thoroughly before release.

## 2. Example
The following example demonstrates an element that evolves through three
versions:
| `Initial` | The element starts with two simple properties - a string `status` and a number `count`. |
| `V2` | The `status` property is renamed to `statusMessage` to better clarify that it contains human-readable text rather than a status code. This is a common migration pattern to clarify whether a property contains human-readable text versus a code or enum value. |
| `V3` | The `count` property is upgraded from a simple number to a Dynamic Property, allowing it to be connected to data sources. Additionally, a new boolean property `isActive` is introduced. |
Let's have a look at how this migration chain is actually defined in code:
```
import { createElement, createPropsSchema, dynamicProperties, props, RenderDynamicProperty, traits, } from '@hmiproject/helio-sdk';
import { Fragment } from 'react';
import { namespace } from '../../namespace';

export const elementWithMigration = createElement(namespace, {
  name: 'Element with Migration',
  description: 'An element that showcases migration support',
  traits: [traits.Control],

  propsSchema: createPropsSchema()
    // V1
    .initial({
      status: props.String({ 
        label: 'Status', optional: false, defaultValue: 'Default Value' 
      }),
      count: props.Number({ 
        label: 'Count', optional: false, defaultValue: 0 
      }),
    })
    // V2
    .migrate(
      {
        statusMessage: props.String({ 
          label: 'Status message', optional: false, defaultValue: 'Default Value' 
        }),
        count: props.Number({ 
          label: 'Count', optional: false, defaultValue: 0 
        }),
      },
      (prevProps) => {
        return {
          statusMessage: prevProps.status,
          count: prevProps.count,
        };
      },
    )
    // V3
    .migrate(
      {
        statusMessage: props.String({ 
          label: 'Status message', optional: false, defaultValue: 'Default Value' 
        }),
        count: props.DynamicProperty({
          label: 'Count',
          optional: false,
          defaultValue: dynamicProperties.StaticValue(0),
          valueType: 'Integer',
        }),
        isActive: props.Boolean({ 
          label: 'Is active', defaultValue: true, optional: false 
        }),
      },
      (prevProps) => {
        return {
          statusMessage: prevProps.statusMessage,
          count: dynamicProperties.StaticValue(prevProps.count),
          isActive: true,
        };
      },
    ),
  Component(props) {
    return (
      <Fragment>
        <div>Status message: {props.statusMessage}</div>
        <div>
          Count: <RenderDynamicProperty value={props.count} />
        </div>
        <div>Is active: {props.isActive.toString()}</div>
      </Fragment>
    );
  },
});
```
L
10
-
19
The `.initial()` method of your Props Schema defines the
first version of your element's properties. In this case, the element started
out with a String property called `status` and a numerical property called
`count`.
L
20
-
36
New schema versions can be introduced by calling `.migrate(nextSchema,     migrationFn)` on the latest schema. This function takes two arguments.
L
22
-
29
The first argument defines the `nextSchema`. In this next version, the
`status` prop is renamed to `statusMessage`.
L
30
-
35
The second argument is a function to actually apply the migration. It can
perform transformations, copy data, or calculate new values and has to
return an object that matches the `nextSchema`.
L
32
In this case, you copy the value of the `status` prop to the new
`statusMessage` prop.
L
33
The `count` prop gets passed along unchanged.
L
38
-
70
Next, we migrate to V3 since migrations can be chained
indefinitely as new requirements are added.
L
40
-
42
The `statusMessage` prop remains unchanged in this version.
L
43
-
48
The `count` prop is changed to be a dynamic property instead of a
simple number.
L
49
-
51
We also introduce a new prop `isActive` that was not part of any
previous schema.
L
53
-
59
HELIO keeps running all migration functions for any element that is still
using an older configuration. When it encounters elements of V2, only
this function will run. For elements of V1, both V2's and V3's
migration functions will run, one after another.
L
56
The `count` property is no longer a simple number. So, you use its
previous value to instantiate a `Static Value` dynamic property.
L
57
You include a default value for the new `isActive` prop.
L
61
-
71
Components are guaranteed to always receive props that match the most
recent schema after all migrations have been applied.
Mission accomplished!
You now understand how to define migrations for an element which is
the foundation for creating sustainable and long-lasting extensions.
