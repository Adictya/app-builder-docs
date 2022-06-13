import Icon from "@site/src/icons";
import GithubIcon from "@site/src/icons/github";
import React from "react";
import styles from "./button.module.css";

function Button({ text, href, icon, external }: IIconButton) {
  return (
    <a
      href={href}
      className={styles.btnContainer}
      target={external ? "_blank" : "_self"}
    >
      {/* <Svg className={styles.icon} role="img" /> */}
      <Icon name={icon} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </a>
  );
}

export default Button;
