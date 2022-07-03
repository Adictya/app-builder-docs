---
sidebar_label: Context Library
sidebar_position: 3
description: Context Library
title: Context Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

## useMeetingInfo(): MeetingInfoContextInterface

<collapsible>

### MeetingInfoContextInterface

Details about the meeting info interface

| isHost             | boolean                                                                      | Indicates if the user joined using the Host URL or using the Attendee URL                          |
| ------------------ | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| meetingTitle       | string                                                                       | Meeting Title                                                                                      |
| meetingPassphras   | { attendee: string; host?: string; pstn?: { number: string; pin: string; } } |                                                                                                    |
| isSeparateHostLink | boolean                                                                      | A flag that determines if t he host uses a separate link or if everybody uses the same(host) link. |
| channel            | string                                                                       |                                                                                                    |
| token              | string                                                                       |                                                                                                    |

</collapsible>

## useSidePanel(): SidePanelContextInterface

<collapsible>

### SidePanelContextInterface

| sidePanel             | SidePanelType: string                           | This state represents the active side panel                                                       |
| --------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| setSidePanel          | React.Dispatch<SetStateAction<SidePanelType\>\> | Sets the Side Panel type based on the parameter. This method is used to show/hide the side panels |
| createSidePanel - TBD | TBD                                             | TBD                                                                                               |

</collapsible>

## useLayout(): LayoutContextInterface

<collapsible>

### LayoutContextInterface

| activeLayoutName<br/>    | String         | This state contains the active layout of the app<br/>"Grid" ➝<br/>"Pinned" ➝<br/>"<Custom Key\>" ➝   |
| ------------------------ | -------------- | ---------------------------------------------------------------------------------------------------- |
| setActiveLayoutName<br/> | React.Dispatch | Sets the Video Call layout. Default values include "grid" and "pinned". An FPE may add more layouts. |

</collapsible>

## usePreCall(): PreCallContextInterface

<collapsible>

### PreCallContextInterface

| setCallActive | React.Dispatch<React.SetStateAction<boolean\>\> | Programatically switch between Pre Call(false) and Video Call() screen.                                       |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| callActive    | boolean                                         | The app is in the Video Call screen if the value is true. It is in the Pre Call screen if the value is false. |

</collapsible>

## useShareLink(): ShareLinkContextInterface

<collapsible>

### ShareLinkContextInterface

- Can be used on the share screen
  - Copy Attendee URL
  - Copy Host URL
  - Copy PSTN
  - Copy Meeting invite
- Sharing meeting invites on a Video Call screen

  - Copy icon button
  - A button in the participant panel

  |                          | enum SHARE_LINK_CONTENT_TYPE {<br/>ATTENDEE,<br/>HOST,<br/>PSTN,<br/>MEETING_INVITE,<br/>}<br/> |                                                                 |
  | ------------------------ | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
  | copyShareLinkToClipboard | (type: SHARE_LINK_CONTENT_TYPE) => void<br/>                                                    | The function used to copy invite to clipboard based on the type |
  | getShareLink<br/>        | (type: SHARE_LINK_CONTENT_TYPE) => string;                                                      | The function used to get invite content based on the type       |

</collapsible>

## useScreenshare(): ScreenshareContextInterface

<collapsible>

### ScreenshareContextInterface

const

| isScreenshareActive<br/>  | boolean       | Flag to indicate if screen sharing is active in the application |
| ------------------------- | ------------- | --------------------------------------------------------------- |
| startUserScreenshare<br/> | () => Promise | Starts screen sharing                                           |
| stopUserScreenShare       | () => Promise | Stops screen sharing                                            |
|                           |               |                                                                 |

</collapsible>

## useRecording(): RecordingContextInterface

<collapsible>

### RecordingContextInterface

| isRecordingActve<br/><br/> | boolean                                         | Flag to indicate if cloud recording is active in the application                                                    |
| -------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| startRecording<br/>        | () => void                                      | Starts cloud recording                                                                                              |
| stopRecording              | () => void                                      | Stops cloud recording                                                                                               |
| setRecordingActive         | React.Dispatch<React.SetStateAction<boolean\>\> | Start/Stop cloud recording.<br/>Example<br/>\`setRecordingActive(false)\`<br/>\`setRecordingActive(curr => !curr)\` |

</collapsible>

## useDeviceContext(): DeviceContext

<collapsible>

### DeviceContext

| selectedCam    | string                                | DeviceId of selected camera                                                                                         |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| setSelectedCam | (cam:string) => void                  | Select a camera by setting a camera deviceId                                                                        |
| selectedMic    | string                                | DeviceId of selected microphone                                                                                     |
| setSelectedMic | (mic: string) => void                 | Select a microphone by setting a microphone deviceId                                                                |
| deviceList     | MediaDeviceInfo\[\]                   | List of devices following [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) spec. |
| setDeviceList  | (devices:MediaDeviceInfo\[\]) => void | Edit the list of devices                                                                                            |

</collapsible>

## useStorageContext(): StorageContextInterface

<collapsible>

### StorageContextInterface

| store    | StoreInterface                                                 | Contains the list of Key-Value pairs that are persistently stored |
| -------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| setStore | React.Dispatch<React.SetStateAction<StoreInterface\>\> \| null | Modify the persistant store by adding/removing Key-Value pairs    |

</collapsible>

<collapsible>

### StoreInterface

| token                | null | string | OAuth Token. It's null if Authentication is disabled. |
| -------------------- | ---- | ------ | ----------------------------------------------------- |
| displayName          | null | string | User name of the local user                           |
| selectedLanguageCode | null | string | Selected i18n locale                                  |

</collapsible>
