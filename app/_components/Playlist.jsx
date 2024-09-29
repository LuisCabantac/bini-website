"use client";

import { useQuery } from "@tanstack/react-query";

import { getPlaylists } from "@/app/_lib/actions";

import SpinnerMini from "@/app/_components/SpinnerMini";
import VideosEmblaCarousel from "@/app/_components/VideosEmblaCarousel";
import VideosHeader from "@/app/_components/VideosHeader";

export default function Playlist() {
  const {
    isLoading,
    error,
    data: playlist,
  } = useQuery({
    queryKey: ["playlists"],
    queryFn: () => getPlaylists(6),
  });

  return (
    <section>
      <VideosHeader href="/videos/all-playlists">Playlists</VideosHeader>
      {isLoading ? (
        <SpinnerMini />
      ) : error ? (
        <p className="flex justify-center items-center font-bold md:text-2xl text-xl">
          {error.message}
        </p>
      ) : (
        <VideosEmblaCarousel slides={playlist} section="playlist" />
      )}
    </section>
  );
}
