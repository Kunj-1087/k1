"use client";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function Accordion({
  id,
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={`grid gap-y-2 border-b dark:border-zinc-800 border-zinc-200 my-3 sm:my-4 duration-200 ${active === id ? "grid-rows-full pb-3 sm:pb-4" : "grid-rows-fit pb-0"}`}
    >
      <div
        className={`flex items-center justify-between gap-x-2 cursor-pointer selection:bg-transparent`}
        onClick={() => setActive(active === id ? null : id)}
      >
        <h3 className="text-sm sm:text-lg mb-1 dark:text-white text-zinc-700">
          {question}
        </h3>
        <button className="p-1 rounded-full text-xs sm:text-sm cursor-[inherit] duration-100 dark:bg-primary-bg bg-secondary-bg flex-shrink-0">
          {active === id ? <BiMinus /> : <BiPlus />}
        </button>
      </div>
      <p className="dark:text-zinc-400 text-zinc-600 overflow-hidden text-sm sm:text-base">
        {answer}
      </p>
    </div>
  );
}
