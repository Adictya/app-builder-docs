import React from "react";
import styles from "./highlight.module.css";
import { useColorMode } from "@docusaurus/theme-common";

export default function Highlight({
  color = "#0079F4",
  fontSize = "1rem",
  children,
}): JSX.Element {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#002753" : "#d6d9dc";
  return (
    <span
      className={styles.text}
      style={{
        backgroundColor: bgColor,
        color: color,
        fontSize: fontSize,
      }}
    >
      {children}
    </span>
  );
}
