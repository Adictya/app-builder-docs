import React from "react";
import clsx from "clsx";
import styles from "./card.module.css";
import Icon from "@site/src/icons";

function Card({ title, icon, description, ctas }: ICardItem) {
  return (
    <div className="card padding--lg">
      <div className="row margin--none">
        <Icon name={icon} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className="card__body margin-bottom--lg">
        <p className={styles.desc}>{description}</p>
      </div>
      <div className="card__footer">
        {ctas.map(({ text, href }) => (
          <a className={styles.link} href={href} key={text}>
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Card;
