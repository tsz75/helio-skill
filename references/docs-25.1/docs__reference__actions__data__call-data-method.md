
# Call Data Method Action

## About
The `Call Data Method` allows you to execute methods that you have imported
into your project from Data Source Types
such as the OPC UA Connection. Unlike
the Write Data Variable Action
, this action can be utilized to transfer multiple parameters to your PLC.
It's typically used to start processes or initiate asynchronous operations
in your PLC.

## Example
This action executes the `RandomizeQuote` method and provides a value
for the `CategoryId` parameter. In this case, a static number `1` is used.

## Properties

### Method Parameters
A list of all input parameters that the selected method has defined. For each
parameter you can provide a value. Since all parameters are   
 DynamicProperties ,
you can also hand over dynamic data from sources like your PLC to the method
call. For example to incorporate additional dynamic data, such as the Data
Variable Dynamic
property type.

### On success
Allows you to react to a successful execution of the method. Use
it to inform operators about the positive outcome of the method
call.ActionsShow Toast Action

### On error
Allows you to react to errors during a method call. Use
it to let operators know that something went wrong.ActionsShow Toast Action
