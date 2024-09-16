"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";

import HeaderTitle from "@/app/_components/HeaderTitle";
import galleryData from "@/app/_lib/gallery-data";

export default function Gallery() {
  const [zoomedImage, setZoomedImage] = useState(null);

  function openZoomedImage(imageUrl) {
    setZoomedImage(imageUrl);
  }

  function closeZoomedImage() {
    setZoomedImage(null);
  }

  return (
    <section className="md:mx-12 mx-6">
      <HeaderTitle type="h2">Gallery</HeaderTitle>
      <div className="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] grid-flow-row rounded-lg overflow-hidden md:mt-6 mt-4">
        {galleryData.map((item) => (
          <div
            key={item.id}
            onClick={() => openZoomedImage(item.url)}
            className="md:w-full md:h-[26rem] w-full h-[10rem]"
          >
            <div className="relative w-full h-full">
              <Image src={item.url} alt="image" fill className="object-cover" />
            </div>
          </div>
        ))}
        {zoomedImage && (
          <div className="zoomed__image__container" onClick={closeZoomedImage}>
            <div className="relative md:w-[40%] md:h-[80%] w-[80%] h-[40%]">
              <Image
                src={zoomedImage}
                alt="zoomed__image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
