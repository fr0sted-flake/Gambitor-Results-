"use client";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import horseLogo from "@/images/common/header/horse.png";
import gambitor from "@/images/common/header/gambitor-letters.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll listener only when component is mounted client-side
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [router.pathname]); 

  return (
    <header>
      <div
        id="navbar"
        className={`${styles.navbar} ${scrolling ? styles.scrolled : ""}`}
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
            <Link href="about" className={styles.tags + " font-gold"}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="events" className={styles.tags + " font-gold"}>
              EVENTS
            </Link>
          </li>
          <li>
            <Link href="contact" className={styles.tags + " font-gold"}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              href="results"
              className={styles.result + " " + styles.tags + " font-gold"}
            >
              RESULTS
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
