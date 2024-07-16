/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ButtonStyle.module.css";

const ButtonStyle = (props) => {
  return (
    <button
      className={`${styles.button} ${props.secondary ? styles.buttonSecondary : ""}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonStyle;
