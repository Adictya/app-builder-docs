import React from "react";
import clsx from "clsx";
import Card from "./Card";
import styles from "./styles.module.css";

const cardList: ICardItem[] = [
  {
    title: "Turnkey",
    icon: "turnkey",
    description: <>Personalize your app with no code.</>,
    ctas: [{ text: "Guide", href: "/turn-key/quickstart" }],
    released: true,
  },
  {
    title: "Customization APIs",
    icon: "settings",
    description: <>Fully customize any part of your application with code.</>,
    ctas: [
      { text: "Guide", href: "/customization-api/quickstart" },
      {
        text: "API Reference",
        href: "/customization-api/api-reference/components-api",
      },
    ],
    released: true,
  },
  {
    title: "Embed SDKs",
    icon: "sdk",
    description: (
      <>
        Embed your customized experience in your existing web app with a couple
        lines of code.
      </>
    ),
    ctas: [{ text: "Guide", href: "/sdks/guides/embed_web_sdk_react" }],
    released: true,
  },
  // {
  //   title: "Product manual",
  //   icon: "manual",
  //   description: <>Designed for efficiency and ease of use by our developers</>,
  //   ctas: [{ text: "Guide", href: "" }],
  //   released: false,
  // },
];

export default function CardContainer(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {cardList.map((props, idx) => (
            <div className="col col--4 card-col margin-bottom--lg" key={idx}>
              <Card {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
