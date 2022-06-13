import React from "react";
import CodeIcon from "./code";
import ConfigIcon from "./config";
import DiscordIcon from "./discord";
import GithubIcon from "./github";
import SDKIcon from "./sdk";

export default function Icon({ name, ...props }) {
  switch (name) {
    case "github":
      return <GithubIcon {...props} />;
    case "discord":
      return <DiscordIcon {...props} />;
    case "sdk":
      return <SDKIcon {...props} />;
    case "code":
      return <CodeIcon {...props} />;
    case "config":
      return <ConfigIcon {...props} />;
    default:
      return <GithubIcon {...props} />;
  }
}
