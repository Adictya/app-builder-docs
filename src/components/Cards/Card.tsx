import React from "react";
import clsx from "clsx";
import styles from "./card.module.css";

function Card({ title, Svg, description, ctas }: ICardItem) {
  return (
    <div className="card padding--lg">
      <div className="row margin--none">
        <Svg className={styles.icon} role="img" />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className="card__body margin-bottom--lg">
        <p>{description}</p>
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
