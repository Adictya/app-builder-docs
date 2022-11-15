---
sidebar_label: Utility Library
sidebar_position: 6
description: Components API is a very powerful way to override
title: Utility Library
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

<tabsToggle />

Provides utility hooks and functions to perform app builder specific tasks easily.

<tabs lazy>

<method>

You can access them under the `customization-api` module as a named export.

</method>
<method>

You can access them under the `@appbuilder/react` module as a named export.

</method>

<method>

You can access them under the `@appbuilder/web` module as a named export.

</method>

</tabs>

---

<method>

## useIsVideoEnabled(): [isVideoEnabled](#isvideoenabled)

Returns a function that checks the video state for a given uid and returns true/false

<tabs lazy>

```js
import { useIsVideoEnabled } from "customization-api";

...

const isVideoEnabled = useIsVideoEnabled();

...

if (isVideoEnabled( 123457 )) {
  // if user video enabled
} else {
  // if user video disabled
}
```

```js
import { useIsVideoEnabled } from "@appbuilder/react";

...

const isVideoEnabled = useIsVideoEnabled();

...

if (isVideoEnabled( 123457 )) {
  // if user video enabled
} else {
  // if user video disabled
}
```

```js
import { useIsVideoEnabled } from "@appbuilder/web";

...

const isVideoEnabled = useIsVideoEnabled();

...

if (isVideoEnabled( 123457 )) {
  // if user video enabled
} else {
  // if user video disabled
}
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### isVideoEnabled(uid: [UidType](/customization-api/api-reference/types#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useIsAudioEnabled(): [isAudioEnabled](#isaudioenabled)

Returns a function that checks the audio state for a given uid and returns true/false

<tabs lazy>

```js
import { useIsAudioEnabled } from "customization-api";

...

const isAudioEnabled = useIsAudioEnabled();

...

if (isAudioEnabled( 123457 )) {
  // if user audio enabled
} else {
  // if user audio disabled
}
```

```js
import { useIsAudioEnabled } from "@appbuilder/react";

...

const isAudioEnabled = useIsAudioEnabled();

...

if (isAudioEnabled( 123457 )) {
  // if user audio enabled
} else {
  // if user audio disabled
}
```

```js
import { useIsAudioEnabled } from "@appbuilder/web";

...

const isAudioEnabled = useIsAudioEnabled();

...

if (isAudioEnabled( 123457 )) {
  // if user audio enabled
} else {
  // if user audio disabled
}
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### isAudioEnabled(uid: [UidType](/customization-api/api-reference/types#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useLocalUid(): [UidType](/customization-api/api-reference/types#uidtype)

Returns the local user's uid.

<tabs lazy>

```js
import { useLocalUid } from "customization-api";

...

const localUid = useLocalUid();

```

```js
import { useLocalUid } from "@appbuilder/react";

...

const localUid = useLocalUid();

```

```js
import { useLocalUid } from "@appbuilder/web";

...

const localUid = useLocalUid();

```

</tabs>

</method>

---

<method>

## useIsHost(): [isHost](#ishost)

Returns a function that checks whether the given uid is a host and returns true/false

<tabs lazy>

```js
import { useIsHost } from "customization-api";

...

const isHost = useIsHost();

...

if (isHost( 123457 )) {
  // if user is host
} else {
  // if user is not host
}
```

```js
import { useIsHost } from "@appbuilder/react";

...

const isHost = useIsHost();

...

if (isHost( 123457 )) {
  // if user is host
} else {
  // if user is not host
}
```

```js
import { useIsHost } from "@appbuilder/web";

...

const isHost = useIsHost();

...

if (isHost( 123457 )) {
  // if user is host
} else {
  // if user is not host
}
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### isHost(uid: [UidType](/customization-api/api-reference/types#uidtype) ): boolean

</collapsible>

</method>

</method>

---

<method>

## useIsAttendee(): [isAttendee](#isattendee)

Returns a function that checks whether the given uid is an attendee and returns true/false

<tabs lazy>

```js
import { useIsAttendee } from "customization-api";

...

const isAttendee = useIsAttendee();

...

if (isAttendee( 123457 )) {
  // if user is attendee
} else {
  // if user is not attendee
}
```

```js
import { useIsAttendee } from "@appbuilder/react";

...

const isAttendee = useIsAttendee();

...

if (isAttendee( 123457 )) {
  // if user is attendee
} else {
  // if user is not attendee
}
```

```js
import { useIsAttendee } from "@appbuilder/web";

...

const isAttendee = useIsAttendee();

...

if (isAttendee( 123457 )) {
  // if user is attendee
} else {
  // if user is not attendee
}
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### isAttendee(uid: [UidType](/customization-api/api-reference/types#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useIsPSTN(): [isPSTN](#ispstn)

Returns a function that checks whether the given uid is a PSTN user and returns true/false

<tabs lazy>

