import HeaderTitle from "@/app/_components/HeaderTitle";
import MusicVideosCarousel from "@/app/_components/MusicVideosCarousel";

const OPTIONS = { loop: true };

export default function MusicVideos({ musicVideos }) {
  return (
    <section>
      <HeaderTitle type="h1">Music videos</HeaderTitle>
      <MusicVideosCarousel slides={musicVideos.items} options={OPTIONS} />
    </section>
  );
}
