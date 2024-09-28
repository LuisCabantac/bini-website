import carouselData from "@/app/_lib/carousel-data";
import { raleway } from "@/app/_lib/fonts";
import { membersCarousel } from "@/app/_lib/themes";

import MembersEmblaCarousel from "@/app/_components/MembersEmblaCarousel";

const OPTIONS = { loop: true, watchDrag: false };
const SLIDES = carouselData;

function MembersCarousel() {
  return (
    <section
      className={`${membersCarousel.bg} md:pt-16 pt-7 md:rounded-2xl rounded-xl`}
    >
      <h2
        className={`${raleway.className} ${membersCarousel.text} font-bold md:text-5xl text-3xl md:pb-0 pb-6 md:mt-0 mt-4 flex justify-center items-center`}
      >
        Meet the members
      </h2>
      <div
        className={`${membersCarousel.bg} md:pt-6 md:pb-[4.5rem] pb-14 md:rounded-2xl rounded-xl`}
      >
        <MembersEmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

export default MembersCarousel;
