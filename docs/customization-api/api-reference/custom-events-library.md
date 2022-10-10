---
sidebar_label: Custom Events Library
sidebar_position: 7
description: Custom Events Library
title: Custom Events Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

# Custom Events

Provides methods to send and listen to custom events. These events can be sent to a specific user(s) in the channel or to all the user(s) in the channel.

You can access them under the `customization-api` module as a named export.

These events can be sent to

- A specific user in the channel.
- A set of users in the channel.
- All the users in the channel.

These events can be sent with different levels of persistance.

- **Level 1:**

  These events are short-lived. A "Level 1" event sent by a user will only be available to other users in the room at that time. These events won't be available to users who join the room after the event has been sent.

- **Level 2:**

  These events are persisted until the sender leaves the channel. A "Level 2" event sent by a user will be available to other users in the room regardless of when they join as long as the sender is present in the room. These events won't be available to users who join the room after the sender has left the room.

- **Level 3:**

  These events are persisted until the session ends. A "Level 3" event sent by a user will be available to other users if there is at least one user present in the room. When the last user leaves a room, the session ends. All events are cleared when a session ends.

<br/>

## Import

---

customEvents object handles customization api events and provides methods for sending, subscribing and unsubscribing to events.

```js
import { customEvents } from "customization-api";
```

<br/>

## Methods

---

<method>

<subtitle>

## send

</subtitle>

Sends the event with the provided details.

<collapsible>

### send : ( eventName: string , payload: string , persistLevel: [EventPersistLevel](#eventpersistlevel) , receiver? : [ReceiverUid](#receiveruid) ) : void

