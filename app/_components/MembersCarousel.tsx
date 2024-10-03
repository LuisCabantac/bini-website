import carouselData from "@/app/_lib/carousel-data";
import { raleway } from "@/app/_lib/fonts";
import { membersCarousel } from "@/app/_lib/themes";

import MembersEmblaCarousel from "@/app/_components/MembersEmblaCarousel";

const OPTIONS = { loop: true, watchDrag: false };
const SLIDES = carouselData;

function MembersCarousel() {
  return (
    <section
      className={`${membersCarousel.bg} rounded-xl pt-7 md:rounded-2xl md:pt-16`}
    >
      <h2
        className={`${raleway.className} ${membersCarousel.text} mt-4 flex items-center justify-center pb-6 text-3xl font-bold md:mt-0 md:pb-0 md:text-5xl`}
      >
        Meet the members
      </h2>
      <div
        className={`${membersCarousel.bg} rounded-xl pb-14 md:rounded-2xl md:pb-[4.5rem] md:pt-6`}
      >
        <MembersEmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

export default MembersCarousel;
