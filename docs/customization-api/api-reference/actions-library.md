---
sidebar_label: Actions Library
sidebar_position: 5
description: Components API is a very powerful way to override
title: Actions Library
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

<tabsToggle />

Provides methods to execute specific actions like Muting / Unmuting a user and Joining / Creating a meeting.

You can access them under the `customization-api` module as a named export.

---

<method>

## useCreateMeeting(): [createMeeting](#createmeeting)

Returns an asynchronous function to create a meeting with the given options.

<tabs lazy>

```js
import { useCreateMeeting } from "customization-api";

...

const createMeeting = useCreateMeeting();

...

await createMeeting(/*roomTitle:*/ 'My Meeting', /*enablePSTN?:*/ false, /*isSeperateHostLink?:*/ false );
```

```js
import { useCreateMeeting } from "@appbuilder/react";

...

const createMeeting = useCreateMeeting();

...

await createMeeting(/*roomTitle:*/ 'My Meeting', /*enablePSTN?:*/ false, /*isSeperateHostLink?:*/ false );
```

```js
import { useCreateMeeting } from "@appbuilder/web";

...

const createMeeting = useCreateMeeting();

...

await createMeeting(/*roomTitle:*/ 'My Meeting', /*enablePSTN?:*/ false, /*isSeperateHostLink?:*/ false );
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### createMeeting(roomTitle: string, enablePSTN?: boolean, isSeperateHostLink?: boolean): Promise<void\>

</collapsible>

</method>

</method>

---

<method>

## useJoinMeeting(): [joinMeeting](#joinmeeting)

Returns an asynchronous function to join a meeting with the given phrase.

<tabs lazy>

```js
import { useJoinMeeting } from "customization-api";

...

const joinMeeting = useJoinMeeting();

...

await joinMeeting(/*roomId:*/ 12342139812);

```

```js
import { useJoinMeeting } from "@appbuilder/react";

...

const joinMeeting = useJoinMeeting();

...

await joinMeeting(/*roomId:*/ 12342139812);

```

```js
import { useJoinMeeting } from "@appbuilder/web";

...

const joinMeeting = useJoinMeeting();

...

await joinMeeting(/*roomId:*/ 12342139812);

```


</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### joinMeeting(roomId: string): Promise<void\>

</collapsible>

</method>

</method>

---

<method>

## useMuteToggleLocal(): [muteToggleLocal](#mutetogglelocal)

Returns an asynchronous function to toggle muted state of the given track type for the local user.

<tabs lazy>

```js
import { useMuteToggleLocal, MUTE_LOCAL_TYPE } from "customization-api";

...

const muteToggleLocal = useMuteToggleLocal();

...

muteToggleLocal( MUTE_LOCAL_TYPE.audio ); // toggle local user's audio mute state
```

```js
import { useMuteToggleLocal, MUTE_LOCAL_TYPE } from "@appbuilder/react";

...

const muteToggleLocal = useMuteToggleLocal();

...

muteToggleLocal( MUTE_LOCAL_TYPE.audio ); // toggle local user's audio mute state
```

```js
import { useMuteToggleLocal, MUTE_LOCAL_TYPE } from "@appbuilder/web";

...

const muteToggleLocal = useMuteToggleLocal();

...

muteToggleLocal( MUTE_LOCAL_TYPE.audio ); // toggle local user's audio mute state
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### muteToggleLocal(type: [MUTE_LOCAL_TYPE](#mute_local_type)): Promise<void\>

</collapsible>

</method>

</method>

---

<method>

## useRemoteMute(): [muteToggleRemote](#mutetogglelocal)

Returns an asynchronous function to toggle muted state of the given track type for a remote user with the given uid or if no uid provided, mutes everyone else in the meeting.

<tabs lazy>

```js
import { useRemoteMute, MUTE_REMOTE_TYPE } from "customization-api";

...

const muteToggleRemote = useRemoteMute();

...

muteToggleRemote( MUTE_REMOTE_TYPE.audio, 123457 ); // toggle uid:123457 user's audio mute state
```

```js
import { useRemoteMute, MUTE_REMOTE_TYPE } from "@appbuilder/react";

...

const muteToggleRemote = useRemoteMute();

...

muteToggleRemote( MUTE_REMOTE_TYPE.audio, 123457 ); // toggle uid:123457 user's audio mute state
```

```js
import { useRemoteMute, MUTE_REMOTE_TYPE } from "@appbuilder/web";

...

const muteToggleRemote = useRemoteMute();

...

muteToggleRemote( MUTE_REMOTE_TYPE.audio, 123457 ); // toggle uid:123457 user's audio mute state
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### muteToggleLocal(type: [MUTE_REMOTE_TYPE](#mute_remote_type), uid?: [UidType](/customization-api/api-reference/types#uidtype) ): Promise<void\>

</collapsible>

</method>

</method>

---

<method>

## useRemoteEndCall(): [remoteEndCall](#remoteendcall)

Returns a function to end the call for a remote user with the given uid.

<tabs lazy>

```js
import { useRemoteEndCall } from "customization-api";

...

const remoteEndCall = useRemoteEndCall();

...

remoteEndCall( 123457 ); // end uid:123457 user's call
```

```js
import { useRemoteEndCall } from "@appbuilder/react";

...

const remoteEndCall = useRemoteEndCall();

...

remoteEndCall( 123457 ); // end uid:123457 user's call
```

```js
import { useRemoteEndCall } from "@appbuilder/web";

...

const remoteEndCall = useRemoteEndCall();

...

remoteEndCall( 123457 ); // end uid:123457 user's call
```

</tabs>

<br/>

### _Returns_:

<method>

<collapsible>

### remoteEndCall(uid: [UidType](/customization-api/api-reference/types#uidtype)): void

</collapsible>

</method>

</method>

---

## TYPES:

<br/>

<method>
<subtitle>

## MUTE_LOCAL_TYPE

</subtitle>

| Name  | Value |
| ----- | ----- |
| audio | 0     |
| video | 1     |

<tabs lazy>

```js
import { MUTE_LOCAL_TYPE } from "customization-api";
```

```js
import { MUTE_LOCAL_TYPE } from "@appbuilder/react";
```

```js
import { MUTE_LOCAL_TYPE } from "@appbuilder/web";
```

</tabs>

</method>

---

<method>
<subtitle>

## MUTE_REMOTE_TYPE

</subtitle>

| Name  | Value |
| ----- | ----- |
| audio | 0     |
| video | 1     |

<tabs lazy>

```js
import { MUTE_REMOTE_TYPE } from "customization-api";
```

```js
import { MUTE_REMOTE_TYPE } from "@appbuilder/react";
```

```js
import { MUTE_REMOTE_TYPE } from "@appbuilder/web";
```

</tabs>

</method>
