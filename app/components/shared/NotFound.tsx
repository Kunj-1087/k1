import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";
import FeaturedPosts from "../pages/FeaturedPosts";

type props = {
  title: string;
  description: string;
};

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-4 sm:px-6 mt-8 sm:mt-16">
      <header className="max-w-4xl">
        <Image
          width={60}
          height={60}
          src={duckImage}
          alt="Yellow duck searching"
          className="sm:w-20 sm:h-20"
        />
        <h1 className="font-incognito font-black tracking-tight text-2xl sm:text-3xl lg:text-6xl lg:leading-[3.7rem] leading-tight mt-4 sm:mt-6 mb-2 sm:mb-3">
          {title}
        </h1>
        <p className="max-w-2xl text-sm sm:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>

      <div className="max-w-4xl grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8 sm:mt-12">
        <FeaturedPosts />
      </div>
    </main>
  );
}
