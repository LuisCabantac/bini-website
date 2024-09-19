import VideosEmblaCarousel from "@/app/_components/VideosEmblaCarousel";
import VideosHeader from "@/app/_components/VideosHeader";

export default function LatestVideos({ videos }) {
  return (
    <section>
      <VideosHeader href="/videos/all-videos">Latest videos</VideosHeader>
      <VideosEmblaCarousel slides={videos.items} section="latest-videos" />
    </section>
  );
}
