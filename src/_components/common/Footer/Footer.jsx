"use client"
import styles from "./Footer.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    if(pathname == "/about-us"){
        return <></>;
    }

    return (
        <div>fgjhrdthdrthr</div>
       
    );
}

export default Footer;