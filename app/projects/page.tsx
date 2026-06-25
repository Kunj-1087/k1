import { Metadata } from "next";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Project | Kunj Nakrani",
  metadataBase: new URL("https://kunjnakrani.vercel.app/projects"),
  description: "Explore projects built by Kunj Nakrani",
  openGraph: {
    title: "Projects | Kunj Nakrani",
    url: "https://kunjnakrani.vercel.app/projects",
    description: "Explore projects built by Kunj Nakrani",
    images:
      "https://github.com/Kunj-1087.png",
  },
};

const customProjects = [
  {
    name: "Crewora",
    status: "v1",
    description: "Two-sided home services marketplace targeting Ahmedabad",
  },
  {
    name: "Codedrip",
    status: "MVP · Working Prototype",
    description: "A collaborative code sharing platform for developers",
  },
  {
    name: "MLBuilder",
    status: "v1",
    description: "Production-grade backend code patch library for developers and vibe coders",
  },
  {
    name: "AI Pulse",
    status: "About to Launch",
    description: "Daily AI news briefing platform with web, Android, and automation",
  },
  {
    name: "Spendly",
    status: "Just Started",
    description: "An intuitive personal expense tracker to manage daily budgets",
  },
];

export default function Project() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-16">
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-24">
        <Slide>
          <h1 className="font-incognito font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight leading-tight mb-6">
            &ldquo;The best is yet to come&rdquo;
          </h1>
          <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mx-auto">
            A curated selection of engineering initiatives focused on scalable systems, real-world data analysis, and end-to-end implementation. These projects demonstrate a commitment to rigorous fundamentals, clean architecture, and practical problem-solving.
          </p>
        </Slide>
      </section>

      <Slide delay={0.1}>
        <section className="flex flex-col gap-y-6 mb-12">
          {customProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 py-8 px-6 sm:py-10 sm:px-8 rounded-xl dark:hover:border-zinc-700 hover:border-zinc-200 transition-colors duration-200"
            >
              <div className="min-w-0 flex-1">
                <h2 className="text-lg sm:text-xl font-bold tracking-wide mb-2 text-zinc-900 dark:text-white">{project.name}</h2>
                <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex-shrink-0 self-start sm:self-center">
                <span className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2.5 py-1 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </section>
      </Slide>
    </main>
  );
}
