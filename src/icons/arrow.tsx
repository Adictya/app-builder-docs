import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function ArrowIcon({
  width = 20,
  height = 20,
  direction = "down",
  className = "",
}) {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "white" : "black";
  const rotate = direction === "up" ? "rotate(180deg)" : "";

  return (
    <svg
      style={{
        transform: `${rotate}`,
        transition: "transform .2s ease-in-out ",
      }}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.14089 0.19499L3.72755 2.78166L6.31422 0.19499C6.37589 0.13318 6.44915 0.0841414 6.5298 0.0506821C6.61045 0.0172228 6.6969 3.28847e-08 6.78422 2.90681e-08C6.87153 2.52514e-08 6.95799 0.0172228 7.03864 0.0506821C7.11929 0.0841414 7.19255 0.13318 7.25422 0.19499C7.51422 0.45499 7.51422 0.87499 7.25422 1.13499L4.19422 4.19499C3.93422 4.45499 3.51422 4.45499 3.25422 4.19499L0.19422 1.13499C-0.0657801 0.87499 -0.0657801 0.45499 0.19422 0.19499C0.45422 -0.0583429 0.880886 -0.0650095 1.14089 0.19499Z"
        fill={color}
      />
    </svg>
  );
}
