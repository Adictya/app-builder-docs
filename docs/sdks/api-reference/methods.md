---
sidebar_label: Methods
sidebar_position: 2
title: Methods
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

<tabsToggle sdk/>

Methods available on the sdk default export to interact with app builder.

---

<method>

## customize( [CustomizationApiInterface](/customization-api/api-reference/components-api) ): void

Applies your customization to the Embed-SDK.

<tabs sdk>

```js
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  AppBuilderReactSDK.customize({
    // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
  });
}, []);
```

<method>

:::info
Call the method before rendering the <app-builder\> component to see changes.
:::

```js
import AppBuilderWebSDK from "@appbuilder/web";

AppBuilderWebSDK.customize({
  // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
});
```

</method>

</tabs>

</method>

---

<method>

## createCustomization( [CustomizationApiInterface](/customization-api/api-reference/components-api) ): [CustomizationApiInterface](/customization-api/api-reference/components-api)

Creates a customization object to be applied via the [customize method](#customize).

<tabs sdk>

```js
import AppBuilderReactSDK from "@appbuilder/react";

...

useEffect(() => {
  AppBuilderReactSDK.createCustomization({
    // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
  });
}, []);
```

```js
import AppBuilderWebSDK from "@appbuilder/web";

cosnt myCustomization = AppBuilderWebSDK.createCustomization({
  // Your customization, see https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
});
```

</tabs>

</method>

---

<method>

## join( roomId: string ): Promise<void\>

Allows user to programatically join a meeting with given `roomId`.

<tabs sdk>

```js
import AppBuilderReactSDK from "@appbuilder/react";

const JoinButtonClickHandler = () => {
  AppBuilderReactSDK.join(
    /* Meeting id: */ "/7e6f1680-b20d-4273-bcf4-e1137fcb9ea3"
  ).then(() => {
    console.log("App Builder meeting joined");
  });
};
```

```js
import AppBuilderWebSDK from "@appbuilder/web";

const JoinButtonClickHandler = () => {
  AppBuilderWebSDK.join(
    /* Meeting id: */ "/7e6f1680-b20d-4273-bcf4-e1137fcb9ea3"
  ).then(() => {
    console.log("App Builder meeting joined");
  });
};
```

</tabs>

</method>

---

<method>

## on( eventName: keyof [sdkEventsMapInterface](/sdks/api-reference/events#sdkeventsmapinterface) ,callback: [sdkEventsMapInterface](/sdks/api-reference/events#sdkeventsmapinterface)[eventName] ): [unsubscribe](#unsubscribe)

Allows attaching callbacks to events emitted by the Embed-SDK. A list of all events along with necessary callbacks can be found [here](/sdks/api-reference/events).

<tabs sdk>

```js
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

const unbind = AppBuilderReactSDK.on("leave", () => {
  console.log("App Builder meeting left");
});

...

unbind();
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### unsubscribe(): void

Unsubscribes from the method

</collapsible>

</method>

</method>
