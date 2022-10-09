---
sidebar_label: Utility Library
sidebar_position: 6
description: Components API is a very powerful way to override
title: Utility Library
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

Provides utility hooks and functions to perform app builder specific tasks easily.

You can access them under the `customization-api` module as a named export.

---

<method>

## useIsVideoEnabled(): [isVideoEnabled](#isvideoenabled)

Returns a function that checks the video state for a given uid and returns true/false

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

```js
import { useLocalUid } from "customization-api";

...

const localUid = useLocalUid();

```

</method>

---

<method>

## useIsHost(): [isHost](#ishost)

Returns a function that checks whether the given uid is a host and returns true/false

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

```js
import { useHistory } from "customization-api";
```

</method>

---

<method>

## useParams: [useParamsHook](https://v5.reactrouter.com/web/api/Hooks/useparams)

Returns the navigation parameters passed via the url/path.

```js
import { useParams } from "customization-api";
```

</method>

---

<method>

## isWeb(): boolean

Checks whether the application is running as a web app and returns true/false.

```js
import { isWeb } from "customization-api";

...

if (isWeb()) {
  // if running as a web application
} else {
  // if not running as a web application
}
```

</method>

---

<method>

## isIOS(): boolean

Checks whether the application is running as an iOS app and returns true/false.

```js
import { isIOS } from "customization-api";

...

if (isIOS()) {
  // if running as an ios application
} else {
  // if not running as an ios application
}
```

</method>

---

<method>

## isAndroid(): boolean

Checks whether the application is running as an android app and returns true/false.

```js
import { isAndroid } from "customization-api";

...

if (isAndroid()) {
  // if running as an android application
} else {
  // if not running as an android application
}
```

</method>

---

<method>

## isDesktop(): boolean

Checks whether the application is running as an electron desktop app and returns true/false.

```js
import { isDesktop } from "customization-api";

...

if (isDesktop()) {
  // if running as an electron desktop application
} else {
  // if not running as an electron desktop application
}
```

</method>

---

<method>

## isMobileOrTablet(): boolean

Checks whether the application is running as a web application on a mobile or tablet device and returns true/false.

```js
import { isMobileOrTablet } from "customization-api";

...

if (isMobileOrTablet()) {
  // if running as a web application on a mobile or tablet device and returns true/false.
} else {
  // if not running as a web application on a mobile or tablet device and returns true/false.
}
```

</method>

---
