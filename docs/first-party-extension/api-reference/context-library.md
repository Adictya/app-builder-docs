---
sidebar_position : 2
---
# Context Library

useSidePanel(): SidePanelContextInterface
SidePanelContextInterface
---
this is  a sample for context libray

### MeetingInfoContextInterface
Details about the meeting info interface

| isHost             | boolean                                                                                               | Indicates if the user joined using the Host URL or using the Attendee URL                           |
|--------------------|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| meetingTitle       | string                                                                                                | Meeting Title                                                                                       |
| meetingPassphras   | {    attendee: string;    host?: string;    pstn?: {       number: string;        pin: string;    } } |                                                                                                     |
| isSeparateHostLink | boolean                                                                                               | A flag that determines if t he host uses a separate link or  if everybody uses the same(host) link. |
| channel            | string                                                                                                |                                                                                                     |
| token              | string                                                                                                |                                                                                                     |