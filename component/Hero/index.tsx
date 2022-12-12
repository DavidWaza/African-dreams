/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../styles/Home.module.css";
import Button from "../Button/button";
import Image from "next/image";
import { Icons } from "../IconArr";
import Link from "next/link";

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
            <Button title="join us" />
          </div>
        </div>
        <div className={styles.socialIcons}>
          {Icons.map(({ id, icon, url }) => (
            <div className={styles.iconWrapper} key={id}>
              <Link href={url}>
                <Image src={icon} alt="vector" width={18} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Herobanner;
