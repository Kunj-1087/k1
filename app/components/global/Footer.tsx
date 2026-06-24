import Image from "next/image";
import sanitylogo from "@/public/sanity.png";
import vercellogo from "@/public/vercel.svg";
import nextjslogo from "@/public/nextjs.svg";
import UnmountStudio from "./Unmount";

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-24 sm:mt-32 lg:mt-44 relative">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-6 sm:gap-y-4 md:px-16 px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row items-center gap-x-2 gap-y-2">
            <h3 className="font-inter text-sm sm:text-base">Built with:</h3>
            <ul className="flex items-center gap-x-2 sm:gap-x-3 text-xs sm:text-sm dark:text-zinc-600 text-zinc-400">
              <li>
                <a
                  href="https://sanity.io"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={sanitylogo}
                    width={18}
                    height={18}
                    alt="sanity logo"
                    className="sm:w-5 sm:h-5"
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
                    width={18}
                    height={18}
                    alt="nextjs logo"
                    className="sm:w-5 sm:h-5"
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
                    width={18}
                    height={18}
                    alt="vercel logo"
                    className="sm:w-5 sm:h-5"
                  />{" "}
                  Vercel
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:items-end items-center text-center">
            <small className="text-zinc-500 text-xs sm:text-sm">
              Copyright &copy; Kunj Nakrani {new Date().getFullYear()} All rights
              Reserved
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
