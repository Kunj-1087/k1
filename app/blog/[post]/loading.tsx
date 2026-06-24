export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto md:px-16 px-4 sm:px-6 mt-4 sm:mt-8">
      <div className="flex items-center gap-x-4 sm:gap-x-6 mb-8 sm:mb-10">
        <span className="w-10 sm:w-12 h-6 sm:h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
        <span className="w-1/2 sm:w-1/3 h-6 sm:h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
      </div>

      <div className="flex lg:flex-row flex-col items-start justify-between gap-6 lg:gap-0">
        <div className="w-full flex flex-col">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="w-20 sm:w-28 h-6 sm:h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
            <span className="w-20 sm:w-28 h-6 sm:h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          </div>

          <span className="w-full lg:w-[90%] h-10 sm:h-14 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse mb-3 sm:mb-4"></span>
          <span className="w-full lg:w-[90%] h-6 sm:h-8 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse mb-8 sm:mb-12"></span>
          <span className="w-full lg:w-[90%] aspect-video dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
        </div>

        <div className="flex lg:flex-col flex-row items-center gap-4 w-full lg:w-60">
          <span className="flex-1 lg:flex-none w-full h-24 sm:h-28 lg:h-32 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          <span className="flex-1 lg:flex-none w-full h-24 sm:h-28 lg:h-32 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          <span className="hidden lg:block w-full h-24 sm:h-28 lg:h-32 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          <span className="hidden lg:block w-full h-24 sm:h-28 lg:h-32 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
