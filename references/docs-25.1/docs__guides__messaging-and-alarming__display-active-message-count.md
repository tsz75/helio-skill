
# Display Active Messages Count
In the previous steps, we learned how to trigger messages and saw how HELIO
displays them as a dialog when they are triggered by our PLC, which is great.
However if an operator simply closes the new message, there is no indication within
our HMI that there is still one or more messages currently active.Sounds like an important challenge we should solve as soon as possible.
Fortunately, there is already a Dynamic Property that
allows us to do just that. So let's add a global active message indicator.
- Add A New Header Cell
- Add a Header Cell to the header of your HMI.
- Choose a nice `Icon` that communicates what operators are going to see when
they activate this header.
←
→
- Activate and Configure the Badge
- Activate the `Badge` property of the Header Cell element.
- Use the Dynamic Property Number of Active Messages
and configure it to count all the messages, no matter which status or level.
←
→
- Simulate Message And Test the Result
So try simulating multiple types and level of messages and see how the
header cell and the badge respond. Have fun!
Mission accomplished!
We've introduced a global place in the header to display the number of active
messages. In the next step you'll learn how to display a collection of all
active and archived messages, have fun!
