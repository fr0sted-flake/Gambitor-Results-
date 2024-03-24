"use client";
import styles from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import horseLogo from "@/images/common/header/horse.png";
import gambitor from "@/images/common/header/gambitor-letters.png";

const Header = () => {
  return (
    <header>
      <div
        id="navbar"
        className="h-[16vh] w-full pt-[3vh] fixed z-50 flex items-start justify-between transition-colors duration-300 ease-in-out"
      >
        <div className="ml-[5vw] w-[20vw] h-[13vh] flex items-center">
          <Link href="/">
            <Image className={styles.img1} src={horseLogo} />
          </Link>

          <Link href="/">
            <Image src={gambitor} className={styles.img2} />
          </Link>
        </div>
        <ul className={styles.navbar_right}>
          <li>
            <Link href="about" className={styles.tags}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="events" className={styles.tags}>
              EVENTS
            </Link>
          </li>
          <li>
            <Link href="contact" className={styles.tags}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link href="results" className={styles.result + " " +styles.tags}>
              RESULTS
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
