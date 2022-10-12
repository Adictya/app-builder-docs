---
sidebar_label: Embed using Angular
sidebar_position: 3
description: How to embed the App Builder Web SDK in a Angular web app ?
title: Embed App Builder Web SDK in an Angular Web App
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes the process of embedding the App Builder Web SDK in an Angular web app.

## BUILDING

#### STEP 1

You need to download and extract the app builder source code, you can read more [here](/turn-key/quickstart).

Run the **app-builder-cli** in your project folder using the following command:

<!-- RHS -->

```shell
npm i && npm run start
```

<!-- LHS -->

#### STEP 2

Navigate using the arrow keys and select the `Build` option using the enter key

<!-- RHS -->

<!-- ![Main menu, Build highlighted screenshot](sdk/angular/1.png) -->
<image alt="Build option" lightImageSrc="sdk/angular/1.png" darkImageSrc="sdk/angular/1.png" />

<!-- LHS -->

#### STEP 3

Select the `Web SDK` platform, after which the CLI will start the build process. This will take a few minutes.

<!-- RHS -->

<!-- ![Build menu, Web-SDK highlighted screenshot](sdk/angular/2.png) -->
<image alt="Build option" lightImageSrc="sdk/angular/2.png" darkImageSrc="sdk/angular/2.png" />

<!-- LHS -->

#### STEP 4

Once the build is complete open a terminal window in your Angular project directory.

<!-- RHS -->

<!-- ![Terminal window inside Angular project folder](sdk/angular/3.png) -->
<image alt="Build option" lightImageSrc="sdk/angular/3.png" darkImageSrc="sdk/angular/3.png" />

<!-- LHS -->

#### STEP 5

The **app-builder-cli** compiles your App Builder project into a node module inside the `<Agora App Builder>/Builds/web-sdk` folder. Simply install this module using the following command.

<!-- RHS -->

```shell
npm install <path-to-app-builder-project-folder>/Builds/web-sdk
```

---

## USAGE

<!-- LHS -->

#### STEP 1

The module is installed with same name as your App Builder project. Import it just like any other node module into your desired angular component file.

<!-- RHS -->

```js {2-5}
import { Component } from "@angular/core";
import AgoraAppBuilder from "@appbuilder/web";

// To prevent removal of AgoraAppBuilder via dead code elimination.
console.log(AgoraAppBuilder);
```

<!-- LHS -->

#### STEP 2

After importing the module your App Builder project can be rendered using the `<app-builder />` custom html element.

Make sure to provide necessary styling including a width and height on the parent element of the custom html element for proper scaling.

<!-- RHS -->

```js {4-12}
...
@Component({
  selector: 'app-root',
  template: ` <div id="app-builder-container">
    <app-builder></app-builder>
  </div> `,
  styles: [`
    #app-builder-container{
      width: 100vw;
      height: 100vh;
    }
  `],
})
...
```

<!-- LHS -->

#### STEP 3

You also need to add `CUSTOM_ELEMENTS_SCHEMA` in your module file for your component to enable support for custom html elements.

<!-- RHS -->

```js {11}
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

...

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

...
```

<!-- LHS -->

#### STEP 4

Start the development server inside your Angular project directory with the following command

<!-- RHS -->

```shell
ng serve
```

<!-- LHS -->

#### STEP 5

You should now see your App Builder project being displayed in your desired Angular component.

<!-- RHS -->

<!-- ![Website with App Builder embedded](sdk/angular/5.png) -->
<image alt="Build option" lightImageSrc="sdk/angular/5.png" darkImageSrc="sdk/angular/5.png" />

---

## CUSTOMIZATIONS

<!-- LHS -->

#### STEP 1

You can use FPEs (First Party Extension) to customize your embedded App Builder project.

Read [this guide](/customization-api/quickstart) for more information.

<!-- LHS -->

#### STEP 2

To create a Customization you need to access the `createCustomization` method on the imported `AgoraAppBuilder` object, which takes the `UserCustomizationConfig` as a parameter and returns a customization object.

<!-- RHS -->

```js {3-7}
import AgoraAppBuilder from "@appbuilder/web";

const customization = AgoraAppBuilder.createCustomization({
/*
  My Customization Config. See https://appbuilder-docs.agora.io/customization-api/quickstart to get started with customizing!
*/
});
```

<!-- LHS -->

#### STEP 3

Pass the returned customization object to the `customize` method available under the same `AgoraAppBuilder` object to apply the config to your embedded App Builder project.

<!-- RHS -->

```js {8}
import AgoraAppBuilder from "@appbuilder/web";

const customization = AgoraAppBuilder.createCustomization({
/*
  My Customization Config. See https://appbuilder-docs.agora.io/customization-api/quickstart to get started with customizing!
*/
});
AgoraAppBuilder.customize(customization);
```

<!-- LHS -->

#### STEP 4

You should now be able to see your customizations in action!

<!-- RHS -->

<!-- ![Website with App Builder embedded customized](sdk/angular/6.png) -->
<image alt="Build option" lightImageSrc="sdk/angular/6.png" darkImageSrc="sdk/angular/6.png" />
