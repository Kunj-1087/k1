/**
 * File: app/components/global/Navbar.tsx
 * Function: Global Navigation Bar
 * Purpose: Provides the primary navigation links and includes the theme toggle and mobile menu.
 * Linked to:
 * - app/layout.tsx (Rendered at the top of the root layout)
 * - app/components/global/Theme.tsx (Theme toggler)
 * - app/components/global/MobileMenu.tsx (Mobile navigation menu)
 * - app/components/global/Unmount.tsx (Wraps content)
 */

import Link from "next/link";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
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
  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-incognito font-bold text-xl dark:text-white text-zinc-900 border border-[#6B7280] rounded-md px-2 py-1 bg-transparent"
          >
            KN
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
