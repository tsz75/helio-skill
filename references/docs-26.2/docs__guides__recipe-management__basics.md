
# Recipe Basics: Recipes and Recipe Types
Before you begin defining a recipe, it's helpful to know what a recipe
actually represents – and why you might need more than one recipe type for the
same machine.

## Recipes and Recipe Types
A `Recipe Type` groups the parameters that make up a recipe — which PLC
variables belong together. A `Recipe` is a saved instance of a Recipe
Type: a stored set of values for those parameters that can be loaded onto
the PLC all at once.

## Why More Than One Recipe Type?
As an example, two things often get modeled as separate recipe types on
the same machine:
- **Product Recipes** describe what is being produced — for example the
fill volume, mixing ratio, or target temperature for a specific product
variant. These parameters are largely independent of which machine runs
them.
- **Machine Recipes** describe how a specific machine achieves that
product — nozzle calibration, station-specific torque offsets, conveyor
speed. Two machines producing the same product variant can still need
different values here.
Splitting these into separate Recipe Types keeps them independently
maintainable: a product variant can move between machines without
touching machine-specific values, and machine-specific values can be
tuned without redefining the product.
Ready to define your first Recipe Type? Let's get started by importing
parameters from a PLC.
