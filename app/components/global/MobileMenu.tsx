"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {
  HiBeaker,
  HiBookmarkAlt,
  HiCamera,
  HiUser,
  HiMail,
  HiHome,
} from "react-icons/hi";
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagram } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../../../public/branding-icon.png";

const navData = [
  { title: "Home", href: "/", icon: HiHome },
  { title: "About", href: "/about", icon: HiUser },
  { title: "Projects", href: "/projects", icon: HiBeaker },
  { title: "Blog", href: "/blog", icon: HiBookmarkAlt },
  { title: "Photos", href: "/photos", icon: HiCamera },
  { title: "Contact", href: "/contact", icon: HiMail },
];

const socialLinks = [
  { href: "https://github.com/Kunj-1087", icon: BiLogoGithub, label: "GitHub" },
  { href: "https://x.com/Kunj1087", icon: FaSquareXTwitter, label: "X" },
  { href: "https://www.linkedin.com/in/kunj-nakrani-064baa363/", icon: BiLogoLinkedinSquare, label: "LinkedIn" },
  { href: "https://www.instagram.com/kunj.nakrani10/", icon: BiLogoInstagram, label: "Instagram" },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "";
        document.body.classList.remove("menu-open");
      } else {
        document.body.style.overflow = "hidden";
        document.body.classList.add("menu-open");
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        {navShow ? (
          <HiOutlineX className="text-xl" />
        ) : (
          <HiMenu className="text-xl" />
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          navShow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onToggleNav}
      />

      {/* Slide-in Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] transform duration-300 ease-out dark:bg-zinc-900 bg-white shadow-2xl ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b dark:border-zinc-800 border-zinc-200">
          <Link href="/" onClick={onToggleNav} className="tap-target flex items-center">
            <Image src={Logo} width={32} height={32} alt="logo" />
          </Link>
          <button
            aria-label="Close Menu"
            onClick={onToggleNav}
            className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:dark:border-zinc-600 hover:border-zinc-300 duration-200"
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col py-2">
          {navData.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`flex items-center gap-x-3 font-incognito font-semibold text-base sm:text-lg px-6 py-4 transition-colors duration-200 ${
                pathname === link.href
                  ? "dark:text-primary-color text-zinc-900 dark:bg-primary-bg bg-zinc-50"
                  : "dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-zinc-900 hover:dark:bg-zinc-800/50 hover:bg-zinc-50"
              }`}
              onClick={onToggleNav}
            >
              <link.icon
                className={`text-lg sm:text-xl ${
                  pathname === link.href
                    ? "text-primary-color"
                    : "text-zinc-500"
                }`}
                aria-hidden="true"
              />
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="px-6 py-4 border-t dark:border-zinc-800 border-zinc-200">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-x-2 w-full py-3 rounded-md font-semibold text-sm bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90 transition-opacity duration-200"
            onClick={onToggleNav}
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="px-6 py-4 border-t dark:border-zinc-800 border-zinc-200">
          <p className="text-xs uppercase tracking-widest dark:text-zinc-500 text-zinc-400 mb-3">
            Connect
          </p>
          <div className="flex items-center gap-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-zinc-900 transition-colors duration-200"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}