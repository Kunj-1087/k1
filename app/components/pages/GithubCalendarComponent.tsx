import { Slide } from "@/app/animation/Slide";

export default function GithubCalendarComponent() {
  return (
    <section className="mt-12 sm:mt-16 mb-8 sm:mb-12">
      <Slide delay={0.16} className="mb-6 sm:mb-8">
        <h2 className="font-incognito text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          Engineering Mindset
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed max-w-3xl text-sm sm:text-base">
          I believe in consistent, deliberate engineering over high-volume activity. My focus is on building robust systems, mastering fundamentals, and delivering high-quality code that solves real problems. I value depth of understanding and long-term maintainability over superficial metrics.
        </div>
      </Slide>
    </section>
  );
}
