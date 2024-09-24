"use client";

import Image from "next/image";

import { useMobileWidth } from "@/app/_contexts/MobileContext";

import PlayButtonOverlay from "@/app/_components/PlayButtonOverlay";

export default function ListAll({ content, section }) {
  const { isMobile } = useMobileWidth();

  return (
    <li className="md:w-[23rem] w-full">
      <div className="video__container h-[12.5rem] md:w-[23rem] relative">
        <a
          href={`https://www.youtube.com/${
            section === "playlist"
              ? `playlist?list=${content.id.playlistId}`
              : `watch?v=${content.id.videoId}`
          }`}
          target="_blank"
        >
          <Image
            className="embla__slide__img embla__parallax__img object-cover object-center"
            src={content.snippet.thumbnails.high.url}
            alt={section === "playlist" ? content.snippet.title : content.title}
            fill
          />
        </a>

        <PlayButtonOverlay type="videos" />
      </div>
      <p
        className={`${
          section === "playlist" ? "text-center" : ""
        } font-semibold md:text-lg text-sm pt-1 md:w-[23rem]`}
      >
        {section === "playlist"
          ? content.snippet.title
              .replace(/&#39;/g, "'")
              .replace(/&quote;/g, '"')
          : content.snippet.title
              .replace(/&#39;/g, "'")
              .replace(/&quote;/g, '"')
              .slice(0, isMobile ? 45 : 35)
              .concat("...")}
      </p>
    </li>
  );
}
