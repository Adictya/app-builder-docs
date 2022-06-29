import React from "react";
import { default as Img } from "@theme/IdealImage";
import styles from "./image.module.css";
import { useColorMode } from "@docusaurus/theme-common";


export default function Image({ alt, lightImageSrc, darkImageSrc }) {
  const { colorMode } = useColorMode();
  const img1 = `/img/docAssets/${darkImageSrc}`;
  const img2 = `/img/docAssets/${lightImageSrc}`;

  return (
    <img loading="lazy"
      className="mdImage"
      src={colorMode === 'dark' ? img1 : img2}
      alt={alt} />

  )
}

