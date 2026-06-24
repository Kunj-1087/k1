import Image from "next/image";
import { jobQuery } from "@/lib/sanity.query";
import type { JobType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";
import EmptyState from "../shared/EmptyState";
import { RiBriefcase3Fill } from "react-icons/ri";

export default async function Job() {
  const jobs: JobType[] = await sanityFetch({
    query: jobQuery,
    tags: ["job"],
  });

  return (
    <section className="mt-16 sm:mt-20">
      <Slide delay={0.16}>
        <div className="mb-10 sm:mb-16">
          <h2 className="font-incognito text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      {jobs.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8 sm:gap-y-10">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="flex items-start gap-x-4 sm:gap-x-6 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-[18px] sm:before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <RefLink
                  href={job.url}
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[44px] sm:min-h-[80px] min-w-[44px] sm:min-w-[80px] p-1 sm:p-2 rounded-md overflow-clip relative flex-shrink-0"
                >
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      className="object-cover duration-300"
                      alt={`${job.name} logo`}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <span className="text-lg sm:text-3xl font-bold font-incognito dark:text-zinc-600 text-zinc-400">
                      {job.name.charAt(0)}
                    </span>
                  )}
                </RefLink>
                <div className="flex flex-col items-start min-w-0">
                  <h3 className="text-base sm:text-xl font-semibold">{job.name}</h3>
                  <p className="text-sm sm:text-base">{job.jobTitle}</p>
                  <time className="text-xs sm:text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(job.startDate)} -{" "}
                    {job.endDate ? (
                      formatDate(job.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Present
                      </span>
                    )}
                  </time>
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-3 sm:my-4 text-sm sm:text-base">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="Work Experience Not Provided"
          message="We could not find any work experience at the moment. To add one, visit the Sanity studio to start editing the content."
        />
      )}
    </section>
  );
}
