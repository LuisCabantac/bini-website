import carouselData from "@/lib/carousel-data";
import { raleway } from "@/lib/fonts";

import MembersEmblaCarousel from "@/components/MembersEmblaCarousel";

const OPTIONS = { loop: true, watchDrag: false };
const SLIDES = carouselData;

function MembersCarousel() {
  return (
    <section className="rounded-xl bg-[#245055] pt-7 md:rounded-2xl md:pt-16">
      <h2
        className={`${raleway.className} mt-4 flex items-center justify-center pb-6 text-3xl font-bold text-[#cdeff2] md:mt-0 md:pb-0 md:text-5xl`}
      >
        Meet the members
      </h2>
      <div className="rounded-xl bg-[#245055] pb-14 md:rounded-2xl md:pb-[4.5rem] md:pt-6">
        <MembersEmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

export default MembersCarousel;
