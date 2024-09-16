import carouselData from "@/app/_lib/carousel-data";
import MembersEmblaCarousel from "@/app/_components/MembersEmblaCarousel";
import { raleway } from "@/app/_lib/fonts";

const OPTIONS = { loop: true, watchDrag: false };
const SLIDES = carouselData;

function MembersCarousel() {
  return (
    <section className="bg-[#12282a] md:pt-16 pt-7">
      <h2
        className={`${raleway.className} text-[#ace4ea] font-bold md:text-5xl text-3xl md:pb-0 pb-6 md:mt-0 mt-4 flex justify-center items-center`}
      >
        Meet the members
      </h2>
      <div className="md:pt-6 bg-[#12282a] md:pb-[4.5rem] pb-14">
        <MembersEmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

export default MembersCarousel;
