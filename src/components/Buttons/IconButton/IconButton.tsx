import React from "react";
import styles from "./button.module.css";

function Button({ text, href, Svg, external }: IIconButton) {
  return (
    <a
      href={href}
      className={styles.btnContainer}
      target={external ? "_blank" : "_self"}
    >
      <Svg className={styles.icon} role="img" />
      <span className={styles.text}>{text}</span>
    </a>
  );
}

export default Button;
