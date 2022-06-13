import React from "react";
import Button from "./IconButton";

const buttonList: IIconButton[] = [
  {
    text: "Blog",
    Svg: require("@site/static/img/icon-sdk.svg").default,
    href: "/blog",
    external: false,
  },
  {
    text: "Github",
    Svg: require("@site/static/img/icon-github.svg").default,
    href: "https://github.com/AgoraIO-Community/app-builder-docs",
    external: true,
  },
  {
    text: "Community",
    Svg: require("@site/static/img/icon-discord.svg").default,
    href: "https://discord.com/",
    external: true,
  },
  {
    text: "Dashboard",
    Svg: require("@site/static/img/icon-sdk.svg").default,
    href: "/",
    external: false,
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
