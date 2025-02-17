import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function ConfigIcon({ width = 20, height = 20 }) {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "white" : "black";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM5 8C3.34 8 2 6.66 2 5C2 3.34 3.34 2 5 2C6.66 2 8 3.34 8 5C8 6.66 6.66 8 5 8Z"
        fill={color}
      />
    </svg>
  );
}
