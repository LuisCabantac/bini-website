"use client";

import React, { useState } from "react";
import Image from "next/image";

import galleryData from "@/app/_lib/gallery-data";

import HeaderTitle from "@/app/_components/HeaderTitle";
import GalleryCards from "@/app/_components/GalleryCards";

export default function Gallery() {
  const [zoomedImage, setZoomedImage] = useState(null);

  function openZoomedImage(imageUrl) {
    setZoomedImage(imageUrl);
  }

  function closeZoomedImage() {
    setZoomedImage(null);
  }

  return (
    <section>
      <HeaderTitle type="h2">Gallery</HeaderTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 md:mt-6 mt-4">
        <GalleryCards
          images={galleryData.slice(0, 4)}
          padding=""
          height="md:h-[26rem]"
          openZoomedImage={openZoomedImage}
        />
        <GalleryCards
          images={galleryData.slice(4, 8)}
          padding="md:pt-4 pt-0"
          height="md:h-[26rem]"
          openZoomedImage={openZoomedImage}
        />
        <GalleryCards
          images={galleryData.slice(8, 12)}
          padding=""
          height="md:h-[26rem]"
          openZoomedImage={openZoomedImage}
        />
        <GalleryCards
          images={galleryData.slice(12, 16)}
          padding="md:pt-4 pt-0"
          height="md:h-[26rem]"
          openZoomedImage={openZoomedImage}
        />

        {zoomedImage && (
          <div className="zoomed__image__container" onClick={closeZoomedImage}>
            <div className="md:w-[30%] md:h-[60%] w-[80%] h-[40%] flex justify-center items-center">
              <Image
                src={zoomedImage}
                alt="zoomed__image"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
