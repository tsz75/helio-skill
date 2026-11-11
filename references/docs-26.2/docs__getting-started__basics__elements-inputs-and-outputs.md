
# Elements, Inputs & Outputs

## What Are Elements?
`Elements` are the basic building blocks for your HMI, kind of like
Lego blocks for your interface.
Pretty much anything you can add to a
Page is an `Element`. Think `Dashboard Widget`,
`Button`, or a `Gauge` - yup, they're all elements. Each `Element` has
properties you can tweak and adjust to get it just right for your needs.
←
→

## What Are Inputs?
`Inputs` are Elements that allow your operators to manipulate, edit, or
enter data, thereby changing the state of your PLC.
A `Numeric Stepper` is a wonderful example of an `Input`. It lets operators
increase and decrease a value or just type in a whole new one.
HELIO also provides the Magic Input.
It's magic because it adapts to whatever type of variable you're working
with, showing you the UI that fits best with your data.
If you link an integer variable to it, the `Magic Input` becomes a `Numeric     Stepper`. Got a boolean? It'll turn into a Switch. Quite useful, isn't it?
←
→

## What Are Outputs?
`Outputs` are the exact opposite of `Inputs`. They will display
data in your HMI in different ways without the ability to edit the data.
Some examples for `Outputs` are `Gauge`, `Pie Chart`, and `Radial Bars`. We
realized how much time can be saved by using our `Magic Input`, so we decided
to add a `Magic Output` as well! It can transform into different variants based on
the type of the linked data.
←
→