| Prop         | Type                                    | Description                                                                          |
| ------------ | --------------------------------------- | ------------------------------------------------------------------------------------ |
| eventName    | string                                  | Name of the event to be sent                                                         |
| payload      | string                                  | Payload to be sent along with the event                                              |
| persistLevel | [EventPersistLevel](#eventpersistlevel) | Sets the persistence of the event                                                    |
| receiver?    | [ReceiverUid](#receiveruid)             | Uid(s) to send the message to. Leave emtpy to send as a channel message to all users |

```ts
import { customEvents } from "fpe-api";

...

// 1. Sending to specific user 0001 in the channel
customEvents.send(
  "event-specific-single",
  "Payload is Hello!!",
  EventPersistLevel.LEVEL1,
  001
);

// 2. Sending to user(s) 001 002, 003in the channel
customEvents.send(
  "event-specific-multiple",
  "Payload is Hello!!",
  EventPersistLevel.LEVEL1,
  [001, 002, 003]
);

// 3. Sending in the channel
customEvents.send(
  "event-channel",
  "Payload is Hello!!",
  EventPersistLevel.LEVEL1
);
```

</collapsible>
</method>

<br/>

<method>

<subtitle>

## on

</subtitle>

Subscribes to the event. Use on method to add listener for specific event.

<collapsible>

### on( eventName: string , listener: [EventCallback](#eventcallback) ) : [Unsubscribe](#unsubscribe)

| Prop      | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| eventName | string   | Name of the event to be subscribed                                |
| listener  | Function | Callback method for the event to be called when event is received |

```ts
import react from "React";
import { customEvents } from "fpe-api";

...

    React.useEffect(() => {
        const funcOne = (data) => {};
        const funcTwo = (data) => {};
        const funcThree = (data) => {};

        // 1. Adding single anonymous listener
        customEvents.on("event-one", (data)=> {console.log(data)});

        // 2. Adding single named listener
        customEvents.on("event-two", funcOne);

        // 3. Adding multiple listener(s) to same event. Kindly note function name should be different when using multiple listeners
        customEvents.on("event-three", funcTwo);
        customEvents.on("event-three", funcThree);

    }, []);

...

```

</collapsible>
</method>

<br/>

<method>

<subtitle>

## off

</subtitle>

Use off method to remove listener for specific event. If no listener is provided, all listeners added on eventName will be removed.
If both eventName and listener are not provided, all events will be removed;

Additionally, method `on` returns `unbind` function. Call it and this listener
will be removed from event.

<collapsible>

### off(eventName?: string , listener?: Function ) : void

| Prop       | Type     | Description                                                                                                  |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| eventName? | string   | Name of the event to be unsubscribed. If no event name provided all subscribed events will be unsubscribed   |
| listener?  | Function | Method to unsubscribe. If no listener is provided, all listeners added on the eventName will be unsubscribed |

<br/>

1. Removing listener using calling unsubscribe method

```ts
import react from "React";
import { customEvents } from "fpe-api";

...

    React.useEffect(() => {
        const funcListener = (data) => {};

        const unbind = customEvents.on("event-zero", funcListener);

        return () => {
            // Remove specific single listener.
            unbind();
        }
    }, []);

...

```

2. Removing a single listener by passing pass eventname and function.

```ts
import react from "React";
import { customEvents } from "fpe-api";

...

    React.useEffect(() => {
        const funcOne = (data) => {};

        // 1. Adding single named listener
        customEvents.on("event-one", funcOne);

        return () => {
           //  Remove single named listener
            customEvents.off("event-one", funcOne);
        }
    }, []);

...

```

3. Removing a multiple listener by passing pass eventname and function.

```ts
import react from "React";
import { customEvents } from "fpe-api";

...

    React.useEffect(() => {
        const funcOneFirst = (data) => {};
        const funcOneSecond = (data) => {};

        // 2. Adding multiple listener(s) to same event. Kindly note function name should be different when using multiple listeners
        customEvents.on("event-one", funcOneFirst);
        customEvents.on("event-one", funcOneSecond);

        return () => {
            // 1. Remove specific single listener.
            customEvents.off("event-one", funcOneFirst);

            // 2. Remove all listeners for a given specific event
            // Here both funcOneFirst and funcOneSecond will be removed
            customEvents.off("event-one")

        }
    }, []);

...

```

4. Removing all listeners

```ts
import react from "React";
import { customEvents } from "fpe-api";

...

    React.useEffect(() => {
        const funcOne = (data) => {};
        const funcTwo = (data) => {};
        const funcThree = (data) => {};

        customEvents.on("event-one", funcOne);
        customEvents.on("event-two", funcTwo);
        customEvents.on("event-three", funcThree);


        return () => {
            //  Remove all events and their listener(s)
            customEvents.off();
        }
    }, []);

...

```

</collapsible>
</method>

<br/>

## Example

---

```ts
import react from "React";
import { customEvents, EventPersistLevel } from "fpe-api";

React.useEffect(() => {
  // Adding Listener
  const unbind = customEvents.on("hello-event", (data: EventCallback) => {
    console.log(
      `I have received payload ${data.payload} from user ${data.sender} at time ${data.timestamp} with persistance of ${data.persistLevel}`
    );
  });

  return () => {
    // Removing listener
    unbind();
  };
}, []);

function App() {
  // Sending event
  const sendEvent = () =>
    customEvents.send("hello-event", "Hello!!", EventPersistLevel.LEVEL1);

  return (
    <div>
      <button onClick={sendEvent}>Send event!</button>
    </div>
  );
}
```

<br/>

## Types

---

<method>
<subtitle>

## EventPersistLevel

</subtitle>

```ts
enum EventPersistLevel {
  LEVEL1 = 1,
  LEVEL2,
  LEVEL3,
}
```

</method>

<method>

<subtitle>

## ReceiverUid

</subtitle>

ReceiverUid: [UidType](/customization-api/api-reference/types#uidtype) | [UidType\[\]](/customization-api/api-reference/types#uidtype)

</method>

<br/>

<method>

<subtitle>

## Unsubscribe

</subtitle>

```ts
interface Unsubscribe {
  (): void;
}
```

</method>

<br/>

<method>

<subtitle>

## EventCallback

</subtitle>

```ts
interface EventCallbackPayload {
  payload: string;
  persistLevel: EventPersistLevel;
  sender: UidType;
  ts: number;
}

export type EventCallback = (args: EventCallbackPayload) => void;
```

</method>
