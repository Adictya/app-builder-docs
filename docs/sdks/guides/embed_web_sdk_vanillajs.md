---
sidebar_label: Embed using VanillaJS
sidebar_position: 2
description: How to embed the App Builder Web SDK in a VanillaJS web app ?
title: Embed App Builder Web SDK in a (VanillaJS) Web App
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes the process of embedding the App Builder Web SDK in a vanilla JS project.

## BUILDING

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
<image alt="Build option" lightImageSrc="sdk/vanillajs/1.png" darkImageSrc="sdk/vanillajs/1.png" />

<!-- LHS -->

#### STEP 3

Select the `Web SDK` platform, after which the CLI will start the build process. This will take a few minutes.

<!-- RHS -->

<!-- ![Build menu, Web-SDK highlighted screenshot](./2.png) -->
<image alt="Build option" lightImageSrc="sdk/vanillajs/2.png" darkImageSrc="sdk/vanillajs/2.png" />

<!-- LHS -->

#### STEP 4

Once the build is complete navigate to `./Builds/web-sdk` folder.

<!-- RHS -->

<!-- ![File explorer with web-sdk folder highlighted](./3.png) -->
<image alt="Build option" lightImageSrc="sdk/vanillajs/3.png" darkImageSrc="sdk/vanillajs/3.png" />

<!-- LHS -->

#### STEP 5

The `app-builder-web-sdk.var.js` is intended for use in plain Vanilla JS projects. Copy this file to your target Vanilla JS project directory.

<!-- RHS -->

<!-- ![File explorer with app-builder-web-sdk.var.js highlighted](./4.png) -->
<image alt="Build option" lightImageSrc="sdk/vanillajs/4.png" darkImageSrc="sdk/vanillajs/4.png" />

---

## USAGE

<!-- LHS -->

#### STEP 1

Import `app-builder-web-sdk.var.js` into your desired HTML file where you want to embed your App Builder project like so:

<!-- RHS -->

```html {2}
<head>
  <script src="app-builder-web-sdk.var.js"></script>
</head>
```

<!-- LHS -->

#### STEP 2

After importing the script your App Builder project can be rendered using the `<app-builder />` custom html element.

Make sure to provide necessary styling including a width and height on the parent element of the custom html element for proper scaling.

<!-- RHS -->

```html {2-4}
<body>
  <div style="width: 100vw; height: 550px;">
    <app-builder />
  </div>
</body>
```

<!-- LHS -->

#### STEP 3

Open the html file in your desired browser to see the output or run a dev server using the following command inside your vanilla JS project directory

<!-- RHS -->

```shell
npx serve .
```

<!-- LHS -->

#### STEP 4

You should now see your App Builder project being displayed in your desired webpage.

<!-- RHS -->

<!-- ![Website with App Builder embedded](./5.png) -->
<image alt="Build option" lightImageSrc="sdk/vanillajs/5.png" darkImageSrc="sdk/vanillajs/5.png" />

---

## CUSTOMIZATION

<!-- LHS -->

#### STEP 1

You can use FPEs (First Party Extension) to customize your embedded App Builder project.

Read [this guide](/customization-api/quickstart) for more information.

<!-- LHS -->

#### STEP 2

To create a Customization you need to access the `createCustomization` method on the global `AgoraAppBuilder` object, which takes the `UserCustomizationConfig` as a parameter and returns a customization object.

<!-- RHS -->

```html {5-11}
<body>
  <div style="width: 100vw; height: 550px;">
    <app-builder />
  </div>
  <script>
    const customization = AgoraAppBuilder.createCustomization({
    /*
      My Customization Config. See https://appbuilder-docs.agora.io/customization-api/quickstart to get started with customizing!
    */
    });
  </script>
</body>
```

<!-- LHS -->

#### STEP 3

Pass the returned customization object to the `customize` method available under the same `AgoraAppBuilder` object to apply the config to your embedded App Builder project.

<!-- RHS -->

```html {7}
<script>
    const customization = AgoraAppBuilder.createCustomization({
    /*
      My Customization Config. See https://appbuilder-docs.agora.io/customization-api/quickstart to get started with customizing!
    */
    });
    AgoraAppBuilder.customize(customization);
</script>
```

<!-- LHS -->

#### STEP 4

You should now be able to see your customizations in action!

<!-- RHS -->

<!-- ![Website with App Builder embedded](./6.png) -->
<image alt="Build option" lightImageSrc="sdk/vanillajs/6.png" darkImageSrc="sdk/vanillajs/6.png" />

---
