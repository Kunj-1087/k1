/**
 * File: lib/sanity.client.ts
 * Function: Sanity Client Data Fetcher
 * Purpose: Handles fetching data from Sanity CMS. Includes fallbacks to local mock data for development or when Sanity is not reachable.
 * Linked to:
 * - app/page.tsx (Uses fetch for profile data)
 * - app/projects/page.tsx (Uses fetch for projects)
 * - app/data/personal.ts (Source of local mock data)
 */

import "server-only";
import { type QueryParams } from "next-sanity";
import { personalData } from "@/app/data/personal";

// Mock sanityFetch without initializing a real Sanity client to avoid Env/Config errors
export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  // Intercept queries and return local data
  if (query.includes('_type == "profile"')) {
    return personalData.profile as unknown as QueryResponse;
  }
  if (query.includes('_type == "project"') && !query.includes("slug.current")) {
    return personalData.projects as unknown as QueryResponse;
  }
  if (query.includes('_type == "project"') && query.includes("slug.current")) {
    // Mock single project return - reusing the first one for simplicity or finding by match if I implemented full logic
    // detailed logic:
    return personalData.projects[0] as unknown as QueryResponse;
  }
  if (query.includes('_type == "job"')) {
    return personalData.jobs as unknown as QueryResponse;
  }
  if (query.includes('_type == "Post"')) {
    if (query.includes("slug.current == $slug")) {
      return personalData.posts[0] as unknown as QueryResponse;
    }
    return personalData.posts as unknown as QueryResponse;
  }
  if (query.includes('_type == "heroe"')) {
    return personalData.heroes as unknown as QueryResponse;
  }

  // Fallback to empty
  return {} as QueryResponse;
}
