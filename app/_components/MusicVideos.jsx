"use client";

import { useQuery } from "@tanstack/react-query";

import { getMusicVideos } from "@/app/_lib/actions";

import Spinner from "@/app/_components/Spinner";
import HeaderTitle from "@/app/_components/HeaderTitle";
import MusicVideosCarousel from "@/app/_components/MusicVideosCarousel";

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
        <p className="flex justify-center items-center font-bold md:text-2xl text-xl">
          {error.message}
        </p>
      ) : (
        <MusicVideosCarousel slides={musicVideos} options={OPTIONS} />
      )}
    </section>
  );
}
