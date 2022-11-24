import React from "react";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";
import Image from "next/image";
import { Icons } from "../IconArr";

const Herobanner = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.herobanner}>
        <div className={styles.header}>
          <p>It's Adventure time</p>
          <p>
            Do you have enjoy nature in it’s rawest form? <br />
            take tours around the country with us.
          </p>
          <div className={styles.heroButton}>
            <Button title="join now" />
          </div>
        </div>
        <div className={styles.socialIcons}>
          {Icons.map(({ id, icon }) => (
            <div className={styles.iconWrapper} key={id}>
              <Image src={icon} alt="vector" width={15} height={15} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Herobanner;
