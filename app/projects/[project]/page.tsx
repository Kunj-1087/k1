import Image from "next/image";
import { Metadata } from "next";
import { singleProjectQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { urlFor } from "@/lib/sanity.image";
import { sanityFetch } from "@/lib/sanity.client";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://res.cloudinary.com/kunjnakrani/image/upload/v1692636087/kunjnakrani/projects.png";

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`https://kunjnakrani.com/projects/${project.slug}`),
    description: project.tagline,
    openGraph: {
      images: project.coverImage
        ? urlFor(project.coverImage.image).width(1200).height(630).url()
        : fallbackImage,
      url: `https://kunjnakrani.com/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });

  return (
    <main className="max-w-6xl mx-auto md:px-16 px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-16">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4 sm:mb-4">
            <h1 className="font-incognito font-black tracking-tight text-2xl sm:text-3xl lg:text-5xl max-w-md">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2 flex-shrink-0 w-full sm:w-auto">
              <a
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center justify-center gap-x-2 flex-1 sm:flex-none dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base duration-200 ${
                  !project.projectUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLinkExternal aria-hidden="true" />
                {project.projectUrl ? "Live URL" : "Coming Soon"}
              </a>

              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center justify-center gap-x-2 flex-1 sm:flex-none dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base duration-200 ${
                  !project.repository
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLogoGithub aria-hidden="true" />
                {project.repository ? "GitHub" : "No Repo"}
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              className="object-cover border dark:border-zinc-800 border-zinc-100"
              fill
              src={project.coverImage?.image ?? fallbackImage}
              alt={project.coverImage?.alt ?? project.name}
              quality={100}
              placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={project.coverImage?.lqip || ""}
            />
          </div>

          <div className="mt-6 sm:mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed text-sm sm:text-base">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
