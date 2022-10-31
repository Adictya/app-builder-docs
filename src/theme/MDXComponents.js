import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import Collapsible from "../components/Collapsible";
import SubTitle from "../components/SubTitle";
import Image from "../components/Image";
import NotFound from "../components/NotFound";
import { API, Method } from "../components/Spacer";
import { H2, H3 } from "../components/Headings";
import ImageSlider from "../components/ImageSlider";
import Tabs, { PlatformTabsToggle } from "../components/Tabs";

//TODO: custom elements should be removed from rendering
export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map our custom components to the global scope
  collapsible: Collapsible,
  subtitle: SubTitle,
  image: Image,
  notfound: NotFound,
  api: API,
  method: Method,
  intro: ({ children }) => children,
  h3: H3,
  h2: H2,
  imageSlider: ImageSlider,
  tabs: Tabs,
  tabsToggle: PlatformTabsToggle
  // api: ({ children }) => children,
  // method: ({ children }) => children,
  // interface: ({ children }) => children,
};
