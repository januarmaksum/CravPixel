"use client";
import { GoHome, GoInfo, GoRocket, GoVersions } from "react-icons/go";
import { useRouter, usePathname } from "next/navigation";
import nav from "@/data/navigation";

const icons = {
  GoHome: <GoHome />,
  GoInfo: <GoInfo />,
  GoRocket: <GoRocket />,
  GoVersions: <GoVersions />,
};

const activeClass =
  "active bg-cp-dark-blue text-cp-blue-light border-cp-blue-light";

export default function BtmNav() {
  const router = useRouter();
  const pathname = usePathname();

  const knownPaths = nav.map((item) => item.path);

  const isNotFoundPage = !knownPaths.includes(pathname);

  if (isNotFoundPage) return null; // Don't render BtmNav on 404 pages

  const isActive = (path) => (pathname === path ? activeClass : "");

  return (
    <div className="btm-nav btm-nav-sm lg:hidden">
      {nav.map(({ path, label, icon }) => (
        <button
          key={path}
          onClick={() => router.push(path)}
          className={isActive(path)}
        >
          {icons[icon]}
          <span className="btm-nav-label">{label}</span>
        </button>
      ))}
    </div>
  );
}