import React, { useEffect } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { useLocation } from "@docusaurus/router";

const platforms = ["turnkey", "react-sdk", "web-sdk"];

/**
 * Tabs content demarcator, does not show any ui, but selectively shows content based only
 * selected platform. Expects three children components and assigns them to
 * [turnkey, react-sdk, web-sdk] based on the order they are provided in.
 *
 * @prop sdk: switches from three platforms to just two platforms, ie expects only 2 child
 * components when set as true and assigns them to [react-sdk, web-sdk] respectively
 */
const PlatformTabs: React.FC = (props: any) => {
  const location = useLocation();
  // Captures platform from url in the form of https://appbuilder-docs.agora.io?platform=web-sdk
  let platform = new URLSearchParams(location.search).get("platform");

  useEffect(() => {
    // Validate provided platform is correct
    if (platforms.includes(platform)) {
      // Validate if on sdk documentation , platform is not set to turnkey
      if (props.sdk && platform === platforms[0]) {
        platform = "";
      }
    } else {
      platform = "";
    }
  }, []);

  return (
    <Tabs groupId="platform" className="covert" defaultValue={platform}>
      {props.children.map((E: any, i: any) => (
        <TabItem
          key={"platform" + i}
          value={
            E.props.value || platforms[props.sdk ? i + 1 : i]
              ? platforms[props.sdk ? i + 1 : i]
              : "undefined" + i
          }
        >
          {E.props.children}
        </TabItem>
      ))}
    </Tabs>
  );
};

/**
 * Tabs UI to select platform, acts as a standalone selector and not supposed to
 * contain content, just as a platform select UI
 *
 * @prop sdk: switches from three platforms to just two platforms, showes toggles
 * for [react-sdk, web-sdk] respectively.
 */
export const PlatformTabsToggle = (props: any) => {
  const location = useLocation();
  // Captures platform from url in the form of https://appbuilder-docs.agora.io?platform=web-sdk
  let platform = new URLSearchParams(location.search).get("platform");

  useEffect(() => {
    // Validate provided platform is correct
    if (platforms.includes(platform)) {
      // Validate if on sdk documentation , platform is not set to turnkey
      if (props.sdk && platform === platforms[0]) {
        platform = "";
      }
      window.localStorage.setItem("docusaurus.tab.platform", platform);
    } else {
      platform = "";
    }
  }, []);

  return props.sdk ? (
    <Tabs groupId="platform" defaultValue={platform} lazy={props.lazy}>
      <TabItem value={platforms[1]} label="Embed-SDK React">
        {" "}
      </TabItem>
      <TabItem value={platforms[2]} label="Embed-SDK Web">
        {" "}
      </TabItem>
    </Tabs>
  ) : (
    <Tabs groupId="platform" defaultValue={platform} lazy={props.lazy}>
      <TabItem value={platforms[0]} label="Turnkey">
        {" "}
      </TabItem>
      <TabItem value={platforms[1]} label="Embed-SDK React">
        {" "}
      </TabItem>
      <TabItem value={platforms[2]} label="Embed-SDK Web">
        {" "}
      </TabItem>
    </Tabs>
  );
};

export default PlatformTabs;
