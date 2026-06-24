import { Slide } from "../../animation/Slide";

export default function HowIBuild() {
  const principles = [
    "Start with fundamentals before tools",
    "Prefer simple, readable systems over clever abstractions",
    "Build end-to-end projects to understand real constraints",
    "Optimize for maintainability and clarity",
    "Iterate through feedback and real usage",
  ];

  return (
    <section className="mt-16 sm:mt-24 max-w-5xl">
      <Slide delay={0.16}>
        <div className="mb-6 sm:mb-8">
          <h2 className="font-incognito text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold tracking-tight">
            How I Build
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <ul className="flex flex-col gap-y-3 sm:gap-y-4">
          {principles.map((principle, index) => (
            <li
              key={index}
              className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed list-disc list-inside marker:text-zinc-400 dark:marker:text-zinc-600"
            >
              {principle}
            </li>
          ))}
        </ul>
      </Slide>
    </section>
  );
}
