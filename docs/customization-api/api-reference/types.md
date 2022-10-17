---
sidebar_label: Types
sidebar_position: 9
description: Types
title: Types
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

This page is an index of types, interfaces, enums used across the Customization API

<api>
<method>

## RtcRenderInterface

<collapsible>

| Key        | Type                        | Description                   |
| ---------- | --------------------------- | ----------------------------- |
| uid        | [UidType](#uidtype)         | uid of the user               |
| audio      | [ToggleState](#togglestate) | audio mute state              |
| video      | [ToggleState](#togglestate) | video mute state              |
| streamType | 'high' \| 'low'             | stream quality type           |
| name       | string                      | display name of the user      |
| screenUid  | number                      | uid of the screenshare stream |
| offline    | boolean                     | offline status of the user    |
| type       | 'rtc'                       | content type                  |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

## UserRenderInterface

Defined by the user, can contain any information necessary for the corresponding [custom content](/customization-api/api-reference/components-api#videocallcustomcontent) added.

<collapsible>

| Key           | Type   | Description                 |
| ------------- | ------ | --------------------------- |
| type          | string | Content of the chat message |
| [key: string] | any    | Content of the chat message |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

## ToggleState

<collapsible>

| Name      | Value |
| --------- | ----- |
| disabled  | 0     |
| enabled   | 1     |
| disabling | 2     |
| enabling  | 3     |

</collapsible>
</method>

<method>

<!-- ***************************************************************************************************************** -->

## ButtonTemplateName

<collapsible>

| Name      | Value |
| --------- | ----- |
| topBar    | 0     |
| bottomBar | 1     |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

## RenderInterface: [RtcRenderInterface](#rtcrenderinterface) \| [UserRenderInterface](#userrenderinterface)

</method>

<!-- ***************************************************************************************************************** -->

<method>

## RenderObjects

<collapsible>

| Key                        | Type                                | Description                                                                              |
| -------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| [key: [UidType](#uidtype)] | [RenderInterface](#renderinterface) | Object containing information necessary to render content view for the corresponding uid |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

## UidType : string | number

</method>

<!-- ***************************************************************************************************************** -->

<method>

## Selector( e: T ): Partial<T\>

Method to subscribe to portions of the app-state. When passed to an app-state accessor method it reicieves the contents of the associated app-state as argument, it must then selectively return the contents which are intended to be subscribed and eventually returned by the accessor method.

```jsx
import { useRecording } from "customization-api";

const { isRecordingActive, startRecording } = useRecording(
  ({isRecordingActve ,startRecording, stopRecording}) => {
    return({{isRecordingActve, startRecording}})
  }
);

/*
#### RecordingContextInterface

isRecordingActve : boolean
startRecording   : () => void
stopRecording    : () => void
*/
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

## DispatchType: <T, V>(action: { type: T; value: V }) => void

**T**: keyof [CallbacksInterface](#callbacksinterface)

**V**: Parameters<[CallbacksInterface](#callbacksinterface)[**T**]>

Used to dispatch various app builder actions.
Part of [RtcContext](/customization-api/api-reference/app-state-library#rtccontextinterface).

```jsx
import { useRtc } from "customization-api";

...

const { dispatch } = useRtc();

...

dispatch({
  type: "AddCustomContent",
  value: [123, { type: "MyContent", info: "MyInfo" }],
});
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

## CallbacksInterface

| Key              | Type                                                                                      | Description                                                                                                                                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EndCall          | () => void                                                                                | Ends the call                                                                                                                                                                                                                                                                               |
| SwitchCamera     | () => void                                                                                | Switches the video device being used [ mobile only ]                                                                                                                                                                                                                                        |
| SwapVideo        | ( uid: [UidType](#uidtype) ) => void                                                      | Swaps given `uid` with the uid at the top in [renderPosition](/customization-api/api-reference/app-state-library#renderstateinterface)                                                                                                                                                      |
| DequeVideo       | ( uid: [UidType](#uidtype) ) => void                                                      | Shifts given `uid` to top of [renderPosition](/customization-api/api-reference/app-state-library#renderstateinterface)                                                                                                                                                                      |
| UpdateRenderList | ( uid: [UidType](#uidtype), user: Partial<[RenderInterface](#renderinterface)\> ) => void | Updates [renderObject](#renderinterface) of the given `uid` in [renderList](/customization-api/api-reference/app-state-library#renderstateinterface)                                                                                                                                        |
| AddCustomContent | ( uid: [UidType](#uidtype), data: [RenderInterface](#renderinterface) ) => void           | Adds the given `data` to [renderlist](/customization-api/api-reference/app-state-library#renderstateinterface) with given `uid` as key. Used alongside [CustomContent API](/customization-api/api-reference/components-api#videocallcustomcontent) for adding and displaying custom content |

</method>

<!-- ***************************************************************************************************************** -->

</api>
