---
sidebar_label: Embed using NextJS
sidebar_position: 5
description: How to embed the App Builder Web SDK in a NextJS web app ?
title: Embed App Builder Web SDK in a NextJS Web App
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes the process of embedding the App Builder React SDK in a NextJS app.

## Building

#### STEP 1

<!-- LHS -->

You need to download and extract the app builder source code, you can read more [here](/turn-key/quickstart).

Run the **app-builder-cli** in your project folder using the following command:

<!-- RHS -->

```shell
npm i && npm run start
```

#### STEP 2

<!-- LHS -->

Navigate using the arrow keys and select the `Build` option using the enter key

<!-- RHS -->

<!-- ![Main menu, Build highlighted screenshot](./1.png) -->
<image alt="Build option" lightImageSrc="sdk/nextjs/1.png" darkImageSrc="sdk/nextjs/1.png" />

#### STEP 3

<!-- LHS -->

Select the `React SDK` platform, after which the CLI will start the build process. This will take a few minutes.

<!-- RHS -->

<!-- ![Build menu, React-SDK highlighted screenshot](./2.png) -->
<image alt="Build option" lightImageSrc="sdk/nextjs/2.png" darkImageSrc="sdk/nextjs/2.png" />

#### STEP 4

<!-- LHS -->

Once the build is complete open a terminal window in your NextJs project directory.

<!-- RHS -->

<!-- ![Terminal window inside Next js project folder](./3.png) -->
<image alt="Build option" lightImageSrc="sdk/nextjs/3.png" darkImageSrc="sdk/nextjs/3.png" />

#### STEP 5

<!-- LHS -->

The **app-builder-cli** compiles your App Builder project into a node module inside the `<Agora App Builder>/Builds/react-sdk` folder. Simply install this module using the following command.

<!-- RHS -->

`npm install <path-to-app-builder-project-folder>/Builds/react-sdk`

---

## Usage

#### STEP 1

<!-- LHS -->

The module is installed with same name as your App Builder project which can be imported into your Nextjs App.

However in a NextJS environment, Client Side rendering must be enforced for the App Builder component. One way to do so is by importing App Builer into a **new App Builder wrapper component**.

<!-- RHS -->

```js title="src/components/AppBuilderWrapper.tsx"
import AgoraAppBuilder from "@appbuilder/react";
```

#### STEP 2

<!-- LHS -->

After importing the module your App Builder project can be rendered using the `View` property on the imported `AgoraAppBuilder` object.

Make sure to provide necessary styling including a width, height and display flex on the parent element of the `View` component for proper scaling.

<!-- RHS -->

```js {5-7} title="src/components/AppBuilderWrapper.tsx"
import AgoraAppBuilder from "@appbuilder/react";

const AppBuilderWrapper = () => {
  return (
    <div style={{display:'flex',width: '100vw', height: '550px'}}>
      <AgoraAppBuilder.View />
    </div>
  )
};
```

#### STEP 3

<!-- LHS -->

**Dynamically import** the wrapper in your desired Nextjs page/component using the `dynamic` function.

<!-- RHS -->

```js
import dynamic from "next/dynamic";

const AgoraAppBuilderWraper = dynamic(
  () => import("../components/AppBuilderWrapper"),
  {
    ssr: false,
  }
);
```

#### STEP 4

<!-- LHS -->

After dynamically importing the wrapper it can be rendered normally in any page/component.

You can add a `suppressHydrationWarning={true}` prop to the parent element of the wrapper to suppress any subsequent hydration warnings emitted due to client side rendering of its children component.

<!-- RHS -->

```js {10-16}
import dynamic from "next/dynamic";

const AgoraAppBuilderWraper = dynamic(
  () => import("../components/AppBuilderWrapper"),
  {
    ssr: false,
  }
);

const VideoCall = () => {
  return (
    <div suppressHydrationWarning={true}>
      <AgoraAppBuilderWrapper />
    </div>
  );
};
```

#### STEP 5

<!-- LHS -->

Start the development server inside your NextJs project directory with the following command

<!-- RHS -->

`npm run dev`

#### STEP 6

<!-- LHS -->

You should now see your App Builder project being displayed in your desired web page.

<!-- RHS -->

<!-- ![Website with App Builder embedded](./5.png) -->
<image alt="Build option" lightImageSrc="sdk/nextjs/5.png" darkImageSrc="sdk/nextjs/5.png" />

---

## Customization

#### STEP 1

<!-- LHS -->

You can use FPEs (First Party Extension) to customize your embedded App Builder project.

Read [this guide](/customization-api/quickstart) for more information.

#### STEP 2

<!-- LHS -->

To create a Customization you need to access the `createCustomization` method on the imported `AgoraAppBuilder` object, which takes the `UserCustomizationConfig` as a parameter and returns a customization object.

Make sure you do this on component mount for best results.

<!-- RHS -->

```js {4-10} title="src/components/AppBuilderWrapper.tsx"
import AgoraAppBuilder from "@appbuilder/react";

const AppBuilderWrapper = () = {
  useEffect(()=>{
    const customization = AgoraAppBuilder.createCustomization({
    /*
      My Customization Config. See https://appbuilder-docs.agora.io/customization-api/quickstart to get started with customizing!
    */
    });
  },[])
...
```

#### STEP 3

<!-- LHS -->

Pass the returned customization object to the `customize` method available under the same `AgoraAppBuilder` object to apply the config to your embedded App Builder project.

<!-- RHS -->

```js {10} title="src/components/AppBuilderWrapper.tsx"
import AgoraAppBuilder from "@appbuilder/react";

const AppBuilderWrapper = () = {
  useEffect(()=>{
    const customization = AgoraAppBuilder.createCustomization({
    /*
      My Customization Config. See https://appbuilder-docs.agora.io/customization-api/quickstart to get started with customizing!
    */
    });
    AgoraAppBuilder.customize(customization);
  },[])
...
```

#### STEP 4

<!-- LHS -->

You should now be able to see your customizations in action!

<!-- RHS -->

<!-- ![Website with App Builder embedded customized](./6.png) -->
<image alt="Build option" lightImageSrc="sdk/nextjs/6.png" darkImageSrc="sdk/nextjs/6.png" />
