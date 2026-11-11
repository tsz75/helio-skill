
# Access Active and Archived Messages
In the previous steps, we learned how HELIO displays messages as a dialog and
how to introduce a global message indicator in the header of our HMI.But how can operators view the entire collection of all
active and archived messages? And how can they get there from any page
page within our HMI as quickly as possible?We'll get to the bottom of these questions in this next step. And you may
already know the answer: HELIO has got a page for that!
- Add the `Message Page`
Displaying a list of active and archived messages is actually quite easy
in HELIO, since there is a ready-made page for it: the Message Page,
which already contains the right tools to browse these messages and is
fully connected to the Messaging Storage.
Make sure to reset all the triggers you defined in any previous steps,
so no more messages will be active.
Add a Message Page to your HMI.
Your page should look like this:←→[img:]
- Open the Page as an Overlay
Messages are really important to operators, so it's crucial they're very easy to
reach. One of the most widespread ways to achieve this is to add a cell to your
header that allows operators to open the message page from any other page
within your HMI.Sound good? Then let's make it happen!
Active the `On click` property
Choose the Open Page as Overlay Action
Select the `Message Page` you've just created as the target.
Then your HMI should now be looking something like this:←→[img:]
- Optional: Hide the Message Page from Main Navigation
This is an optional step, as in some cases it may still be useful to to
make this page available from the main navigation as well. But in most
cases it is not necessary to show the page in the main navigation as it
might confuse the users.Click on the Message Page and locate the `Main Navigation` property group.
Choose the `Hide Page` option.

### Have Fun With Messages!
All right, everyone, this is it! We've been working towards this moment
for a reason. This is when we get to see all the configured elements in
action, interacting and simulating messages:
←
→
Mission accomplished!
You went through all the steps to get a full-featured messaging system with a built-in message archive in your HMI.

That's pretty much it for Messaging! Now go ahead and create some helpful
messages on your own.


Also check out the Messaging v2 template that has all our previous steps already setup for you.
