import React from "react";
import styles from "./Alert.module.css";

const Alert = ({ alertMessage }) => {
  return <div className={styles.wrapAlert}>{alertMessage}</div>;
};

export default Alert;
