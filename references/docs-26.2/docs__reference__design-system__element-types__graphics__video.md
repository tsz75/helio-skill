
# Video

## About
Modern HMIs can be much than just buttons and text. They can provide
meaningful and more interactive content to the operators to help them solve
their tasks. Use it to explain complex processes, provide instructional
content, or provide additional information.

### Which video format?
Make sure your target device supports this video type. Safe formats should be:
- **WebM**: The safest bet since this will run in all modern browsers as well as the Open Source version of Chromium.
- **MP4**: If your HMI is running on a Linux OS make sure all the required codecs are installed.

## Properties

### General

#### Type
Choose between `Video Upload`, `Dynamic URL` or `HLS Stream`.

#### LoopNew
Check this option when you would like a video to play on repeat.

#### AutoplayNew
Check this option when you want the video to start playing automatically
as soon as operators open the page containing the video.

### Activating Autoplay Will Mute the Video Automatically
This is a browser requirement that prevents audio from playing without the user's consent.
For more details on this topic, see the Autoplay guide for media and Web Audio APIs.
Container

#### Icon
This icon will be displayed next to the element's label on pages that support it, like the Dashboard Page. An Element can make use of the icon to:
- Provide more context to add meaning
- Improve recognition and discoverability, especially on larger pages

#### Label
Provides context and information to operators, guiding them and helping them understand the value of this particular element. A good label instills confidence in operators when making adjustments.

#### Description
Will be displayed underneath the element. This description provides additional guidance or instructions for operators manipulating the element. It expands on the label by offering supporting details and clarifying what the element represents or how it behaves. It provides an opportunity to offer more detailed context regarding the potential impact of changes or further instructions on the desired input format.

#### Action
Button that will be displayed in the upper right corner of the element. By pressing it, users can execute an action.

#### Label
Label that will be used for the action button.

#### Icon
Icon that will be displayed on the action button.

#### On click
Action that gets executed when clicking the button. Use it to:
- Open overlays that provide additional context or detailed controls for this element using the  Open Page as Overlay Action.
- Navigate to other pages using the  Navigate to Page Action.
- Execute logic on your PLC using the  Write Data Variable Action or  Call Data Method Action

#### Is disabled
Disable the action by setting this boolean property to true. The action will never execute while it is disabled.
Display Condition

#### Condition
The
Display Condition
controls the visibility of an element or page for the current user. The condition can be set to different types of
Dynamic Property
– as long as the the type returns
true
or
false
you're good to go.

## Related

#### Elements
Parameter Page
Dashboard Widget
