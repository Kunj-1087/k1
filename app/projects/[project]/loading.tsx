export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto md:px-16 px-4 sm:px-6 mt-4 sm:mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <span className="w-40 sm:w-52 h-9 sm:h-11 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
        <div className="flex items-center gap-x-2 w-full sm:w-auto">
          <span className="flex-1 sm:flex-none w-full sm:w-28 h-9 sm:h-11 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
          <span className="flex-1 sm:flex-none w-full sm:w-28 h-9 sm:h-11 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
        </div>
      </div>
      <div className="w-full aspect-video mb-6 sm:mb-8 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></div>
      <div className="flex flex-col gap-y-2">
        <span className="w-full h-4 sm:h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
        <span className="w-full h-4 sm:h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
        <span className="w-3/4 h-4 sm:h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
      </div>
    </div>
  );
}
