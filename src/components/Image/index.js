import React from "react";
import {default as Img}  from "@theme/IdealImage";
import styles from "./image.module.css";

export default function Image({ alt, src }) {
  
  return <Img alt={alt} img={src} />;
}
