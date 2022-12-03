import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Navbar: any = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<any>(false);
  return (
    <>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.brandName}>
          <p>African Dream Network</p>
        </Link>
        <button
          className={styles.hamburger}
          id="text"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded
              ? `${styles.navigationMenu} ${styles.expanded}`
              : `${styles.navigationMenu}`
          }
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/adventures">Adventures</Link>
            </li>
            <li>
              <Link href="/booking">Tickets</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
