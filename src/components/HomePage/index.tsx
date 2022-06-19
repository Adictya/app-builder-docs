import React from "react";
import styles from "./styles.module.css";

export default function HomePage({ children }) {
  return <div className={styles.landingPage}>{children}</div>;
}
