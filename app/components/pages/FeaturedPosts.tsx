import Link from "next/link";
import Image from "next/legacy/image";
import { postsQuery } from "@/lib/sanity.query";
import type { PostType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";
import { localPosts } from "@/app/data/posts";

const fallbackImage = "/kunj-portrait.jpg";

export default async function FeaturedPosts({ params }: { params?: string }) {
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"],
  });

  const featuredPosts = [...posts, ...localPosts].filter(
    (post) => post.featured === true
  );

  return (
    <>
      {featuredPosts.map((post) =>
        post.featured !== true || post.isPublished !== true ? null : (
          <article
            key={post._id}
            className={`mb-3 sm:mb-4 ${post.slug === params ? "hidden" : "flex lg:flex-row flex-col"
              }`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-3 sm:gap-4 dark:bg-primary-bg bg-secondary-bg p-3 sm:p-4 lg:p-5 rounded-lg border dark:border-zinc-800 border-zinc-200"
            >
              <Image
                src={post.coverImage?.image || fallbackImage}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                alt={post.coverImage?.alt || post.title}
                width={400}
                height={230}
                placeholder={post.coverImage?.lqip ? "blur" : "empty"}
                blurDataURL={post.coverImage?.lqip || ""}
                quality={100}
                loading="lazy"
              />
              <div className="max-w-lg">
                <h2 className="max-w-sm text-sm sm:text-base lg:text-lg tracking-tight mb-2 sm:mb-4">
                  {post.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600 text-xs sm:text-sm">
                  {post.description.slice(0, 80).padEnd(83, "...")}
                </p>
              </div>
            </Link>
          </article>
        )
      )}
    </>
  );
}
