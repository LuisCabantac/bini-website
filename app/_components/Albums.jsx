import { albumsData } from "@/app/_lib/music-data";

import HeaderTitle from "@/app/_components/HeaderTitle";
import MusicEmblaCarousel from "@/app/_components/MusicEmblaCarousel";

export default function Singles() {
  return (
    <section>
      <HeaderTitle type="h2">Albums</HeaderTitle>
      <MusicEmblaCarousel slides={albumsData} />
    </section>
  );
}
