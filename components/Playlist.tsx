"use client";

import { useQuery } from "@tanstack/react-query";

import { getPlaylists } from "@/lib/actions";

import SpinnerMini from "@/components/SpinnerMini";
import VideosEmblaCarousel from "@/components/VideosEmblaCarousel";
import VideosHeader from "@/components/VideosHeader";

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
        <p className="flex items-center justify-center text-xl font-bold md:text-2xl">
          {error.message}
        </p>
      ) : (
        <VideosEmblaCarousel slides={playlist} section="playlistVideoSection" />
      )}
    </section>
  );
}
