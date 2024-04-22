"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo-cravpixel-horizontal.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollClass = isScrolled ? "backdrop-blur-md" : "";

  return (
    <header
      className={`navbar lg:fixed left-0 right-0 z-50 bg-opacity-50 lg:!px-0 ${scrollClass}`}
    >
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src={Logo}
              alt="CravPixel"
              width={224}
              height={48}
              priority
              className="w-auto h-8 md:h-auto"
            />
          </Link>
        </div>
        <Navigation />
        <div className="hidden md:flex navbar-end">
          <button className="btn md:tracking-widest md:font-semibold bg-cp-red/80 hover:bg-cp-red/65 text-white">
            Chat with us
          </button>
        </div>
      </div>
    </header>
  );
}

export function Navigation() {
  return (
    <nav className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/about" className="text-base tracking-widest">
            About
          </Link>
        </li>
        <li>
          <Link href="/service" className="text-base tracking-widest">
            Service
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-base tracking-widest">
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
}
