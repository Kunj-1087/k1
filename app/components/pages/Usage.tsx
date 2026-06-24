import { PortableText } from "@portabletext/react";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import { sanityFetch } from "@/lib/sanity.client";

export default async function Usage() {
  const profile: ProfileType = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <section className="max-w-2xl mt-16 sm:mt-24">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl text-sm sm:text-base">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      <div className="text-sm sm:text-base">
        <PortableText
          value={profile?.usage}
          components={CustomPortableTextFavicon}
        />
      </div>
    </section>
  );
}
