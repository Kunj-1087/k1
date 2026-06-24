import { Metadata } from "next";
import Image from "next/image";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Blog | Kunj Nakrani",
  metadataBase: new URL("https://kunjnakrani.vercel.app/blog"),
  description: "Read latest stories from Kunj Nakrani's Blog",
  openGraph: {
    title: "Blog | Kunj Nakrani",
    url: "https://kunjnakrani.vercel.app/blog",
    description: "Read latest stories from Kunj Nakrani's Blog",
    images:
      "https://github.com/Kunj-1087.png",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-4 sm:px-6 mt-4 sm:mt-8 lg:mt-0">
      <header className="mb-8 sm:mb-10">
        <Slide>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8">
            <div>
              <h1 className="max-w-3xl font-incognito font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:leading-[3.7rem] leading-tight">
                Blog
              </h1>
              <p className="max-w-2xl text-sm sm:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                This is where I document the process of building intelligent
                systems. From training models and architecting backend pipelines
                to shipping production-ready web apps. Expect deep dives into
                code, architectural decisions, and the honest reality of
                engineering complex software.
              </p>
              <Social type="publication" />
            </div>

            <div className="relative w-full h-[200px] sm:h-[250px] lg:h-full min-h-[200px] bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden">
              <Image
                src="/blog-intro-v2.jpg"
                alt="Blog Introduction"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Slide>
      </header>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-6 sm:mb-8">
          <BiDetail className="text-lg sm:text-xl" />
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
