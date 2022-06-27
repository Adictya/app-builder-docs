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
    default:
      return <GithubIcon {...props} />;
  }
}
