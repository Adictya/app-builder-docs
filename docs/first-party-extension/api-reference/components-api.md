---
sidebar_label: Components API
sidebar_position: 1
description: Components API is a very powreful way to override
title: Components API
keywords: [videCallProps, ChatBubbleProps]
---

This is quick desription about the Components API.

Below is the navigational image | image

![image](./assets/image.png)

<subtitle>

## videoCall : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) videoCallInterface

</subtitle>

Customize the entire video call component

```js
import React from "react";
import { View } from "react-native";
import { installFPE } from "fpe-api/install";
import {
  ParticipantsView,
  Chat,
  Navbar,
  SettingsView,
  Controls,
  VideoComponent,
  useSidePanel,
} from "fpe-api";
import { SidePanelType } from "../src/subComponents/SidePanelEnum";

const VideoCall: React.FC = () => {
  const { sidePanel } = useSidePanel();
  return (
    <View style={{ flex: 1, flexDirection: "column", overflow: "hidden" }}>
      <Navbar></Navbar>
      <View
        style={{
          flex: 12,
          flexDirection: "row",
        }}
      >
        <VideoComponent />
        {sidePanel === SidePanelType.Chat ? (
          <Chat />
        ) : sidePanel === SidePanelType.Settings ? (
          <SettingsView />
        ) : sidePanel === SidePanelType.Participants ? (
          <ParticipantsView />
        ) : (
          <></>
        )}
      </View>
      <Controls />
    </View>
  );
};

const data = installFPE({
  components: {
    videoCall: VideoCall,
  },
});

export default data;
```

<!-- ![image](./assets/image.png) -->

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

<collapsible>

### VideoCallInterface

| Method                                           | Description                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------- |
| [chat](#videocallchat)                           | Customize the entire chat panel or pass in an object to override a subcomponent |
| [settingsPanel](#videocallsettingspanel)         | Customize the settings panel by passing in your own component.                  |
| [participantsPanel](#videocallparticipantspanel) | Customize the Participants Panel by passing in your own component.              |
| [topBar](#videocalltopbar)                       | Customize the Top Bar by passing in your own component                          |
| [bottomBar](#videocalltopbar)                    | Customize the Bottom Bar by passing in your own component                       |

</collapsible>
<subtitle>

## videoCall.chat : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) ChatInterface

</subtitle>

Customize the entire chat panel or pass in an object to override a subcomponent
<collapsible >

### ChatInterface

| Method                                      | Description                                                |
| ------------------------------------------- | ---------------------------------------------------------- |
| [chat.chatBubble](#videocallchatchatbubble) | Customize the chat Bubble component.                       |
| [chat.chatInput](#videocallchatchatinput)   | Customize the chat input by passing in your own component. |

</collapsible>
<subtitle>

## videoCall.chat.chatBubble : [React.ComponentType<ChatBubbleProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the chat Bubble component.

### ChatBubbleProps

| msg     | string  | Content of the chat message                                                  |
| ------- | ------- | ---------------------------------------------------------------------------- |
| isLocal | boolean | Specifies if the message is from a local user or if it is from a remote user |
| uid     | string  | Name of the user who sent the message                                        |
| ts      | number  | Timestamp of the message                                                     |

<subtitle>

## videoCall.chat.chatInput : [React.ComponentType<ChatInputProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

### ChatInputProps

| privateActive  | boolean | Content of the chat message                                                  |
| -------------- | ------- | ---------------------------------------------------------------------------- |
| selectedUserID | boolean | Specifies if the message is from a local user or if it is from a remote user |

Customize the chat input by passing in your own component.

<subtitle>

## videoCall.settingsPanel : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the settings panel by passing in your own component.

<subtitle>

## videoCall.participantsPanel : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Participants Panel by passing in your own component.

<subtitle>

## videoCall.topBar : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Top Bar by passing in your own component.

<subtitle>

## videoCall.bottomBar : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Bottom Bar by passing in your own component.

<subtitle>

## videoCall.renderingComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) RenderingComponentInterface

</subtitle>

Customize the rendering by through RenderingComponentInterface

<collapsible>

### RenderingComponentInterface

| rtc                | React.ComponentType | Specifies the rendering component <br/> for displaying Rtc Streams i.e VideoView                                                                         |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [customKey:string] | React.ComponentType | Any Component provided here will be utilized <br/> as custom component for your Application. <br/>For more info, look at the Custom Content API overview |
| Component          | React.ComponentType | Timestamp of the message                                                                                                                                 |

</collapsible>

<subtitle>

## videoCall.customLayouts: LayoutInterface

</subtitle>

Customize the layout through LayoutInterface

<collapsible>

### LayoutInterface

| name      | string                            | Specifies if the message is from a local user or if it is from a remote user          |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| icon      | string                            | Can be a <br/> 1. Base 64 Image string <br/>2. CDN URL <br/>3. Bunder imported string |
| Component | React.ComponentType<LayoutProps\> | Timestamp of the message                                                              |

</collapsible>

<subtitle>

## Precall : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) PrecallInterface

</subtitle>

Customize the entire video call component or customize the subcomponents selectively.

```typescript
const fpe = {
  precall: NewPreCallComponent
}

or

const fpe = {
  precall: {
    preview: PreviewComponent
    textBox: TextBoxComponent
  }
}
```

<collapsible>

### PrecallInterface

| Method                               | Description                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- |
| [preview](#precallpreview)           | Customize the Video Preview by passing in your own component.          |
| [audioMute](#precallaudiomute)       | Customize the Audio Mute icon button by passing in your own component. |
| [videoMute](#precallvideomute)       | Customize the Video Mute icon button by passing in your own component. |
| [deviceSelect](#precalldeviceselect) | Customize the Device Select dropdown by passing in your own component  |
| [textBox](#precalltextbox)           | Customize the Name Input text box by passing in your own component     |
| [joinButton](#precalljoinbutton)     | Customize the Join Call button by passing in your own component.       |
| [meetingName](#precallmeetingname)   | Customize the Meeting Name label by passing in your own component      |

</collapsible>

<subtitle>

## precall.preview : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Video Preview by passing in your own component.

<subtitle>

## precall.audioMute : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Audio Mute icon button by passing in your own component.

<subtitle>

## precall.videoMute : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Video Mute icon button by passing in your own component.

<subtitle>

## precall.deviceSelect : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Device Select dropdown by passing in your own component.

<subtitle>

## precall.textBox : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Name Input text box by passing in your own component.

<subtitle>

## precall.joinButton : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Join Call button by passing in your own component.

<subtitle>

## precall.meetingName : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Meeting Name label by passing in your own component.

<subtitle>

## Create : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Create screen by passing in your own component.

<subtitle>

## Share : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Share screen by passing in your own component.

<subtitle>

## Join : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Join screen by passing in your own component.
