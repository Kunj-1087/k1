/**
 * File: schemas/project.ts
 * Function: Project Schema
 * Purpose: Defines the schema for portfolio projects in Sanity CMS, mapping project details like name, tagline, links, and cover image.
 * Linked to:
 * - schemas/index.ts (Included in the schema configuration)
 * - lib/sanity.query.ts (Data structure queried by projectsQuery and singleProjectQuery)
 */

import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Projects",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
    },
    {
      name: "logo",
      title: "Project Logo",
      type: "image",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
      description: "Leaving this URL blank will add a coming soon to the link.",
    },
    {
      name: "repository",
      title: "Repository URL",
      type: "url",
      description:
        'Leaving this URL blank will add a "No Repository" message to the link.',
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      description: "Write a full description about this project",
    }),
  ],
};

export default project;
