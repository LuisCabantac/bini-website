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
    <li className="w-full">
      <div className="video__container relative h-[12.5rem] md:h-[15rem]">
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
        } w-full overflow-hidden text-ellipsis pt-1 text-sm font-semibold md:whitespace-nowrap md:text-lg`}
      >
        {section === "playlist"
          ? content.snippet.title.replace(/&#39;/g, "'").replace(/&quot;/g, '"')
          : content.snippet.title
              .replace(/&#39;/g, "'")
              .replace(/&quot;/g, '"')}
      </p>
    </li>
  );
}
