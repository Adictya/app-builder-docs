import React from "react";
import clsx from "clsx";
import Card from "./Card";
import styles from "./styles.module.css";

const cardList: ICardItem[] = [
  {
    title: "Configuration Reference",
    Svg: require("@site/static/img/icon-config.svg").default,
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [{ text: "Guide", href: "/sdk/guides" }],
  },
  {
    title: "Turn Key",
    Svg: require("@site/static/img/icon-config.svg").default,
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [{ text: "Guide", href: "/sdk/guides" }],
  },
  {
    title: "SDKs",
    Svg: require("@site/static/img/icon-config.svg").default,
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [
      { text: "Guide", href: "/sdk/guides" },
      { text: "API Reference", href: "/api-ref" },
    ],
  },
  {
    title: "First Party Extension",
    Svg: require("@site/static/img/icon-code.svg").default,
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [
      { text: "Guide", href: "/first-party-extension/guides" },
      { text: "API Reference", href: "/first-party-extension/api-reference" },
    ],
  },
];

export default function CardContainer(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {cardList.map((props, idx) => (
            <div className="col col--6 margin-bottom--lg" key={idx}>
              <Card {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
