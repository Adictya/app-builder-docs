import React from "react";
import IconButtonContainer from "../Buttons/IconButton";
import CardContainer from "../Cards";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <div className="landingPage">
      <CardContainer />
      <IconButtonContainer />
    </div>
  );
}
