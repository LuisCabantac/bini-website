import carouselData from "@/app/_lib/carousel-data";
import MembersEmblaCarousel from "@/app/_components/MembersEmblaCarousel";
import { raleway } from "@/app/_lib/fonts";
import { membersCarousel } from "@/app/_lib/themes";

const OPTIONS = { loop: true, watchDrag: false };
const SLIDES = carouselData;

function MembersCarousel() {
  return (
    <section className={`${membersCarousel.bg} md:pt-16 pt-7`}>
      <h2
        className={`${raleway.className} ${membersCarousel.text} font-bold md:text-5xl text-3xl md:pb-0 pb-6 md:mt-0 mt-4 flex justify-center items-center`}
      >
        Meet the members
      </h2>
      <div className={`${membersCarousel.bg} md:pt-6 md:pb-[4.5rem] pb-14`}>
        <MembersEmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

export default MembersCarousel;
