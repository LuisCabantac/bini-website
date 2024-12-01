"use client";

import { useQuery } from "@tanstack/react-query";

import { getMusicVideos, VideosItemsType } from "@/lib/actions";

import Spinner from "@/components/Spinner";
import HeaderTitle from "@/components/HeaderTitle";
import MusicVideosCarousel from "@/components/MusicVideosCarousel";

const OPTIONS = { loop: true };

export default function MusicVideos() {
  const {
    isLoading,
    error,
    data: musicVideos,
  } = useQuery({
    queryKey: ["music-videos"],
    queryFn: () => getMusicVideos(),
  });

  return (
    <section>
      <HeaderTitle type="h1">Music videos</HeaderTitle>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className="flex items-center justify-center text-xl font-bold md:text-2xl">
          {error.message}
        </p>
      ) : (
        <MusicVideosCarousel slides={musicVideos} options={OPTIONS} />
      )}
    </section>
  );
}
