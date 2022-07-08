import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface INotFoundProps {
  children: React.ReactNode;
}

function NotFound({ children }: INotFoundProps) {
  const rest = React.Children.toArray(children);
  const title = rest.shift();

  const heading = (
    <h1 className={styles.header}>
      {React.isValidElement(title) && title.props.children}
    </h1>
  );
  const text = (
    <p className={styles.text}>
      {React.isValidElement(rest[0]) && rest[0].props.children}
    </p>
  );
  return (
    <div className={styles.container}>
      {heading}
      {text}
    </div>
  );
}

export default NotFound;
