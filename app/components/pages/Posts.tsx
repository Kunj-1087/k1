import Image from "next/legacy/image";
import Link from "next/link";
import { postsQuery } from "@/lib/sanity.query";
import { PostType } from "@/types";
import EmptyState from "../shared/EmptyState";
import { BiSolidTime, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import { HiCalendar } from "react-icons/hi";
import { sanityFetch } from "@/lib/sanity.client";
import { readTime } from "@/app/utils/readTime";
import { toPlainText } from "@portabletext/react";
import { localPosts } from "@/app/data/posts";

const fallbackImage: string = "/kunj-portrait.jpg";

export default async function Posts() {
  let posts: PostType[] = [];

  try {
    posts = await sanityFetch({
      query: postsQuery,
      tags: ["Post"],
    });

    if (!Array.isArray(posts)) {
      console.warn("sanityFetch returned non-array for posts, defaulting to empty array.");
      posts = [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    posts = [];
  }

  const customOrder = ["local-1", "local-2", "local-4", "local-3"];

  const allPosts = [...posts, ...localPosts].sort((a, b) => {
    const indexA = customOrder.indexOf(a._id);
    const indexB = customOrder.indexOf(b._id);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return (
      new Date(b.date || b._createdAt).getTime() -
      new Date(a.date || a._createdAt).getTime()
    );
  });

  return (
    <section>
      {allPosts.length > 0 ? (
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {allPosts.map((post) =>
            post.isPublished !== true ? null : (
              <article key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200 group"
                >
                  <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip">
                    <Image
                      src={post.coverImage?.image || fallbackImage}
                      className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover group-hover:scale-125 duration-300"
                      alt={post.coverImage?.alt || post.title}
                      layout="fill"
                      placeholder={post.coverImage?.lqip ? "blur" : "empty"}
                      blurDataURL={post.coverImage?.lqip || ""}
                    />
                  </div>
                  <div className="max-w-lg">
                    <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
                      {post.title}
                    </h2>
                    <p className="dark:text-zinc-400 text-zinc-600 text-[0.95rem]">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-x-4 mt-3 text-sm">
                      <div className="flex items-center gap-x-2">
                        <HiCalendar />
                        <time
                          dateTime={post.date ? post.date : post._createdAt}
                        >
                          {post.date
                            ? formatDate(post.date)
                            : formatDate(post._createdAt)}
                        </time>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <BiSolidTime />
                        <div className="">
                          {readTime(toPlainText(post.body))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )
          )}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
