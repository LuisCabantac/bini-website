import { singlesData } from "@/lib/music-data";

import HeaderTitle from "@/components/HeaderTitle";
import MusicEmblaCarousel from "@/components/MusicEmblaCarousel";

export default function Singles() {
  return (
    <section>
      <HeaderTitle type="h2">Singles</HeaderTitle>
      <MusicEmblaCarousel slides={singlesData} />
    </section>
  );
}
