---
sidebar_label: Sub-components Library
sidebar_position: 3
description: Sub-components Library
title: Sub-components Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

<api>

Set of components to be composed as needed by the user.

You can access them under the `customization-api` module as a named export.

---

<method>

<subtitle>

## Icons : IconsInterface

</subtitle>

<br/>

The object containing all the default icons used in the ui.

```jsx
import { icons } from "customization-api";
```

<br/>

#### IconsInterface

| Icon                                                                                                                                                                                                                                                                                                                                                                   | Name                  | Type                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/VideoCam.png" />                                                                                                                                                                                                                                                                                       | videocam              | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/VideoCam-1.png" />                                                                                                                                                                                                                                                                                     | videocamOff           | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Microphone.png" />                                                                                                                                                                                                                                                                                     | mic                   | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Microphone-1.png" />                                                                                                                                                                                                                                                                                   | micOff                | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Record.png" />                                                                                                                                                                                                                                                                                         | recordingIcon         | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Record-1.png" />                                                                                                                                                                                                                                                                                       | recordingActiveIcon   | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Screenshare.png" />                                                                                                                                                                                                                                                                                    | screenshareIcon       | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Screenshare-1.png" />                                                                                                                                                                                                                                                                                  | screenshareOffIcon    | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Raise Hand.png" />                                                                                                                                                                                                                                                                                     | raiseHandIcon         | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/End Call.png" />                                                                                                                                                                                                                                                                                       | endCall               | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Grid View.png" />                                                                                                                                                                                                                                                                                      | gridLayoutIcon        | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Grid View Filled.png" />                                                                                                                                                                                                                                                                               | gridLayoutFilledIcon  | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Pinned Layout Web.png" />                                                                                                                                                                                                                                                                              | pinnedLayoutIcon      | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Standard Base.png" />                                                                                                                                                                                                                                                                                  | participantIcon       | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Standard Base-1.png" />                                                                                                                                                                                                                                                                                | participantFilledIcon | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Chat.png" />                                                                                                                                                                                                                                                                                           | chatIcon              | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Chat-1.png" />                                                                                                                                                                                                                                                                                         | chatIconFilled        | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Settings.png" />                                                                                                                                                                                                                                                                                       | settings              | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Settings-1.png" />                                                                                                                                                                                                                                                                                     | settingFilled         | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Copy.png" />                                                                                                                                                                                                                                                                                           | clipboard             | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Check 1.png" />                                                                                                                                                                                                                                                                                        | checkCircleIcon       | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Cross 1.png" />                                                                                                                                                                                                                                                                                        | crossCircleIcon       | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Demote.png" />                                                                                                                                                                                                                                                                                         | demoteIcon            | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Exclamation.png" />                                                                                                                                                                                                                                                                                    | exlamationIcon        | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Back.png" />                                                                                                                                                                                                                                                                                           | backBtn               | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Network Base.png" /><br/><image alt="Video camera"  className="icon" darkImageSrc="icons/Network Down.png" /> <br/><image alt="Video camera" className="icon"  darkImageSrc="icons/Network Unknown.png" /><br/><image alt="Video camera" className="icon"  darkImageSrc="icons/Network Loading.png" /> | networkIcons          | {<br/>&emsp;Excellent: string,<br/>&emsp;Unsupported: string,<br/>&emsp;Good: string,<br/>&emsp;Bad: string,<br/>&emsp;VeryBad: string,<br/>&emsp;Loading: string,<br/> } |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ChatBubble : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatBubbleProps](#chatbubbleprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/ChatBubble.png" darkImageSrc="api/ChatBubble.png" />

The Chat Bubble component displays the message inside the chat ui. It is conditionally styled based on message origin (ie local or remote).

```jsx
import { ChatBubble } from "customization-api";
```

<br/>

#### ChatBubbleProps

| Prop      | Type                                                                                                                                                                                                          | Description                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| message   | string                                                                                                                                                                                                        | Content of the chat message                                                  |
| isLocal   | boolean                                                                                                                                                                                                       | Specifies if the message is from a local user or if it is from a remote user |
| uid       | [UidType](/customization-api/api-reference/globals#uidtype)                                                                                                                                                   | Name of the user who sent the message                                        |
| timestamp | number                                                                                                                                                                                                        | Timestamp of the message                                                     |
| render?   | ( msg: string, isLocal: boolean, uid: string, ts: number) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Render method for chat bubble to provide a custom jsx                        |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## MaxVideoView : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[MaxVideoRendererProps](#maxvideorendererprops)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/MaxVideoView.png" darkImageSrc="api/MaxVideoView.png" />

The MaxVideoView component is used to render the user video feed along with overlay components like [NameWithMicStatus](#namewithmicstatus), [NetworkQualityPill](#networkqualitypill) etc.

```jsx
import { MaxVideoView } from "customization-api";
```

<br/>

#### MaxVideoRendererProps

| Prop   | Type                                                                        | Description                                            |
| ------ | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| user : | [RenderInterface](/customization-api/api-reference/globals#renderinterface) | The user object you need to display the video feed off |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## GridLayout : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RenderStateInterface](#renderstateinterface)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/GridLayout.png" darkImageSrc="api/GridLayout.png" />

The GridLayout component is used to render the user video feeds in a responsive grid parttern.

```jsx
import { GridLayout } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## PinnedLayout : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RenderStateInterface](#renderstateinterface)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/PinnedLayout.png" darkImageSrc="api/PinnedLayout.png" />

The PinnedLayout component is used to render the user video feeds in a pinned view with a collapsible sidebar displaying unpinned user feeds.

```jsx
import { PinnedLayout } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## VideoComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/VideoComponent.png" darkImageSrc="api/VideoComponent.png" />

The VideoComponent is used to automatically render the user video feeds in the selected layout.

```jsx
import { VideoComponent } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## NameWithMicIcon : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[NameWithMicIconProps](#namewithmiciconprops)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/NameLabel.png" darkImageSrc="api/NameLabel.png" />

The NameWithMicIcon component is used to render the user name along with their mic muted state.

```jsx
import { NameWithMicIcon } from "customization-api";
```

<br/>

#### NameWithMicIconProps

| Prop   | Type                                                                        | Description                                                    |
| ------ | --------------------------------------------------------------------------- | -------------------------------------------------------------- |
| user : | [RenderInterface](/customization-api/api-reference/globals#renderinterface) | The user object you need to display the name and mic status of |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## NetworkQualityPill: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[NetworkQualityPillProps](#networkqualitypillprops)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/NetworkQuality.png" darkImageSrc="api/NetworkQuality.png" />

The NetworkQualityPill component is used to render the user network quality in a pill container that expands when hovered over.

```jsx
import { NetworkQualityPill } from "customization-api";
```

<br/>

#### NetworkQualityPillProps

| Prop   | Type                                                                        | Description                                                |
| ------ | --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| user : | [RenderInterface](/customization-api/api-reference/globals#renderinterface) | The user object you need to display the network quality of |

</method>

<method>

<subtitle>

## VideoCallScreen : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The VideoCallScreen component is used to render the entire video call screen.

```jsx
import { VideoCallScreen } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ParticipantsView : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" className="center-img" caption="participant panel" lightImageSrc="api/Participants Panel.png" darkImageSrc="api/Participant Panel.png" />

The ParticipantsView component is used to render the participant panel that lists all the users in the video call / livestream along with their audio and video status. Hosts additionally are able to see user controls such as `mute participant` , `remove participant from call`.

```jsx
import { ParticipantsView } from "customization-api";
```

</method>

<method>

<subtitle>

## Controls : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/Bottombar.png" darkImageSrc="api/Bottombar.png" />

The Controls component is used to render all the meeting controls.

```jsx
import { Controls } from "customization-api";
```

:::note
The controls displayed change depending on the operating sytem/platform and the user config
:::

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## HorizontalRule : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[HorizontalRuleProps](#horizontalruleprops)\>

</subtitle>

<br/>

<image alt="Video Call" caption="chat bubble" darkImageSrc="api/HorizontalRule.png" />

<br/>

The HorizontalRule component displays a horizontal line.

```jsx
import { HorizontalRule } from "customization-api";
```

<br/>

#### HorizontalRuleProps

| Prop  | Type                                                       | Description                           |
| ----- | ---------------------------------------------------------- | ------------------------------------- |
| style | [viewProps](https://reactnative.dev/docs/view-style-props) | custom css to override existing style |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## RenderComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RenderComponentProps](#rendercomponentprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/RenderComponent.png" darkImageSrc="api/RenderComponent.png" />

<br/>

The Render component handles rendering the correct content view component as defined in [custom content api](/customization-api/api-reference/components-api#videocallcustomcontent) based on the content type corresponding to the `uid` as defined in the [Render app state](/customization-api/api-reference/context-library#userender).

```jsx
import { RenderComponent } from "customization-api";
```

<br/>

#### RenderComponentProps

| Prop | Type                                                        | Description                                                                                                         |
| ---- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| uid  | [uidtype](/customization-api/api-reference/globals#uidtype) | uid of [renderObject](http://localhost:3000/customization-api/api-reference/globals#renderinterface) to be rendered |

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## SettingsView : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/SettingsView.png" darkImageSrc="api/SettingsView.png" />

The SettingsView component is used to render the settings side panel.

```jsx
import { SettingsView } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## ChatSendButton : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatSendButtonProps](#chatsendbuttonprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/ChatSendButton.png" darkImageSrc="api/ChatSendButton.png" />

The ChatSendButton component displays the chat send button. Relies on [ChatUiControl app state](/customization-api/api-reference/context-library#chatuicontrolinterface) to determine required information.

```jsx
import { ChatSendButton } from "customization-api";
```

<br/>

#### ChatSendButtonProps

| Prop    | Type                                   | Description                      |
| ------- | -------------------------------------- | -------------------------------- |
| render? | ( onPress: () => void ) => JSX.Element | Render method for ChatSendButton |

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## ChatTextInput : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatTextInputProps](#chatinputprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/ChatTextInput.png" darkImageSrc="api/ChatTextInput.png" />

The ChatTextInput component displays the chat input box. Relies on [ChatUiControl app state](/customization-api/api-reference/context-library#chatuicontrolinterface) to determine required information.

```jsx
import { ChatTextInput } from "customization-api";
```

<br/>

#### ChatTextInputProps

| Prop    | Type                                                                   | Description                     |
| ------- | ---------------------------------------------------------------------- | ------------------------------- |
| render? | ([ChatTextInputRenderProps](#chattextinputrenderprops)) => JSX.Element | Render method for ChatTextInput |

#### ChatTextInputRenderProps

| Prop                        | Type                      |
| --------------------------- | ------------------------- |
| message                     | string                    |
| onChangeText                | ( text: string ) => void, |
| onSubmitEditing             | () => void,               |
| chatMessageInputPlaceholder | string                    |

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## Chat : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatProps](#chatprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/Chat.png" darkImageSrc="api/Chat.png" />

The Chat component displays the chat sidepanel. Relies on [ChatUiControl app state](/customization-api/api-reference/context-library#chatuicontrolinterface) to determine required information.

```jsx
import { Chat } from "customization-api";
```

<br/>

#### ChatProps

| Prop            | Type                                                                                                                                                                                                 | Description                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| chatBubble?     | [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatBubbleProps](#chatbubbleprops)\>         | ChatBubble component to be used     |
| chatTextInput?  | [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatTextInputProps](#chatinputprops)\>       | ChatTextInput component to be used  |
| chatSendButton? | [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatSendButtonProps](#chatsendbuttonprops)\> | ChatSendButton component to be used |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## NavBar : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[NavBarProps](#navbarprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/NavBar.png" darkImageSrc="api/NavBar.png" />

The NavBar component displays the nav bar.

```jsx
import { NavBar } from "customization-api";
```

<br/>

#### NavBarProps

| Prop    | Type   | Description                 |
| ------- | ------ | --------------------------- |
| message | string | Content of the chat message |

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## TextInput : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)< [TextInputProps](https://reactnative.dev/docs/textinput#props)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/TextInput.png" darkImageSrc="api/TextInput.png" />

The TextInput component is used to render a text input box.

```jsx
import { TextInput } from "customization-api";
```

<br/>

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## PrimaryButton : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[PrimaryButtonProps](#primarybuttonprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/PrimaryButton.png" darkImageSrc="api/PrimaryButton.png" />

The PrimaryButton component is used to render a button with app builder primary button styling.

```jsx
import { PrimaryButton } from "customization-api";
```

<br/>

#### PrimaryButtonProps

| Prop | Type   | Description                        |
| ---- | ------ | ---------------------------------- |
| text | string | Text to be displayed on the button |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## SecondaryButton : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[SecondaryButtonProps](#secondarybuttonprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/SecondaryButton.png" darkImageSrc="api/SecondaryButton.png" />

The SecondaryButton component is used to render a button with app builder primary button styling.

```jsx
import { SecondaryButton } from "customization-api";
```

<br/>

#### SecondaryButtonProps

| Prop | Type   | Description                        |
| ---- | ------ | ---------------------------------- |
| text | string | Text to be displayed on the button |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## UiKitBtnTemplate : [BtnTemplate](https://agoraio-community.github.io/VideoUIKit-ReactNative/modules/Built_in_Components.html#BtnTemplate)

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/UiKitBtnTemplateInterface.png" darkImageSrc="api/UiKitBtnTemplateInterface.png" />

The UiKitBtnTemplate component renders a button in UiKit button structure.

```jsx
import { UiKitBtnTemplate } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## UiKitMaxVideoView : [MaxVideoView](https://agoraio-community.github.io/VideoUIKit-ReactNative/modules/Built_in_Components.html#MaxVideoView)

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/UiKitMaxVideoView.png" darkImageSrc="api/UiKitMaxVideoView.png" />

The MaxVideoView component is used to render the user video feed along with overlay components like [NameWithMicIcon](#namewithmicicon), [NetworkQualityPill](#networkqualitypill) etc.

```jsx
import { UiKitMaxVideoView } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## UiKitImageIcon : [ImageIcon](https://agoraio-community.github.io/VideoUIKit-ReactNative/modules/Built_in_Components.html#ImageIcon)

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/UiKitImageIcon.png" darkImageSrc="api/UiKitImageIcon.png" />

The UiKitImageIcon component is used to render a given icon within a wrapper component.

```jsx
import { UiKitImageIcon } from "customization-api";
```

</method>

<method>

<subtitle>

## NavBarComponentsArray : [React.ComponentType\[\]](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

The NavBarComponentsArray is an array of all buttons present on the default nav bar component.

| Index | Name                   | Type                                                                | Description                             |
| ----- | ---------------------- | ------------------------------------------------------------------- | --------------------------------------- |
| 0     | CopyJoinInfo           | [CopyJoinInfoComponent](#copyjoininfocomponent)                     | Button to copy meeting invite           |
| 1     | ParticipantsIconButton | [ParticipantsIconButtonComponent](#participantsiconbuttoncomponent) | Button to toggle participants sidepanel |
| 2     | ChatIconButton         | [ChatIconButtonComponent](#chaticonbuttoncomponent)                 | Button to toggle chat sidepanel         |
| 3     | LayoutIconButton       | [LayoutIconButtonComponent](#layouticonbuttoncomponent)             | Button to switch layouts                |
| 4     | SettingsIconButton     | [SettingsIconButtonComponent](#settingsiconbuttoncomponent)         | Button to toggle setting sidepanel      |

```jsx
import { NavBarComponentsArray } from "customization-api";
```

<br/>

### _Control Components_:

<collapsible>

### CopyJoinInfoComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[CopyJoinInfoProps](#copyjoininfoprops)>

#### CopyJoinInfoProps

| Key                | Type                                                                                                                                                                                                                                                                               | Description                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| showText           | `boolean`                                                                                                                                                                                                                                                                          | Flag to determine whether to show text besides button |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                  | Type of button template to be used for the button     |
| render?            | ( onPress: `()=>void`, buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Component to be used to render the button             |

</collapsible>

<br/>

<collapsible>

### ParticipantsIconButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ParticipantsIconButtonProps](#ParticipantsIconButtonProps)>

#### ParticipantsIconButtonProps

| Key                    | Type                                                                                                                                                                                                                                                                                                                                       | Description                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| badgeContainerPosition | { top?: `number`, right?: `number`, left?: `number`, bottom?: `number` }                                                                                                                                                                                                                                                                   | Position for peninding chat messages alert badge  |
| badgeTextStyle         | [TextStyle](https://reactnative.dev/docs/text-style-props)                                                                                                                                                                                                                                                                                 | custom style for badge text                       |
| buttonTemplateName     | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?                | ( onPress: `()=>void` , isPanelActive: `boolean`, totalUnreadCount: `number` , buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### ChatIconButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatIconButtonProps](#chaticonbuttonprops)>

#### ChatIconButtonProps

| Key                                   | Type                                                                                                                                                                                                                                                                                                         | Description                                          |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| liveStreamingRequestAlertIconPosition | { top?: `number`, right?: `number`, left?: `number`, bottom?: `number` }                                                                                                                                                                                                                                     | Position for pending raise hand requests alert badge |
| buttonTemplateName                    | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                                            | Type of button template to be used for the button    |
| render?                               | ( onPress: `()=>void`, isPanelActive: `boolean`, buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button             |

</collapsible>

<br/>

<collapsible>

### LayoutIconButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LayoutIconButtonProps](#layouticonbuttonprops)>

#### LayoutIconButtonProps

| Key                | Type                                                                                                                                                                                                                                                                               | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| modalPosition      | { top?: `number`, right?: `number`, left?: `number`, bottom?: `number` }                                                                                                                                                                                                           | Position of the switch layout modal               |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                  | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void`, buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### SettingsIconButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[SettingsIconButtonProps](#SettingsIconButtonProps)>

#### SettingsIconButtonProps

| Key                | Type                                                                                                                                                                                                                                                                               | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                  | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void`, buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

</method>

<!-- ***************************************************************************************************************** -->
<method>

<subtitle>

## ControlsComponentArray : [React.ComponentType\[\]](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

The ControlsComponentArray is an array of all meeting control button subcomponents listed below.

| Index | Name               | Type                                                    | Description                                                 |
| ----- | ------------------ | ------------------------------------------------------- | ----------------------------------------------------------- |
| 0     | LocalAudioMute     | [LocalAudioMuteComponent](#localaudiomuteprops)         | Control button to mute/unmute local user audio              |
| 1     | LocalVideoMute     | [LocalVideoMuteComponent](#localvideomuteprops)         | Control button to mute/unmute local user video              |
| 2     | LocalSwitchCamera  | [LocalSwitchCameraComponent](#localswitchcameraprops)   | Control button to switch local user video camera            |
| 3     | ScreenshareButton  | [ScreenshareButtonComponent](#screensharebuttonprops)   | Control button to start/stop screenshare                    |
| 4     | Recording          | [RecordingComponent](#recordingprops)                   | Control button to start/stop meeting recording              |
| 5     | LocalEndCall       | [LocalEndCallComponent](#localendcallprops)             | Control button to end local user call                       |
| 6     | LiveStreamControls | [LiveStreamControlsComponent](#livestreamcontrolsprops) | Control button to send/recall local user raise hand request |

```jsx
import { ControlsComponentArray } from "customization-api";
```

<br/>

### _Control Components_:

<collapsible>

### LocalAudioMuteComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalAudioMuteProps](#localaudiomuteprops)>

#### LocalAudioMuteProps

| Key                | Type                                                                                                                                                                                                                                                                                                     | Description                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                                        | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void`, isEnabled: `boolean`, buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Component to be used to render the button         |

</collapsible>

<br/>

<collapsible>

### LocalVideoMuteComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalVideoMuteProps](#localvideomuteprops)>

#### LocalVideoMuteProps

| Key                | Type                                                                                                                                                                                                                                                                                                       | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LocalSwitchCameraComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalSwitchCameraProps](#localswitchcameraprops)>

#### LocalSwitchCameraProps

| Key                | Type                                                                                                                                                                                                                                                                                                       | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### ScreenshareButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ScreenshareButtonProps](#screensharebuttonprops)>

#### ScreenshareButtonProps

| Key                | Type                                                                                                                                                                                                                                                                                                       | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### RecordingComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RecordingProps](#recordingprops)>

#### RecordingProps

| Key                | Type                                                                                                                                                                                                                                                                                                       | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LocalEndCallComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalEndCallProps](a)>

#### LocalEndCallProps

| Key                | Type                                                                                                                                                                                                                                                                                | Description                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename)                                                                                                                                                                                                   | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , buttonTemplateName: [buttonTemplateName](/customization-api/api-reference/globals#buttontemplatename) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LiveStreamControlsComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LiveStreamControlsProps](#livestreamcontrolsprops)>

#### LiveStreamControlsProps

| Key          | Type    | Description                                   |
| ------------ | ------- | --------------------------------------------- |
| showControls | boolean | Determines if livestream controls are renders |

</collapsible>

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## SidePanelButtonsArray : [React.ComponentType[]](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

The SidePanelButtonsArray is an array of all the side panel button subcomponents listed below.

| Index | Name                                  | Type                                                                                          | Description                                              |
| ----- | ------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 0     | RemoteAudioMute                       | [RemoteAudioMuteComponent](#remoteaudiomuteprops)                                             | Side panel button to mute remote user audio              |
| 1     | RemoteVideoMute                       | [RemoteVideoMuteComponent](#remotevideomuteprops)                                             | Side panel button to mute remote user video              |
| 2     | RemoteEndCall                         | [RemoteEndCallComponent](#remoteendcallprops)                                                 | Side panel button to remote remote user from call        |
| 3     | RemoteLiveStreamApprovedRequestRecall | [RemoteLiveStreamApprovedRequestRecallComponent](#remotelivestreamapprovedrequestrecallprops) | Side panel button to recall attendee raise hand request  |
| 4     | RemoteLiveStreamControlApprove        | [RemoteLiveStreamControlApproveComponent](#remotelivestreamcontrolapproveprops)               | Side panel button to approve attendee raise hand request |
| 4     | RemoteLiveStreamControlReject         | [RemoteLiveStreamControlRejectComponent](#remotelivestreamcontrolrejectprops)                 | Side panel button to reject attendee raise hand request  |
| 5     | ChatSendButton                        | [ChatSendButtonComponent](#chatsendbuttonprops)                                               | Side panel button send chat message                      |
| 6     | MuteAllAudioButton                    | [MuteAllAudioButtonComponent](#muteallaudiobuttonprops)                                       | Side panel button to mute all remote users audio         |
| 6     | MuteAllVideoButton                    | [MuteAllVideoButtonComponent](#muteallvideobuttonprops)                                       | Side panel button to mute all remote users video         |

```jsx
import { SidePanelButtonsArray } from "customization-api";
```

<br/>

### _SidePanel Control Components_:

<collapsible>

### RemoteAudioMuteComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteAudioMuteProps](#remoteaudiomuteprops)>

#### RemoteAudioMuteProps

| Key    | Type                                                        | Description                               |
| ------ | ----------------------------------------------------------- | ----------------------------------------- |
| uid    | [UidType](/customization-api/api-reference/globals#uidtype) | uid of the user to perform the action for |
| audio  | boolean                                                     | audio mute state of the remote user       |
| isHost | boolean                                                     | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteVideoMuteComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteVideoMuteProps](#remotevideomuteprops)>

#### RemoteVideoMuteProps

| Key    | Type                                                        | Description                               |
| ------ | ----------------------------------------------------------- | ----------------------------------------- |
| uid    | [UidType](/customization-api/api-reference/globals#uidtype) | uid of the user to perform the action for |
| video  | boolean                                                     | video mute state of the remote user       |
| isHost | boolean                                                     | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteEndCallComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteEndCallProps](#remoteendcallprops)>

#### RemoteEndCallProps

| Key    | Type                                                        | Description                               |
| ------ | ----------------------------------------------------------- | ----------------------------------------- |
| uid    | [UidType](/customization-api/api-reference/globals#uidtype) | uid of the user to perform the action for |
| isHost | boolean                                                     | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamApprovedRequestRecallComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteLiveStreamApprovedRequestRecallProps](#remotelivestreamapprovedrequestrecallprops)>

#### RemoteLiveStreamApprovedRequestRecallProps

| Key | Type                                                        | Description                               |
| --- | ----------------------------------------------------------- | ----------------------------------------- |
| uid | [UidType](/customization-api/api-reference/globals#uidtype) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamControlApproveComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteLiveStreamControlApproveProps](#remotelivestreamcontrolapproveprops)>

#### RemoteLiveStreamControlApproveProps

| Key | Type                                                        | Description                               |
| --- | ----------------------------------------------------------- | ----------------------------------------- |
| uid | [UidType](/customization-api/api-reference/globals#uidtype) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamControlRejectComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteLiveStreamControlRejectProps](#remotelivestreamcontrolrejectprops)>

#### RemoteLiveStreamControlRejectProps

| Key | Type                                                        | Description                               |
| --- | ----------------------------------------------------------- | ----------------------------------------- |
| uid | [UidType](/customization-api/api-reference/globals#uidtype) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### ChatSendButtonComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatSendButtonProps](#chatsendbuttonprops)>

#### ChatSendButtonProps

| Key    | Type                                                                                                                                                                      | Description                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button |

</collapsible>

<br/>

<collapsible>

### MuteAllAudioButtonComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[MuteAllAudioButtonProps](#muteallaudiobuttonprops)>

#### MuteAllAudioButtonProps

| Key    | Type                                                                                                                                                                      | Description                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button |

</collapsible>

<br/>

<collapsible>

### MuteAllVideoButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[MuteAllVideoButtonProps](#muteallvideobuttonprops)>

#### MuteAllVideoButtonProps

| Key    | Type                                                                                                                                                                      | Description                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button |

</collapsible>

<br/>

</method>

</api>
