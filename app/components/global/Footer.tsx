/**
 * File: app/components/global/Footer.tsx
 * Function: Global Footer
 * Purpose: Displays the footer section of the application, including "Built with" links and copyright information.
 * Linked to:
 * - app/layout.tsx (Rendered at the bottom of the root layout)
 * - app/components/global/Unmount.tsx (Wraps content to handle unmounting animations)
 */

import Image from "next/image";
import sanitylogo from "@/public/sanity.png";
import vercellogo from "@/public/vercel.svg";
import nextjslogo from "@/public/nextjs.svg";
import UnmountStudio from "./Unmount";

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[250px] min-h-full relative">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
          <div className="flex md:flex-row flex-col items-center gap-x-2">
            <h3 className="font-inter">Built with:</h3>
            <ul className="flex items-center gap-x-2 text-sm dark:text-zinc-600 text-zinc-400 md:mt-0 mt-3">
              <li>
                <a
                  href="https://sanity.io"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={sanitylogo}
                    width={20}
                    height={20}
                    alt="sanity logo"
                  />{" "}
                  Sanity
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={nextjslogo}
                    width={20}
                    height={20}
                    alt="nextjs logo"
                  />{" "}
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={vercellogo}
                    width={20}
                    height={20}
                    alt="vercel logo"
                  />{" "}
                  Vercel
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
            {/* <a
              className="flex items-center justify-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 px-4 text-center mb-3    font-bold tracking-tight"
              href="https://github.com/Kunj-1087/Portfolio-1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BiLogoGithub />
              Stars <em className="text-primary-color not-italic">3,329</em>
            </a> */}

            <small className="text-zinc-500">
              Copyright &copy; Kunj Nakrani {new Date().getFullYear()} All rights
              Reserved
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
