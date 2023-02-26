import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className={styles.notFoundBG}>
      <div className={styles.notFoundIMG}>
        <Image src="/wolf.png" alt="wolf" height={170} width={200} />
      </div>
      <div className={styles.notFound}>
        <p>ooppps!!</p>
        <p>
          You are wide into the &nbsp;<span>jungle</span>
        </p>
        <p>
          Take this route back to &nbsp;<Link href="/">Camp!</Link>
        </p>
      </div>
    </div>
  );
};
export default NotFound;
