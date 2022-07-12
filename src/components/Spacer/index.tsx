import React, { ReactNode } from "react";
import styles from "./styles.module.css";

export function API({ children }) {
  return <div className={styles.api}>{children}</div>;
}
export function Method({ children }) {
  return <div className={styles.method}>{children}</div>;
}
