---
sidebar_label: Events
sidebar_position: 3
title: Events
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

<tabsToggle sdk/>

Events emitted by the AppBuilder Embed SDK.

#### sdkEventsMapInterface

| Key                             | Type                                                                                                                                              | Description                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [create](#create)               | ( hostPhrase: string, attendeePhrase?: string, pstnNumber?: { number: string, pin: string } ): void                                               | Triggered when a meeting is created       |
| [ready-to-join](#ready-to-join) | ( meetingTitle: string, devices: [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)[] ) => void                  | Triggered when user on the precall screen |
| [join](#join)                   | ( meetingTitle: string, devices: [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)[], isHost: boolean ) => void | Triggered when user joins a meeting       |
| [leave](#leave)                 | () => void                                                                                                                                        | Triggered when user leaves a meeting      |

<br/>

<collapsible>

<method>

## create( hostPhrase: string, attendeePhrase?: string, pstnNumber?: { number: string, pin: string } ): void

#### Parameters

| Parameter       | Type                            | Description                             |
| --------------- | ------------------------------- | --------------------------------------- |
| hostPhrase      | string                          | Meeting pass phrase to join as host     |
| attendeePhrase? | string                          | Meeting pass phrase to join as attendee |
| pstnNumber?     | { number: string, pin: string } | Meeting PSTN Dial-in info               |

<tabs sdk>

```js {6-15}
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  const unbind = AppBuilderReactSDK.on(
    "create",
    (hostPhrase, attendeePhrase, pstnNumber) => {
      console.log("Meeting created with", {
        hostPhrase,
        attendeePhrase,
        pstnNumber,
      });
    }
  );

  return () => {
    unbind();
  };
}, []);
```

```js
import AppBuilderWebSDK from "@appbuilder/web";

const unbind = AppBuilderWebSDK.on(
  "create",
  (hostPhrase, attendeePhrase, pstnNumber) => {
    console.log("Meeting created with", {
      hostPhrase,
      attendeePhrase,
      pstnNumber,
    });
  }
);

...

unbind();
```

</tabs>

</method>

</collapsible>

<br/>

<collapsible>

<method>

## ready-to-join( meetingTitle: string, devices: [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)[] ): void

#### Parameters

| Parameter    | Type                                                                                  | Description                                   |
| ------------ | ------------------------------------------------------------------------------------- | --------------------------------------------- |
| meetingTitle | string                                                                                | Name of the meeting being joined              |
| devices      | [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)[] | Array media devices detected by the Agora SDK |

<tabs sdk>

```js {6-11}
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  const unbind = AppBuilderReactSDK.on(
    "ready-to-join",
    (meetingTitle, devices) => {
      console.log("Ready to join meeting with", { meetingTitle, devices });
    }
  );

  return () => {
    unbind();
  };
}, []);
```

```js
import AppBuilderWebSDK from "@appbuilder/web";

const unbind = AppBuilderWebSDK.on(
  "ready-to-join",
  (meetingTitle, devices) => {
    console.log("Ready to join meeting with", { meetingTitle, devices });
  }
);

...

unbind();
```

</tabs>

</method>

</collapsible>

<br/>

<collapsible>

<method>

## join( meetingTitle: string, devices: [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)[], isHost: boolean ): void

#### Parameters

| Parameter    | Type                                                                                  | Description                                      |
| ------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------ |
| meetingTitle | string                                                                                | Name of the meeting being joined                 |
| devices      | [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)[] | Array of media devices detected by the Agora SDK |
| isHost       | boolean                                                                               | Indicates if user is joining meeting as a host   |

<tabs sdk>

```js {6-11}
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  const unbind = AppBuilderReactSDK.on(
    "join",
    (meetingTitle, devices, isHost) => {
      console.log("Joining meeting with", { meetingTitle, devices, isHost });
    }
  );

  return () => {
    unbind();
  };
}, []);
```

```js
import AppBuilderWebSDK from "@appbuilder/web";

const unbind = AppBuilderWebSDK.on(
  "join",
  (meetingTitle, devices, isHost) => {
    console.log("Joining meeting with", { meetingTitle, devices, isHost });
  }
);

...

unbind();
```

</tabs>

</method>

</collapsible>

<br/>

<method>

<collapsible>

## leave(): void

<tabs sdk>

```js {6-8}
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  const unbind = AppBuilderReactSDK.on("leave", () => {
    console.log("App Builder meeting left");
  });

  return () => {
    unbind();
  };
}, []);
```

```js
import AppBuilderWebSDK from "@appbuilder/web";

const unbind = AppBuilderWebSDK.on("leave", () => {
  console.log("App Builder meeting left");
});

...

unbind();
```

</tabs>

</collapsible>

</method>
