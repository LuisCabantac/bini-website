"use client";

import { useQuery } from "@tanstack/react-query";

import { getVideos } from "@/lib/actions";

import SpinnerMini from "@/components/SpinnerMini";
import VideosEmblaCarousel from "@/components/VideosEmblaCarousel";
import VideosHeader from "@/components/VideosHeader";

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
        <SpinnerMini />
      ) : error ? (
        <p className="flex items-center justify-center text-xl font-bold md:text-2xl">
          {error.message}
        </p>
      ) : (
        <VideosEmblaCarousel slides={videos} section="latest-videos" />
      )}
    </section>
  );
}
