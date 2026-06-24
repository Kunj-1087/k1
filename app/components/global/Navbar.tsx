"use client";

import Link from "next/link";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Photos",
      href: "/photos",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <UnmountStudio>
      <header
        className={`text-sm py-4 sm:py-5 md:py-6 md:px-16 px-4 sm:px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-8 sm:mb-10 fixed top-0 left-0 right-0 w-full transition-all duration-300 ${
          scrolled
            ? "dark:bg-zinc-900/95 bg-white/95 backdrop-blur-md shadow-sm dark:shadow-zinc-800/20"
            : "dark:bg-zinc-900 bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-incognito font-bold text-lg sm:text-xl dark:text-white text-zinc-900 border border-[#6B7280] rounded-md px-2 py-1 bg-transparent hover:border-primary-color dark:hover:border-primary-color duration-300"
          >
            KN
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-6 lg:gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={`font-incognito text-sm lg:text-base duration-300 ${
                      pathname === link.href
                        ? "dark:text-primary-color text-zinc-900 font-semibold"
                        : "dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-2 sm:gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[57px] sm:h-[65px] md:h-[73px]" />
    </UnmountStudio>
  );
}
