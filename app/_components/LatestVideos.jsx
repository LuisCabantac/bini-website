import VideosEmblaCarousel from "@/app/_components/VideosEmblaCarousel";
import VideosHeader from "@/app/_components/VideosHeader";

export default function LatestVideos({ videos }) {
  return (
    <section>
      <VideosHeader href="https://www.youtube.com/@BINIPH/videos">
        Latest videos
      </VideosHeader>
      <VideosEmblaCarousel slides={videos.items} section="latest-videos" />
    </section>
  );
}
