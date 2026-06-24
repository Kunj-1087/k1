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
    <main className="max-w-7xl mx-auto md:px-16 px-4 sm:px-6 mt-4 sm:mt-8 lg:mt-0">
      <PageHeading
        title="Photos"
        description="Here are some photos from my life."
      />
      <figure className="my-6">
        <Slide delay={0.12}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover dark:bg-primary-bg bg-secondary-bg"
                />
              </div>
            ))}
          </div>
        </Slide>
      </figure>
    </main>
  );
}
