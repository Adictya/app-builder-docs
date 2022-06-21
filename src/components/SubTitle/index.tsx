import React from "react";
import styles from "./subtitle.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function SubTitle({ children }) {
  const content = React.Children.toArray(children.props.children);

  const heading = content.shift();

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
      <h2 className={styles.heading}>{heading}</h2>
      {data}
    </div>
  );
}