```js
import { useIsPSTN } from "customization-api";

...

const isPSTN = isPSTN();

...

if (isPSTN( 123457 )) {
  // if user joined via pstn
} else {
  // if user did not join via pstn
}
```

```js
import { useIsPSTN } from "@appbuilder/react";

...

const isPSTN = isPSTN();

...

if (isPSTN( 123457 )) {
  // if user joined via pstn
} else {
  // if user did not join via pstn
}
```

```js
import { useIsPSTN } from "@appbuilder/web";

...

const isPSTN = isPSTN();

...

if (isPSTN( 123457 )) {
  // if user joined via pstn
} else {
  // if user did not join via pstn
}
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### isPSTN(uid: [UidType](/customization-api/api-reference/types#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useHistory: [useHistoryHook](https://v5.reactrouter.com/web/api/Hooks/usehistory)

Returns the internal "react-router" instance's history object.

<tabs lazy>

```js
import { useHistory } from "customization-api";
```

```js
import { useHistory } from "@appbuilder/react";
```

```js
import { useHistory } from "@appbuilder/web";
```

</tabs>

</method>

---

<method>

## useParams: [useParamsHook](https://v5.reactrouter.com/web/api/Hooks/useparams)

Returns the navigation parameters passed via the url/path.

<tabs lazy>

```js
import { useParams } from "customization-api";
```

```js
import { useParams } from "@appbuilder/react";
```

```js
import { useParams } from "@appbuilder/web";
```

</tabs>

</method>

---

<method>

## isWeb(): boolean

Checks whether the application is running as a web app and returns true/false.

<tabs lazy>

```js
import { isWeb } from "customization-api";

...

if (isWeb()) {
  // if running as a web application
} else {
  // if not running as a web application
}
```

```js
import { isWeb } from "@appbuilder/react";

...

if (isWeb()) {
  // if running as a web application
} else {
  // if not running as a web application
}
```

```js
import { isWeb } from "@appbuilder/web";

...

if (isWeb()) {
  // if running as a web application
} else {
  // if not running as a web application
}
```

</tabs>

</method>

---

<method>

## isIOS(): boolean

Checks whether the application is running as an iOS app and returns true/false.

<tabs lazy>

```js
import { isIOS } from "customization-api";

...

if (isIOS()) {
  // if running as an ios application
} else {
  // if not running as an ios application
}
```

```js
import { isIOS } from "@appbuilder/react";

...

if (isIOS()) {
  // if running as an ios application
} else {
  // if not running as an ios application
}
```

```js
import { isIOS } from "@appbuilder/web";

...

if (isIOS()) {
  // if running as an ios application
} else {
  // if not running as an ios application
}
```

</tabs>

</method>

---

<method>

## isAndroid(): boolean

Checks whether the application is running as an android app and returns true/false.

<tabs lazy>

```js
import { isAndroid } from "customization-api";

...

if (isAndroid()) {
  // if running as an android application
} else {
  // if not running as an android application
}
```

```js
import { isAndroid } from "@appbuilder/react";

...

if (isAndroid()) {
  // if running as an android application
} else {
  // if not running as an android application
}
```

```js
import { isAndroid } from "@appbuilder/web";

...

if (isAndroid()) {
  // if running as an android application
} else {
  // if not running as an android application
}
```

</tabs>

</method>

---

<method>

## isDesktop(): boolean

Checks whether the application is running as an electron desktop app and returns true/false.

<tabs lazy>

```js
import { isDesktop } from "customization-api";

...

if (isDesktop()) {
  // if running as an electron desktop application
} else {
  // if not running as an electron desktop application
}
```

```js
import { isDesktop } from "@appbuilder/react";

...

if (isDesktop()) {
  // if running as an electron desktop application
} else {
  // if not running as an electron desktop application
}
```

```js
import { isDesktop } from "@appbuilder/web";

...

if (isDesktop()) {
  // if running as an electron desktop application
} else {
  // if not running as an electron desktop application
}
```

</tabs>

</method>

---

<method>

## isMobileOrTablet(): boolean

Checks whether the application is running as a web application on a mobile or tablet device and returns true/false.

<tabs lazy>

```js
import { isMobileOrTablet } from "customization-api";

...

if (isMobileOrTablet()) {
  // if running as a web application on a mobile or tablet device and returns true/false.
} else {
  // if not running as a web application on a mobile or tablet device and returns true/false.
}
```

```js
import { isMobileOrTablet } from "@appbuilder/react";

...

if (isMobileOrTablet()) {
  // if running as a web application on a mobile or tablet device and returns true/false.
} else {
  // if not running as a web application on a mobile or tablet device and returns true/false.
}
```

```js
import { isMobileOrTablet } from "@appbuilder/web";

...

if (isMobileOrTablet()) {
  // if running as a web application on a mobile or tablet device and returns true/false.
} else {
  // if not running as a web application on a mobile or tablet device and returns true/false.
}
```

</tabs>

</method>

---
