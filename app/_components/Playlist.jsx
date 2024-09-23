import VideosEmblaCarousel from "@/app/_components/VideosEmblaCarousel";
import VideosHeader from "@/app/_components/VideosHeader";

export default function Playlist({ videos }) {
  const playlist = videos.items.filter(
    (item) => item.snippet.thumbnails.maxres !== undefined
  );

  return (
    <section>
      <VideosHeader href="/videos/all-playlists">Playlists</VideosHeader>
      <VideosEmblaCarousel slides={playlist} section="playlist" />
    </section>
  );
}
