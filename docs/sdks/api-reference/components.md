---
sidebar_label: Components
sidebar_position: 1
title: Components
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

<tabsToggle sdk/>

---

<tabs lazy sdk>

<method>

## View: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

React component that renders the App Builder UI.

:::info
To ensure proper scalling according to the host application, wrap the component in a div with `display: flex` style applied.
:::

```js {8}
import AppBuilderReactSDK from "@appbuilder/react";

const App = () => {
...
return (
    ...
    <div style={{ display: "flex", flex: 1 }}>
      <AppBuilderReactSdk.View />
    </div>
    ...
);
}
```

</method>

<method>

## app-builder

HTML5 web component that renders the App Builder UI.

:::info
To ensure proper scalling according to the host application, wrap the component in a div with `display: flex` style applied.
:::

```js {2}
<div style=" display: flex; flex: 1 ">
  <app-builder />
</div>
```

</method>

</tabs>
