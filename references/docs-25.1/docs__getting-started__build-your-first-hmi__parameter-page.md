
# 3. Set up a Parameter Page
Great work so far! You have created your first Dashboard page. Now let's keep
working on your HMI. In this step we will be adding a
Parameter Page where you will be
able to view and edit your HMI's parameters.

## 3.1 Create a »Vacuum Parameters« Page
- Add a new page
Select the `Pages` slot in the
HMI Content Tree and click the `Add` button to bring
up the `Add Element` dialog:[img:]
- Choose page type
Choose `Parameter Page` from this list to add a new page to your HMI.
- Rename page
Since we want to edit some vacuum parameters on this page, rename the page
to “Vacuum Parameters”. You can either do that in the content tree or
within
the `General` section in the page's
Properties Panel.
- **Challenge**

### Goal: Change the page's icon
We would like to use a more fitting icon for this page.So try and set the page's icon to the “Vacuum” icon!

## 3.2 Add Your First Parameter
Let's add some parameters our operators need to be able to edit.
- Add a parameter
Within the content tree, navigate to the `Parameters` section of your
Parameter Page and click the `Add` button.
For now we just want do add a single Parameter to our page, so choose the
`Parameter` Element from the `Add Element` dialog.
- Rename the parameter
Rename your parameter to “Pre Delay”.
- Add an input to the parameter
Our operators need to be able to edit the “Pre Delay” variable using a
numeric stepper. So click the `Add` button next to your parameter and
choose
the `Numeric Stepper` Element from the `Add Element` dialog.[img:]
- **Challenge**

### Goal: Add another input to your parameter
Our operators also should be able to edit another variable.
It is called “PreDelayActive” and is located right next to
our “PreDelay” Data Variable.Add another Input Element and connect the “PreDelayActive” Data Variable
to it!

## 3.3 Add Your First Parameter Group

### Create The Group
Sometimes multiple parameters will need to be grouped together. For example
some details regarding our Pre Delay parameter.
- Add a parameter group and name it
Within the content tree, click the `Add` button next to the `Parameters`
section of parameter page and choose the `Parameter Group` element.Rename the group to “Details”.
- Add a parameter to the group
Add a “Time” parameter to the group. Within this
new “Time” parameter add another input element to enable our operators to
edit the `Quickstart` > `Moulding` > `Vacuum` > `Time` Data Variable.**Note:** Don't remember how to do all that? No problem at all. Just
repeat
what you did for the “Pre Delay” parameter and you'll be set![img:]

### Edit The Group
After editing the “Time” Data Variable our operators may need to reset the
variable, we will achieve this by adding a button to the parameter.
- Add a button group and name it
Within the content tree, click the `Add` button next to your “Time”
parameter and choose the `Button` element and rename it to “Reset Time”.
- Set the button's alignment
We also want this button to be a bit bigger, so navigate to the
`Alignment` section within the button's Properties Panel
and choose the `Fill` option.
- Locate the button's `On click` function
Now let's take care of our button's functionality, since all it can do
right
now is display a warning and that's not what we want!Navigate to the `On click` property of our button within it's
Properties Panel and click the
drop down next to it. This will open the `Select Action`
dialog.**Note:** There are a lot of different
Actions and you will learn more about them later.
Or if you can't wait just try them out right now![img:]
- Set the button's `On click` function
We want to edit the “Time” Data Variable, so select the
`Write Data Variable` action from the `Select Action` dialog.
The `Choose Data Variable`
dialog will open automatically, so select the `Quickstart` > `Moulding` >
`Vacuum` > `Time` Data Variable and confirm.
- Set reset value
Now you can choose to which value you would like to set the “Time” Data
Variable when an operator clicks the “Reset Time” button. Since we always
want to reset the variable to the same value, we will select a static
value
and set it to “0”. And you’re done![img:]
- Let’s try out your new reset button!
Activate Test Mode
above the HMI Preview Panel
and click the “Reset Time” button! The variable within the
`Numeric Stepper` of your “Time” parameter should
now be “0”.Try manipulating the “Time” Data Variable using the `Numeric Stepper` and
resetting the changes with your new button.Is it working? Amazing! 🤩
- **Challenge**

### Goal: Make your parameter group collapsible
Our operators won’t need to edit these details all the time, so we want
to
safe some space on the parameter page and make this group collapsible.**So, set the “Details” parameter group to collapsible!**
**Tip:** You might want to have a look at the parameter group’s
Properties Panel!
**Note:** When a parameter group is collapsible, our operators will be
able to
expand or collapse the parameters within that group at will.

## Check Your Result
Time to validate your own result against this screenshot. Make sure that you
have included all the necessary elements in your HMI. 👉
Mission accomplished!
You're ready to move on to the next step!
