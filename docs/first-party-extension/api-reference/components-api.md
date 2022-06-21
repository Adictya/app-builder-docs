---
sidebar_label: Components API
sidebar_position: 1
description: Components API is a very powreful way to override
title: Components API
keywords: [videCallProps, ChatBubbleProps]
---

<subtitle>

## VideoCall : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) videoCallInterface

</subtitle>

Customize the entire video call component

![image](./assets/image.png)

```js
import io.agora.rtc.RTCEngine
mRtcEngine = RtcEngine.create(context, appid, eventHandler)
mRtcEngine.setupLocalVideo(videocanvas)
```

<collapsible>

### VideoCallInterface

**videoCall.chat** : [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) | ChatInterface

Customize the entire chat panel or pass in an object to override a subcomponent

</collapsible>

<collapsible >

### ChatInterface

**videoCall.chat.chatBubble** : [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) <ChatBubbleProps\>

Customize the chat Bubble component.

**ChatBubbleProps**

| msg     | string  | Content of the chat message                                                  |
| ------- | ------- | ---------------------------------------------------------------------------- |
| isLocal | boolean | Specifies if the message is from a local user or if it is from a remote user |
| uid     | string  | Name of the user who sent the message                                        |
| ts      | number  | Timestamp of the message                                                     |

**videoCall.chat.chatInput** : [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) <ChatInputProps\>

**ChatInputProps**

| privateActive  | boolean | Content of the chat message                                                  |
| -------------- | ------- | ---------------------------------------------------------------------------- |
| selectedUserID | boolean | Specifies if the message is from a local user or if it is from a remote user |

Customize the chat input by passing in your own component.

**videoCall.settingsPanel:** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the settings panel by passing in your own component.

**videoCall.participantsPanel:** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Participants Panel by passing in your own component.

**videoCall.topBar:** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Top Bar by passing in your own component.

**videoCall.bottomBar:** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Bottom Bar by passing in your own component.

**videoCall.renderingComponent**: RenderingComponentInterface

**RenderingComponentInterface**

| rtc                | React.ComponentType | Specifies the rendering component <br/> for displaying Rtc Streams i.e VideoView                                                                         |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [customKey:string] | React.ComponentType | Any Component provided here will be utilized <br/> as custom component for your Application. <br/>For more info, look at the Custom Content API overview |
| Component          | React.ComponentType | Timestamp of the message                                                                                                                                 |

**videoCall**.customLayouts: (defaultLayouts: Array) => Array

| name      | string                            | Specifies if the message is from a local user or if it is from a remote user          |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| icon      | string                            | Can be a <br/> 1. Base 64 Image string <br/>2. CDN URL <br/>3. Bunder imported string |
| Component | React.ComponentType<LayoutProps\> | Timestamp of the message                                                              |

</collapsible>

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

**precall.preview :** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Video Preview by passing in your own component.

**precall.audioMute :** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Audio Mute icon button by passing in your own component.

**precall.videoMute :** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Video Mute icon button by passing in your own component.

**precall.deviceSelect :** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Device Select dropdown by passing in your own component.

**precall.textBox :** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Name Input text box by passing in your own component.

**precall.joinButton :** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Join Call button by passing in your own component.

**precall.meetingName:** [**React.ComponentType**](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Customize the Meeting Name label by passing in your own component.

:::note

Look at i18n API if you want to change the text rather than the component that renders it.

:::

</collapsible>
