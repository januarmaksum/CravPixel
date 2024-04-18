import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo-cravpixel-horizontal.png";

export default function Header() {
  return (
    <header className="w-full lg:max-w-7xl mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <Dropdown />
          <Link className="w-56" href="/">
            <Image
              src={Logo}
              alt="CravPixel"
              width={224}
              height={48}
              priority
            />
          </Link>
        </div>
        <Navigation />
        <div className="navbar-end">
          <Link
            href="/contact"
            className="btn-xs md:btn-md btn btn-header bg-cp-red/80 hover:bg-cp-red/65 text-white md:uppercase"
          >
            Chat with us
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Dropdown() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Service</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
      </ul>
    </div>
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
