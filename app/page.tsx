import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./assets/icons/HeroSvg";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import ContributionGraph from "./components/pages/GithubCalendarComponent";

export default async function Home() {
  const profile: ProfileType = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-4 sm:px-6 lg:mt-8 mt-4 min-h-screen">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-y-8 xl:gap-x-12 mb-12 sm:mb-16 pt-4 sm:pt-8">
        <div key={profile?._id} className="lg:max-w-2xl w-full">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:leading-[3.7rem] leading-tight">
              {profile?.headline ?? "Job Title"}
            </h1>
            <p className="text-sm sm:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed font-incognito max-w-xl">
              {profile?.shortBio ?? "Short bio description"}
            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>
        <Slide delay={0.14} className="w-full xl:w-auto flex justify-center xl:justify-end">
          <div className="max-w-[300px] sm:max-w-[400px] lg:max-w-none">
            <HeroSvg />
          </div>
        </Slide>
      </section>
      <ContributionGraph />
      <Job />
    </main>
  );
}
