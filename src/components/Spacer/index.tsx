import useWindowSize from "@site/src/hooks/useWindowSize";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";

export function API({ children }) {
  const { width } = useWindowSize();
  const ref = React.useRef(null);
  const isDesktop = width > 997;
  const leftPos = isDesktop ? ref.current.offsetLeft - 300 : 16;
  return (
    <>
      <div ref={ref} className={styles.api}>
        {children}
      </div>
      <hr
        style={{
          position: "relative",
          left: -leftPos + "px",
          width: `calc(100% + ${leftPos}px + 32px)`,
        }}
      />
    </>
  );
}
export function Method({ children }) {
  return <div className={styles.method}>{children}</div>;
}
