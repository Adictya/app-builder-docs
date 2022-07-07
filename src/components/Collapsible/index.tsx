import React from "react";
import Icon from "@site/src/icons";
import styles from "./collapsible.module.css";
import clsx from "clsx";

interface ICollapsibeProps {
  collapsed: boolean;
  children: React.ReactNode;
}

export default function Collapsible({
  collapsed = true,
  children,
}: ICollapsibeProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const rest = React.Children.toArray(children);
  const title = rest.shift();
  const id = React.isValidElement(title) ? title.props.id : "";
  return (
    <div className={styles.collapsible}>
      <div className={clsx(styles.header, "collapsible-title")}>
        {title}
        <button
          id={`${id}-btn`}
          className={clsx(styles.collapseButton, isCollapsed && "collapsed")}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "View More" : "View Less"}
          <Icon
            name="arrow"
            width="8"
            height="5"
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
    </div>
  );
}
