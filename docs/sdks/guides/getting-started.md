---
sidebar_label: Getting Started
sidebar_position: 1
description: Embed App Builder SDK in your app
title: How to embed the App Builder Web SDK in a VueJS web app ?
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes the process of embedding the App Bulder Web SDK in a VueJS web app.

## BUILDING

#### STEP 1

You need to download and extract the app builder source code, you can read more [here](https://appbuilder.agora.io/docs/Frontend/Web-guide)<br/> Run the app-builder-cli in your project folder using the following command:

```
npm i && npm run start
```

#### STEP 2

Navigate using the arrow keys and select the build option using the enter key

<image alt="Build option" lightImageSrc="guides/step2-websdk.png" darkImageSrc="guides/step2-websdk.png" />

#### STEP 3

Select the Web SDK platform, after which the CLI will start the build process. This will take a few minutes.

<image alt="Build option" lightImageSrc="guides/step3-websdk.png" darkImageSrc="guides/step3-websdk.png" />

#### STEP 4

Select the <strong>Web SDK</strong> platform, after which the CLI will start the build process. This will take a few minutes.

<image alt="Build option" lightImageSrc="guides/step4-websdk.png" darkImageSrc="guides/step4-websdk.png" />
<hr/>

## CUSTOMIZATION

You can use FPEs (First Party Extension) to customize your embedded App Builder project.<br/>
Read this [guide](https://appbuilder.agora.io/docs/Frontend/Web-guide) for more information

#### STEP 1

To create a FPE in a VueJS web app you need to access the createFPE method on the imported AgoraAppBuilder object, which takes the FPEConfig as a parameter and returns a FPE Object.

```jsx
<template>
  <div style="width:100vw; height:550px;">
    <app-builder />
  </div>
</template>
```
