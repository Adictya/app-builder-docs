import React from "react";
import CodeIcon from "./code";
import ConfigIcon from "./config";
import DiscordIcon from "./discord";
import GithubIcon from "./github";
import SDKIcon from "./sdk";
import ArrowIcon from "./arrow";
import FacebookIcon from "./facebook";
import TwitterIcon from "./twitter";
import InstagramIcon from "./instagram";
import LinkedInIcon from "./linkedin";
import I18Icon from "./i18n";
import SettingsIcon from "./settings";
import SlackIcon from "./slack";
import ConsoleIcon from "./console";
import GetStartedIcon from "./getStarted";
import TurnKeyIcon from "./turnkey";
import ManualIcon from "./manual";
import AgoraConsoleIcon from "./agoraConsole";

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
    case "facebook":
      return <FacebookIcon {...props} />;
    case "twitter":
      return <TwitterIcon {...props} />;
    case "instagram":
      return <InstagramIcon {...props} />;
    case "linkedin":
      return <LinkedInIcon {...props} />;
    case "i18":
      return <I18Icon {...props} />;
    case "settings":
      return <SettingsIcon {...props} />;
    case "slack":
      return <SlackIcon {...props} />;
    case "console":
      return <ConsoleIcon {...props} />;
    case "getstarted":
      return <GetStartedIcon {...props} />;
    case "turnkey":
      return <TurnKeyIcon {...props} />;
    case "manual":
      return <ManualIcon {...props} />;
    case "agoraConsole":
      return <AgoraConsoleIcon {...props} />;
    default:
      return <CodeIcon {...props} />;
  }
}
