"use client";

import { useQuery } from "@tanstack/react-query";

import { getVideos } from "@/app/_lib/actions";

import Spinner from "@/app/_components/Spinner";
import VideosEmblaCarousel from "@/app/_components/VideosEmblaCarousel";
import VideosHeader from "@/app/_components/VideosHeader";

export default function LatestVideos() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["latest-videos"],
    queryFn: () => getVideos("date", "", 6, "all-videos"),
  });

  return (
    <section>
      <VideosHeader href="/videos/all-videos">Latest videos</VideosHeader>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className="flex justify-center items-center font-bold md:text-2xl text-xl">
          {error.message}
        </p>
      ) : (
        <VideosEmblaCarousel slides={videos} section="latest-videos" />
      )}
    </section>
  );
}
