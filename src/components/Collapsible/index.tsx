import React from "react";
import Icon from "@site/src/icons";
import styles from "./collapsible.module.css";

export default function Collapsible({ collapsed = true, children }) {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  const rest = React.Children.toArray(children);
  const title = rest.shift();
  return (
    <>
      <div className={styles.header}>
        {title}
        <button
          className={styles.collapseButton}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "View More" : "View Less"}
          <Icon
            name="arrow"
            width="12"
            height="10"
            className={`${styles.collapseIcon} ${isCollapsed && ""}`}
            direction={isCollapsed ? "down" : "up"}
          />
        </button>
      </div>
      <div
        className={`${isCollapsed ? styles.collapsed : styles.expanded} ${
          styles.content
        }`}
        aria-expanded={isCollapsed}
      >
        {rest}
      </div>
      <hr />
    </>
  );
}
