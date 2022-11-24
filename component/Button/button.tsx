import React from "react";
import styles from "../../styles/Home.module.css";

type buttonType = {
  title: string;
};

const Button: React.FC<buttonType> = ({ title }: buttonType) => {
  return <button className={styles.button}>{title}</button>;
};
export default Button;
