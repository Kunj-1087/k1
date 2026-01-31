import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Blog | Kunj Nakrani",
  metadataBase: new URL("https://kunjnakrani.vercel.app/blog"),
  description: "Read latest stories from Kunj Nakrani's Blog",
  openGraph: {
    title: "Blog | Kunj Nakrani",
    url: "https://kunjnakrani.vercel.app/blog",
    description: "Read latest stories from Kunj Nakrani's Blog",
    images:
      "https://github.com/Kunj-1087.png",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="This is where I document the process of building intelligent systems. From training models and architecting backend pipelines to shipping production-ready web apps. Expect deep dives into code, architectural decisions, and the honest reality of engineering complex software."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
