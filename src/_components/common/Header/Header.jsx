"use client";
import Navbar from "@/_components/common/Navbar/Navbar";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <div className="h-16 fixed w-full top-0 z-[100] transition-bg duration-400 ease-in-out"></div>
  );
};

export default Header;
