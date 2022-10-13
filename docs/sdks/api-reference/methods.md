---
sidebar_label: Methods
sidebar_position: 2
title: Methods
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

Methods available on the sdk default export to interact with app builder.

---

<method>

## customize( [CustomizationApiInterface](/customization-api/api-reference/components-api) ): void

Some content about the method that explains what it does.

```js
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  AppBuilderReactSDK.customize({
    // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
  });
}, []);
```

</method>

---

<method>

## createCustomization( [CustomizationApiInterface](/customization-api/api-reference/components-api) ): [CustomizationApiInterface](/customization-api/api-reference/components-api)

Some content about the method that explains what it does.

```js
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  AppBuilderReactSDK.customize({
    // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
  });
}, []);
```

</method>

---

<method>

## join( roomId: string ): Promise<void\>

Some content about the method that explains what it does.

```js
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  AppBuilderReactSDK.customize({
    // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
  });
}, []);
```

</method>

---

<method>

## on( eventName: keyof [sdkEventsMapInterface](#sdkeventsmapinterface) , callback: [sdkEventsMapInterface](#sdkeventsmapinterface)[eventName] ): [unsubscribe](#unsubscribe)

Some content about the method that explains what it does.

#### sdkEventsMapInterface

| EventName     | CallbackType                                                                                       | Description                               |
| ------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| create        | ( hostPhrase: string, attendeePhrase?: string, pstNumber?: {number: string, pin: string} ) => void | Triggered when a meeting is created       |
| ready-to-join | ( meetingTitle: string, devices: MediaDeviceInfo[] ) => void                                       | Triggered when user on the precall screen |
| join          | ( meetingTitle: string, devices: MediaDeviceInfo[], isHost: boolean ) => void                      | Triggered when user joins a meeting       |
| leave         | () => void                                                                                         | Triggered when user leaves a meeting      |

```js
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  AppBuilderReactSDK.customize({
    // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
  });
}, []);
```

<br/>

### _Returns_:

<method>

<collapsible>

### unsubscribe(): void

Unsubscribes from the method

</collapsible>

</method>

</method>
