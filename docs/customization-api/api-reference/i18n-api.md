---
sidebar_label: i18n API
sidebar_position: 2
description: Customize the text content of your application using this API
title: i18n API
keywords: [i18nInterface, i18nDataInterface]
sidebar_custom_props: { icon: "i18" }
---

Provides API to customize and add multiple language and locale translations for all strings used across App Builder.

## i18n : [i18nInterface](#i18ninterface)\[\]

Accepts an array of [i18nInterface](#i18ninterface) objects, each specific to a language or locale.

The overrides are applied by passing the array under the top-level `i18n` key to the Customization API config object.

#### i18nInterface

| Key    | Type                                    | Description                                     |
| ------ | --------------------------------------- | ----------------------------------------------- |
| locale | string                                  | Unique string identifier to specify a language. |
| label? | string                                  | Language name to display in the UI dropdown     |
| data   | [i18nDataInterface](#i18ndatainterface) | The necessary translations for a given locale   |

#### i18nDataInterface

<!-- TODO(adictya): Try a different representation method for this  -->

| Key                          | Type                                                                                        | Description                                       | Defaults          |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------- |
| meetingNameInputPlaceholder? | [I18nBaseType](#i18nbasetypet)                                                              | Placeholder text for the meeting name input field | Name your meeting |
| pstnUserLabel?               | [I18nBaseType](#i18nbasetypet)                                                              | Label for the PSTN user                           | PSTN User         |
| joinRoomButton?              | [I18nBaseType](#i18nbasetypet)<[JoinRoomButtonTextInterface](#joinroombuttontextinterface)> | Label for the join room button on precall screen  | Join room         |

<br/>

> App Builder ships with `en-us` out of the Box. Providing an object with en-us as it's locale will replace the default strings

> When there are two or more translations in the App(including the default `en-us`), A dropdown language selector will be display in both the precall screen as well as the settings panel.

<br/>

### _Usage_:

Use the example code given below showcasing overriding

```js
import React from "react";
import { customize } from "customization-api";

const userCustomization = customize({
  i18n: [
    {
      locale: "en-us",
      label: "English US",
      data: {
        meetingNameInputPlaceholder: "Name your Room",
        pstnUserLabel: "Dial In User",
        joinRoomButton: ({ ready, role }) =>
          ready
            ? !role
              ? "Join Room"
              : `Join Room as ${
                  role === ClientRole.Broadcaster ? "Host" : "Audience"
                }`
            : `Loading...`,
      },
    },
    {
      locale: "es",
      label: "Español",
      data: {
        meetingNameInputPlaceholder: "Nombra tu habitación",
      },
    },
  ],
});

export default userCustomization;
```

---

<br/>

# TYPES

<br/>

<api>

<method>

## I18nBaseType<T\> : string | ((template: T) => string)

</method>

<method>

## I18nDynamicType : [I18nBaseType](#i18nbasetypet)<string\>

</method>

<method>

## JoinRoomButtonTextInterface

| Key   | Type                      | Description                                                 |
| ----- | ------------------------- | ----------------------------------------------------------- |
| ready | boolean                   | Boolean that indicates whether a room is ready to be joined |
| role  | [ClientRole](#clientrole) | Role of the user trying to join                             |

</method>

<method>

## ClientRole

| Index | Name        | Description                                                       |
| ----- | ----------- | ----------------------------------------------------------------- |
| 1     | Broadcaster | User publishes to other channel broadcasters and Audience members |
| 2     | Audience    | User subscribing to other channel broadcasters without publishes  |

</method>
</api>
