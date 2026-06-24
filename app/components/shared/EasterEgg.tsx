"use client";

import Image from "next/image";
import { useState } from "react";
import funImage from "@/public/yeah-right.png";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

export default function EasterEgg({ isMet }: { isMet: boolean }) {
  const [image, setImage] = useState(false);

  const toggleImage = () => {
    setImage(true);
    setTimeout(() => {
      setImage(false);
    }, 3000);
  };

  return (
    <>
      <button onClick={toggleImage} className="flex-shrink-0">
        {isMet !== true ? (
          <BiCheckbox
            className="text-2xl sm:text-3xl dark:text-zinc-300 text-zinc-600"
            aria-hidden="true"
          />
        ) : (
          <BiSolidCheckboxChecked
            className="text-2xl sm:text-3xl dark:text-primary-color text-secondary-color"
            aria-hidden="true"
          />
        )}
      </button>

      <div
        className={`fixed z-50 bottom-4 sm:bottom-1/2 duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          image ? "left-4 sm:left-8" : "-left-80"
        }`}
      >
        <Image
          src={funImage}
          width={150}
          height={150}
          quality={100}
          alt="yeah right"
          className="sm:w-[250px] sm:h-[250px]"
        />
      </div>
    </>
  );
}
