---
sidebar_label: Config Library
sidebar_position: 8
description: Config Library
title: Config Library
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

List of config variables set via the App Builder Console as configured by the user.

You can access them under the `customization-api` module via tha named export `$config`.

<api>

<method>

---

## APP_NAME: string

Name of the App Builder project

</method>

<method>

## LOGO: string

Logo of the App Builder project stored as a base64 string

</method>

<method>

## APP_ID: string

[Agora APP_ID](https://docs.agora.io/en/Agora%20Platform/term_appid) associated with the App Builder project

</method>

<method>

## FRONTEND_ENDPOINT: string

Url of the frontend deployed from the App Builder Console. Used to generate invite links for meetings.

</method>

<method>

## BACKEND_ENDPOINT: string

Url of the backend deployed from the App Builder Console. Target for all backend network queries.

</method>

<method>

## PSTN: boolean

Flag to enable/disable ability to join meetings via PSTN Dial-in.

</method>

<method>

## PRECALL: boolean

Flag to enable/disable the precall screen.

</method>

<method>

## CHAT: boolean

Flag to enable/disable the chat functionality.

</method>

<method>

## CLOUD_RECORDING: boolean

Flag to enable/disable cloud recording functionality.

</method>

<method>

## SCREEN_SHARING: boolean

Flag to enable/disable screen sharing functionality.

</method>

<method>

## LANDING_SUB_HEADING: string

Text displayed under the [APP_NAME](#app_name) on the create page.

</method>

<method>

## BG: string

Image used as backdrop on all pages of the App Builder project stored as a base64 string

</method>

<method>

## ENCRYPTION_ENABLED: boolean

Flag to enable/disable packet encryption functionality.

</method>

<method>

## PROFILE: [VideoProfile](https://api-ref.agora.io/en/voice-sdk/web/4.x/globals.html#videoencoderconfigurationpreset)

Video profile to be used for user video feeds.

</method>

<method>

## PRIMARY_COLOR: string

Primary color used in the App Builder project. Used for various UI Elements (ex: Primary Button)

</method>

<method>

## PRIMARY_FONT_COLOR: string

Primary font color used in the App Builder project. Used for various UI Text Elements (ex: Heading, Sub-headings)

</method>

<method>

## SECONDARY_FONT_COLOR: string

Secondary font color used in the App Builder project. Used for various UI Text Elements (ex: Button labels)

</method>

<method>

## EVENT_MODE: boolean

Flag to enable/disable livestreaming specific features.

</method>

<method>

## RAISE_HAND: boolean

Flag to enable/disable raise hand functionality. Requires [EVENT_MODE](#event_mode) to be enabled.

</method>

<method>

## GEO_FENCING: boolean

Flag to enable/disable geo fencing functionality.

</method>

<method>

## AUDIO_ROOM: boolean

Flag to enable/disable audio room specific features.

</method>

</api>
