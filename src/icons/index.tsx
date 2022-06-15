import React from "react";
import CodeIcon from "./code";
import ConfigIcon from "./config";
import DiscordIcon from "./discord";
import GithubIcon from "./github";
import SDKIcon from "./sdk";
import ArrowIcon from "./arrow";

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
    case "arrow":
      return <ArrowIcon {...props} />;
    default:
      return <GithubIcon {...props} />;
  }
}
