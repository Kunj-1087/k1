import Image from "next/image";
import { Metadata } from "next";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import HowIBuild from "../components/pages/HowIBuild";
import Usage from "../components/pages/Usage";
import { Slide } from "../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../components/shared/RefLink";

import Job from "../components/pages/Job";
import EmailCopy from "../components/shared/EmailCopy";

export const metadata: Metadata = {
  title: "About | Kunj Nakrani",
  metadataBase: new URL("https://kunjnakrani.vercel.app/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Kunj Nakrani",
    url: "https://kunjnakrani.vercel.app/about",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://github.com/Kunj-1087.png",
  },
};

export default async function About() {
  const profile: ProfileType = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="relative max-w-7xl mx-auto md:px-16 px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-16">
      <div key={profile?._id}>
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight leading-tight mb-6 sm:mb-8">
                My name is {profile?.fullName ?? "Kunj Nakrani"} and I&apos;m learning AI and fintech the hard way—publicly.
              </h1>

              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed text-sm sm:text-base">
                {profile?.fullBio ? (
                  <PortableText
                    value={profile?.fullBio}
                    components={CustomPortableText}
                  />
                ) : (
                  "Your bio information will show up here"
                )}
              </div>
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-6 lg:gap-y-8 lg:order-1 order-none mb-8 lg:mb-12 w-full lg:w-auto">
            <Slide delay={0.1}>
              <div className="lg:sticky lg:top-24">
                <div className="relative w-full lg:w-[400px] aspect-[4/5] lg:aspect-auto lg:max-h-96 mb-4 rounded-2xl overflow-hidden">
                  <Image
                    className="object-cover object-top w-full h-full"
                    src="/about-profile.jpg"
                    width={400}
                    height={400}
                    quality={100}
                    alt={profile?.profileImage.alt || "Profile Picture"}
                    priority
                  />
                </div>

                <div className="flex flex-col gap-y-3 sm:gap-y-4">
                  <div className="flex items-center gap-x-3">
                    <a
                      href="/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-center gap-x-2 flex-1 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2.5 sm:py-2 text-base sm:text-lg font-incognito font-semibold"
                    >
                      View Résumé <BiLinkExternal className="text-base" />
                    </a>
                    <a
                      href="/Resume.pdf"
                      download
                      className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline min-w-[44px] min-h-[44px] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md"
                      title="Download Resume"
                    >
                      <BiSolidDownload
                        className="text-lg"
                        aria-label="Download Resume"
                      />
                    </a>
                  </div>

                  <EmailCopy email={profile?.email ?? "kunjnakrani10@gmail.com"} />
                </div>
              </div>
            </Slide>
          </aside>
        </section>
        <Job />
        <Slide delay={0.14}>
          <Usage />
        </Slide>
        <HowIBuild />
      </div>
    </main>
  );
}
