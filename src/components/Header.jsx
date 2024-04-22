"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo-cravpixel-horizontal.png";
import nav from "@/data/navigation";

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
              className="w-auto md:w-[224px] h-8 md:h-auto"
            />
          </Link>
        </div>
        <Navigation />
        <div className="hidden md:flex navbar-end">
          <button className="btn bg-cp-red/80 hover:bg-cp-red/65 text-white">
            Gratis Konsultasi
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
        {nav
          .filter((item) => item.label !== "Home")
          .map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="text-sm tracking-widest uppercase"
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
