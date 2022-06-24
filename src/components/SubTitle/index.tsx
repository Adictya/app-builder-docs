import React from "react";
import styles from "./subtitle.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function SubTitle({ children }) {
  if (!children) return null;
  let content = React.Children.toArray(children.props.children);

  //console.log(content.length);
  if (content.length == 1) {
    content = content[0].split(":");
  }

  const heading = content.shift().split(":")[0];

  const data = content.map(
    (element: string | React.ReactElement, index: number) => {
      let link = "";
      let text = "";
      let target = "";
      const isLast = content.length - 1 === index;

      if (typeof element === "string") {
        link = `#${element.trim().toLowerCase()}`;
        text = element;
      } else {
        link = element?.props?.href || "";
        text = element?.props?.children || "";
        target = "_blank";
      }
      return (
        <React.Fragment key={index}>
          <a className={styles.link} href={link} target={target}>
            {text}
          </a>
          {!isLast && <span className={styles.separator}>|</span>}
        </React.Fragment>
      );
    }
  );

  return (
    <div className={styles.container}>
      <h2
        id={heading.toLowerCase().trim()}
        className={clsx(
          styles.heading,
          "anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module"
        )}
      >
        {heading} :
      </h2>
      {data}
    </div>
  );
}
