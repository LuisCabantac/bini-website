import Image from "next/image";

import { GalleryDataType } from "@/lib/gallery-data";

export default function GalleryCards({
  images,
  padding,
  height,
  openZoomedImage,
}) {
  return (
    <div className={`flex flex-col gap-2 md:gap-4 ${padding}`}>
      {images.map((item: GalleryDataType) => (
        <div
          key={item.id}
          onClick={() => openZoomedImage(item.url)}
          className={`${height} h-[18rem] w-full md:h-[13rem]`}
        >
          <div className="relative h-full w-full">
            <Image
              src={item.url}
              alt={item.name}
              fill
              className="rounded-xl object-cover md:rounded-2xl"
              placeholder="blur"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
