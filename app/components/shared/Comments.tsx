"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";
import { giscusRepoId, giscusCategoryId } from "@/lib/env.api";

export default function Comments() {
  const theme = useTheme();
  const giscusTheme =
    theme.theme === "light"
      ? "light"
      : theme.theme === "dark"
        ? "transparent_dark"
        : "dark";

  // Check if Giscus is properly configured
  const isConfigured =
    giscusRepoId &&
    giscusCategoryId &&
    giscusRepoId !== "placeholder-value" &&
    giscusCategoryId !== "placeholder-value";

  if (!isConfigured) {
    return (
      <div className="mt-10 p-8 text-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#151515]">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          Discussion will be enabled soon
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Comments are currently disabled while we configure the system.
        </p>
      </div>
    );
  }

  return (
    <Giscus
      id="comments"
      repo="Kunj-1087/portfolio"
      repoId={giscusRepoId}
      category="Announcements"
      categoryId={giscusCategoryId}
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={giscusTheme}
      lang="en"
      loading="lazy"
    />
  );
}
