import React from "react";
import styles from "./styles.module.css";

function RateThisPage({ pageID }) {
  const [haveVoted, setHaveVoted] = React.useState(false);

  const giveFeedback = (value) => {
    if (window.ga) {
      window.ga("send", {
        hitType: "event",
        eventCategory: "button",
        eventAction: "feedback",
        eventLabel: pageID,
        eventValue: value,
      });
    }
    console.log(`voted: for ${pageID} - ${value}`);
    setHaveVoted(true);
    //TODO: Add Analytics to send page feedback
  };
  return haveVoted ? (
    <p className={styles.text}>Thanks for your feedback</p>
  ) : (
    <>
      <svg
        className={styles.thumbsup}
        onClick={() => giveFeedback(1)}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
      >
        <path
          d="M0.666016 15.666H2.33268C2.79102 15.666 3.16602 15.291 3.16602 14.8327V7.33268C3.16602 6.87435 2.79102 6.49935 2.33268 6.49935H0.666016V15.666ZM17.191 9.73268C17.2827 9.52435 17.3327 9.29935 17.3327 9.06601V8.16601C17.3327 7.24935 16.5827 6.49935 15.666 6.49935H11.0827L11.8493 2.62435C11.891 2.44102 11.866 2.24102 11.7827 2.07435C11.591 1.69935 11.3493 1.35768 11.0493 1.05768C10.8383 0.842055 10.4918 0.840193 10.2785 1.05354L5.32435 6.00768C5.00768 6.32435 4.83268 6.74935 4.83268 7.19101V13.7243C4.83268 14.791 5.70768 15.666 6.78268 15.666H13.541C14.1243 15.666 14.6743 15.3577 14.9743 14.8577L17.191 9.73268Z"
          fill="white"
        />
      </svg>

      <svg
        className={styles.thumbsdown}
        onClick={() => giveFeedback(0)}
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="15"
        viewBox="0 0 17 15"
        fill="none"
      >
        <path
          d="M16.6667 0H15C14.5417 0 14.1667 0.375 14.1667 0.833333V8.33333C14.1667 8.79167 14.5417 9.16667 15 9.16667H16.6667V0ZM0.141667 5.93333C0.0500001 6.14167 0 6.36667 0 6.6V7.5C0 8.41667 0.75 9.16667 1.66667 9.16667H6.25L5.48333 13.0417C5.44167 13.225 5.46667 13.425 5.55 13.5917C5.74167 13.9667 5.98333 14.3083 6.28333 14.6083L6.66667 15L12.0083 9.65833C12.325 9.34167 12.5 8.91667 12.5 8.475V1.95C12.5 0.875 11.625 0 10.55 0H3.8C3.20833 0 2.66667 0.308333 2.36667 0.808333L0.141667 5.93333Z"
          fill="white"
        />
      </svg>
    </>
  );
}
export default RateThisPage;
