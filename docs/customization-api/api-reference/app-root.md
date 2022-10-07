---
sidebar_label: App Root API
sidebar_position: 2
description: App Root API
title: App Root API
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

Provides API to insert a custom root component.

## appRoot : [React.Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

Accepts a React Component under which the AppBuilder ui is rendered.

:::info
The component must return the recieved `props.children` to render the AppBuilder ui.
:::

:::tip
App root does not have access to any AppBuilder [app states](/customization-api/api-reference/app-state-library) however can be used in tandem with [useUserContext](/customization-api/api-reference/components-api#useusercontext) to supply app state values as needed via a shared context / data-store.
:::

Use the example code given below showcasing a simple usecase of the api as a guide.

```tsx {72-79} gh="https://github.com/AgoraIO-Community/App-Builder-Customization-API-Examples/blob/main/customization-api-example/apiexamples/customization/api/app-root.tsx"
import { customize } from "customization-api";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export interface AppRootInterface {
  customKey1?: string;
  customKey2?: string;
}

const AppRootContext = React.createContext<AppRootInterface>({
  customKey1: "default value 1",
  customKey2: "default value 2",
});

interface AppRootProviderProps {
  children: React.ReactNode;
}

const AppRootProvider = (props: AppRootProviderProps) => {
  const [customState, setCustomState] = useState<AppRootInterface>({});
  useEffect(() => {
    setCustomState({
      customKey1: "custom value 1",
      customKey2: "custom value 2",
    });
  }, []);
  return (
    <AppRootContext.Provider value={{ ...customState }}>
      {props.children}
    </AppRootContext.Provider>
  );
};

const VideoCallPage = () => {
  const { customKey1, customKey2 } = useContext(AppRootContext);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, { fontWeight: "bold" }]}>
          Custom key 1 - {customKey1} {"\n"}
          Custom key 2 - {customKey2} {"\n"}
        </Text>
        <Text style={styles.textStyle}>
          Here is your app root sample usage.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90EE90",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    maxHeight: 200,
    borderRadius: 30,
  },
  textStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 30,
  },
});

const customization = customize({
  appRoot: AppRootProvider,
  components: {
    videoCall: VideoCallPage,
  },
});

export default customization;
```

<imageSlider alt="App root override" darkImageSrc1="customization-api/api/components-api/videocall-bar-before.png" darkImageSrc2="customization-api/api/app-root-api/approot-after.png" />
