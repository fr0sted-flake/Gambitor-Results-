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
        className="h-16vh w-full pt-3vh fixed z-50 flex items-start justify-between transition-colors duration-300 ease-in-out"
      >
        <div className="ml-5vw w-20vw h-13vh flex items-center">
          <div className="relative w-3.5vw m-0 mb-12">
            <Link href="/">
              <Image className={styles.img1} src={horseLogo} />
            </Link>
          </div>

          <Link href="/">
            <Image src={gambitor} className={styles.img2} />
          </Link>
        </div>
        <ul className=" flex justify-evenly items-center mx-1.5vw mb-16 h-80">
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
            <Link href="results" className={styles.tags}>
              RESULTS
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
