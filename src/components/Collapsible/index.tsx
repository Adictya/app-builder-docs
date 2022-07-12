import React from "react";
import Icon from "@site/src/icons";
import styles from "./collapsible.module.css";
import clsx from "clsx";

interface ICollapsibeProps {
  children: React.ReactNode;
}

export default function Collapsible({ children }: ICollapsibeProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const contentRef = React.useRef(null);
  const maxContentHeight = 300;
  React.useEffect(() => {
    setHeight(contentRef.current.clientHeight);
    setIsCollapsed(contentRef.current.clientHeight > maxContentHeight);
  }, []);

  const isVisible = height > maxContentHeight;
  const rest = React.Children.toArray(children);
  const title = rest.shift();
  const id = React.isValidElement(title) ? title.props.id : "";
  return (
    <>
      {console.log(isCollapsed)}
      <div className={styles.collapsible}>
        <div className={clsx(styles.header, "collapsible-title")}>{title}</div>
        <div
          ref={contentRef}
          className={`${isCollapsed ? styles.collapsed : styles.expanded} ${
            styles.content
          } ${isCollapsed ? "collapsed-table" : "expanded-table"}`}
          aria-expanded={isCollapsed}
        >
          {rest}
        </div>
      </div>
      {isVisible && (
        <div
          className={clsx(
            styles.btnContainer,
            isCollapsed && styles.collapsedBtn
          )}
        >
          <button
            id={`${id}-btn`}
            className={clsx(styles.toggleButton)}
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
      )}
    </>
  );
}
