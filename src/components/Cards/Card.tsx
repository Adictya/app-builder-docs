import React from "react";
import clsx from "clsx";
import styles from "./card.module.css";
import Icon from "@site/src/icons";

function Card({ title, icon, description, ctas }: ICardItem) {
  return (
    <div className="card padding--lg">
      <div className={styles.header}>
        <Icon name={icon} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <p className={styles.desc}>{description}</p>
        </div>
        <div className={styles.footer}>
          {ctas.map(({ text, href }) => (
            <a className={styles.link} href={href} key={text}>
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
