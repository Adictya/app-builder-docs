---
sidebar_label: Components API 2
sidebar_position: 1
description: Components API is a very powreful way to override
title: Components API
keywords: [videCallProps, ChatBubbleProps]
---

import Image from "@site/src/components/Image"
import Collapsible from "@site/src/components/Collapsible"
import Highlight from "@site/src/components/Highlight"
import img1 from "@site/static/img/docAssets/components-api.png"
import img2 from "@site/static/img/docAssets/video-call.png"

# Commponents API

This is a quick description of the title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

<Image src={img1} alt="componentsApi"/>

## VideoCall

<Highlight>React.ComponentType</Highlight> | <Highlight>videoCallInterface</Highlight>

Customize the entire video call component

<Image src={img2} alt="videoCall" />

```js
import io.agora.rtc.RTCEngine
mRtcEngine = RtcEngine.create(context, appid, eventHandler)
mRtcEngine.setupLocalVideo(videocanvas)
mRtcEngine = RtcEngine.create(context, appid, eventHandler)
mRtcEngine.setupLocalVideo(videocanvas)
mRtcEngine = RtcEngine.create(context, appid, eventHandler)
mRtcEngine.setupLocalVideo(videocanvas)
mRtcEngine = RtcEngine.create(context, appid, eventHandler)
mRtcEngine.setupLocalVideo(videocanvas)
mRtcEngine = RtcEngine.create(context, appid, eventHandler)
mRtcEngine.setupLocalVideo(videocanvas)
```

VideoCallInterface
videoCall.chat: React.ComponentType | ChatInterface
Customize the entire chat panel or pass in an object to override a subcomponent
ChatInterface
videoCall.chat.chatBubble: React.ComponentType
Customize the chat Bubble component.
ChatBubbleProps

---

```js
import io.agora.rtc.RTCEngine
console.log("hello world")
```

 <Collapsible collapsed>

## Video Call Interface

| msg     | string  | Content                                                                      |
| ------- | ------- | ---------------------------------------------------------------------------- |
| isLocal | boolean | Specifies if the message is from a local user or if it is from a remote user |
| uid     | string  | Name of the user who sent the message                                        |
| ts      | number  | Timestamp of the message                                                     |

</Collapsible>

---

 <Collapsible >

## Chat Interface

| msg     | string  | Content                                                                      |
| ------- | ------- | ---------------------------------------------------------------------------- |
| isLocal | boolean | Specifies if the message is from a local user or if it is from a remote user |
| uid     | string  | Name of the user who sent the message                                        |
| ts      | number  | Timestamp of the message                                                     |

</Collapsible>
