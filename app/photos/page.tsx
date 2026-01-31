import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

const images = [
  {
    id: "1",
    src: "/photos/photo-1.jpg",
    alt: "Kunj Nakrani standing",
  },
  {
    id: "2",
    src: "/photos/photo-2.jpg",
    alt: "Kunj Nakrani leaning",
  },
  {
    id: "3",
    src: "/photos/photo-3-new.png",
    alt: "Kunj Nakrani in traditional wear",
  },
];

export const metadata: Metadata = {
  title: "Photos | Kunj Nakrani",
  metadataBase: new URL("https://kunjnakrani.vercel.app/photos"),
  description: "Explore photos taken by Kunj Nakrani",
  openGraph: {
    title: "Photos | Kunj Nakrani",
    url: "https://kunjnakrani.vercel.app/photos",
    description: "Explore photos taken by Kunj Nakrani",
    images:
      "https://github.com/Kunj-1087.png",
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description="Here are some photos from my life."
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={350}
              height={500}
              className="dark:bg-primary-bg bg-secondary-bg object-cover rounded-md"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}
