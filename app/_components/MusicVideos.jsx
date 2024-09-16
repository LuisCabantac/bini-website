import MusicVideosCarousel from "@/app/_components/MusicVideosCarousel";
import HeaderTitle from "./HeaderTitle";

const OPTIONS = { loop: true };

export default function MusicVideos({ musicVideos }) {
  return (
    <section>
      <HeaderTitle type="h1">Music videos</HeaderTitle>
      <MusicVideosCarousel slides={musicVideos.items} options={OPTIONS} />
    </section>
  );
}
