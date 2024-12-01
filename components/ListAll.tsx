"use client";

import Image from "next/image";

import { useMobileWidth } from "@/contexts/MobileContext";
import { VideosItemsType, VideosId } from "@/lib/actions";

import PlayButtonOverlay from "@/components/PlayButtonOverlay";

export default function ListAll({
  content,
  section,
}: {
  content: VideosItemsType;
  section: string;
}) {
  const { isMobile } = useMobileWidth();

  return (
    <li className="w-full md:w-[23rem]">
      <div className="video__container relative h-[12.5rem] md:w-[23rem]">
        <a
          href={`https://www.youtube.com/${
            section === "playlist"
              ? `playlist?list=${(content.id as VideosId).playlistId}`
              : `watch?v=${(content.id as VideosId).videoId}`
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
        } pt-1 text-sm font-semibold md:w-[23rem] md:text-lg`}
      >
        {section === "playlist"
          ? content.snippet.title.replace(/&#39;/g, "'").replace(/&quot;/g, '"')
          : content.snippet.title
              .replace(/&#39;/g, "'")
              .replace(/&quot;/g, '"')
              .slice(0, isMobile ? 45 : 35)
              .concat("...")}
      </p>
    </li>
  );
}
