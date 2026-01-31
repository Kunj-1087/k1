/**
 * File: lib/sanity.image.ts
 * Function: Image URL Builder
 * Purpose: Utility to generate optimized URLs for images stored in Sanity. Includes a mock builder for local images.
 * Linked to:
 * - app/components/pages/Job.tsx (Displaying company logos)
 * - app/components/pages/Post.tsx (Displaying blog feature images)
 */

import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./env.api";

const imageBuilder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "production",
});

export function urlFor(source: any) {
  // Mock builder for local string URLs (bypassing Sanity)
  const mockBuilder = {
    width: () => mockBuilder,
    height: () => mockBuilder,
    fit: () => mockBuilder,
    auto: () => mockBuilder,
    url: () => source as string,
  };

  // If source is a string (local placeholder), return the mock builder
  if (typeof source === "string") {
    return mockBuilder as any;
  }

  // Fallback to original builder if it works, otherwise mock
  try {
    return imageBuilder.image(source).auto("format").fit("max");
  } catch (err) {
    return mockBuilder as any;
  }
}
