import React from "react";
import Button from "./IconButton";

const buttonList: IIconButton[] = [
  {
    text: "Support",
    icon: "slack",
    href: "https://www.agora.io/en/join-slack/",
    external: true,
  },
  {
    text: "Github",
    icon: "github",
    href: "https://github.com/AgoraIO-Community",
    external: true,
  },
  {
    text: "Console",
    icon: "agoraConsole",
    href: "https://console.agora.io/",
    external: true,
  },
  {
    text: "Get Started",
    icon: "getstarted",
    href: "https://appbuilder.agora.io/",
    external: true,
  },
];

export default function IconButtonContainer(): JSX.Element {
  return (
    <div className="container">
      <div className="row">
        {buttonList.map((props, idx) => (
          <div className="col col--3 margin-bottom--lg" key={idx}>
            <Button {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
