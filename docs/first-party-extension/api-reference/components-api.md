---
sidebar_label: Components API
sidebar_position: 1
description: Components API is a very powreful way to override
title: Components API
keywords: [videCallProps, ChatBubbleProps]
---

# Commponents API

videoCall: React.ComponentType | videoCallInterface
Customize the entire video call component

Modify `rtcEngine.js` to add support.

```js title="rtcEngine.js"
import io.agora.rtc.RTCEngine
mRtcEngine = RtcEngine.create(context, appid, eventHandler)
// highlight-next-line
mRtcEngine.setupLocalVideo(videocanvas)

```

VideoCallInterface
videoCall.chat: React.ComponentType | ChatInterface
Customize the entire chat panel or pass in an object to override a subcomponent
ChatInterface
videoCall.chat.chatBubble: React.ComponentType
Customize the chat Bubble component.
ChatBubbleProps

:::info

Customize the entire **chat panel** or pass in an object to override a `subcomponent` Check [this `api`](#).

:::

### ChatBubbleProps

| msg     | string  | Content of the chat message                                                  |
| ------- | ------- | ---------------------------------------------------------------------------- |
| isLocal | boolean | Specifies if the message is from a local user or if it is from a remote user |
| uid     | string  | Name of the user who sent the message                                        |
| ts      | number  | Timestamp of the message                                                     |
