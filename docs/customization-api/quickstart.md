---
sidebar_label: Quickstart
sidebar_position: 1
description: Get started with using customization api to modify your App Builder application
title: Customization API Quickstart Guide
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes how to quickly get started with Customization API to modify your App Builder application.

As a showcase we will be exploring how to override the default ChatBubble component with our own component and adding a userbubble that displays the first character of the username alongside the chatbubble.

## INITIALIZING

#### STEP 1

Download and extract the app builder source code, [read more on how to do it here](/turn-key/quickstart).

#### STEP 2

Run the **agora-app-builder-cli** in your project folder using the following command:

<!-- RHS -->

```shell
npm i && npm run start
```

#### STEP 3

<!-- LHS -->

Navigate using the arrow keys and select the `Initialize User customization` option using the enter key. After which the CLI will start the initialization.

Once complete a boilerplate user-customization will be created inside `<path-to-app-builder-project-folder>/<project-name>/customization/index.tsx`.

<!-- RHS -->

<!-- ![Main menu, Build highlighted screenshot](sdk/angular/1.png) -->
<image alt="Build option" lightImageSrc="customization-api/guides/quickstart-1.png" darkImageSrc="customization-api/guides/quickstart-1.png" />

<!-- LHS -->

---

## USAGE EXAMPLE

Customization API is a set of APIs and Libraries that allow you to customize your App Builder project.

**APIs** are exposed under the `customize` method by passing an object with keys corresponding to the API you want to interact with. Whereas **Libraries** are available as imports under the `customization-api` namespace.

**The following steps indicate an example customization by overriding the App Builder Chat Bubble component.**

<!-- LHS -->

#### STEP 1

Open the `index.tsx` file present inside the newly created `customization` folder.

<!-- RHS -->

<image alt="Build option" lightImageSrc="customization-api/guides/quickstart-2.png" darkImageSrc="customization-api/guides/quickstart-2.png" />

<!-- LHS -->

#### STEP 2

Create a component you want to override the default Chat Bubble component with.

<!-- RHS -->

```tsx title='<path-to-app-builder-project-folder>/<project-name>/customization/components/MyChatBubbleComponent.tsx'
import React from "react";

const ChatBubbleComponent = (props) => {
  return <></>;
};

export default ChatBubbleComp;
```

<!-- LHS -->

#### STEP 3

When passed as an override the component will recieve props to display necessary information or perform necessary actions. We can refer to the [api reference](/customization-api/api-reference/components-api#chatbubblecomponent) to see the props available to our component and destructure them for use.

<!-- RHS -->

```tsx {4} title='<path-to-app-builder-project-folder>/<project-name>/customization/components/MyChatBubbleComponent.tsx'
import React from "react";

const ChatBubbleComponent = (props) => {
  const { uid, isLocal } = props;

  return <></>;
};

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 4

Once we have the props, we can fetch any other information like in our case we recieve the message senders `uid` as prop however in UI it would be more helpful to show the `displayName` of the user. We can fetch any such information using the [App state library](/customization-api/api-reference/app-state-library) the `displayName` in specific can be fetched from the [Render app state](/customization-api/api-reference/app-state-library#userender)

<!-- RHS -->

```tsx {2,7-11} title='<path-to-app-builder-project-folder>/<project-name>/customization/components/MyChatBubbleComponent.tsx'
import React from "react";
import { useRender } from "customization-api";

const ChatBubbleComponent = (props) => {
  const { uid, isLocal } = props;

  // Get data from render app-state
  const { renderList } = useRender();

  // Fetch username using uid
  const displayName = renderList[uid].name;

  return <></>;
};

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 5

Since we only want to make a small modification to the UI we can reuse the default [ChatBubbleComponent](/customization-api/api-reference/sub-component-library#chatbubble) available to us along with various default components a part of the [SubComponentsLibrary](/customization-api/api-reference/sub-component-library). We pass all the recieved props as is to the imported component.

<!-- RHS -->

```tsx {1,13} title='<path-to-app-builder-project-folder>/<project-name>/customization/components/MyChatBubbleComponent.tsx'
import { ChatBubble, useRender } from "customization-api";
import React from "react";

const ChatBubbleComponent = (props) => {
  const { uid, isLocal } = props;

  // Get data from render app-state
  const { renderList } = useRender();

  // Fetch username using uid
  const displayName = renderList[uid].name;

  return <ChatBubble {...props} />;
};

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 6

Having all the needed information at hand we can start defining our UI. To fetch the colors defined by the AppBuilder theme in use we can import the [config Library](/customization-api/api-reference/config-library). We can also conditionally style our component using the `isLocal` flag recieved as prop.

<!-- RHS -->

```tsx title='<path-to-app-builder-project-folder>/<project-name>/customization/components/MyChatBubbleComponent.tsx'
import { ChatBubble, useRender, $config } from "customization-api";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatBubbleComponent = (props) => {
  const { uid, isLocal } = props;

  // Get data from render app-state
  const { renderList } = useRender();

  // Fetch username using uid
  const displayName = renderList[uid].name;

  const { container, containerLocal, containerRemote, username, usernameLocal, usernameRemote } = styles;

  return (
    <View style={[container, isLocal ? containerLocal : containerRemote]}>
      <View style={[username, isLocal ? usernameLocal : usernameRemote]}>
        <Text
          style={{ fontWeight: "bold", color: isLocal ? "black" : "white" }}
        >
          {displayName.slice(0, 1)}
        </Text>
      </View>
      <ChatBubble {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
  },
  containerLocal: {
    flexDirection: "row-reverse",
  },
  containerRemote: {
    flexDirection: "row",
  },
  username: {
    height: 32,
    width: 32,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5px",
    backgroundColor: $config.PRIMARY_FONT_COLOR + "20",
  },
  usernameLocal: {
    marginLeft: -10,
    marginRight: 0,
  },
  usernameRemote: {
    marginLeft: 5,
    marginRight: -10,
  },
});

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 6

We call the `customize` method and pass an object with the necessary keys. Since we want to override the Chat Bubble component our object should look like so based on the [Api Reference](/customization-api/api-reference/components-api).

<!-- RHS -->

```tsx {5-13} title='<path-to-app-builder-project-folder>/<project-name>/customization/components/index.tsx'
import { customize } from "customization-api";

import MyChatBubbleComponent from "./components/MyChatBubbleComponent";

const userCustomization = customize({
  components: {
    videoCall: {
      chat: {
        chatBubble: MyChatBubbleComponent,
      },
    },
  },
});

export default userCustomization;
```

<!-- LHS -->

#### STEP 7

Finally we export our customization generated by the `customize` method to allow App Builder to apply it.

<!-- RHS -->

```js {15} title='<path-to-app-builder-project-folder>/<project-name>/customization/components/index.tsx'
import { customize } from "customization-api";

import MyChatBubbleComponent from "./components/MyChatBubbleComponent";

const userCustomization = customize({
  components: {
    videoCall: {
      chat: {
        chatBubble: MyChatBubbleComponent,
      },
    },
  },
});

export default userCustomization;
```

<!-- LHS -->

#### STEP 8

You should now see your customization applied to App Builder when you build your project.

<!-- RHS -->

<!-- ![Website with App Builder embedded](sdk/angular/5.png) -->
<imageSlider alt="AppBuilder customization-api quickstart" darkImageSrc1="customization-api/guides/guide-before.png" darkImageSrc2="customization-api/guides/guide-after.png" />
