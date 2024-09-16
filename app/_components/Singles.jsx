import { singlesData } from "@/app/_lib/music-data";
import HeaderTitle from "@/app/_components/HeaderTitle";
import MusicEmblaCarousel from "@/app/_components/MusicEmblaCarousel";

export default function Singles() {
  return (
    <section>
      <HeaderTitle type="h2">Singles</HeaderTitle>
      <MusicEmblaCarousel slides={singlesData} />
    </section>
  );
}
