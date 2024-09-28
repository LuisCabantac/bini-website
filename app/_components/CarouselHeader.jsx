import carouselData from "@/app/_lib/carousel-data";
import { membersCarousel } from "@/app/_lib/themes";

export default function CarouselHeader({ currentSlide }) {
  return (
    <div className="absolute md:top-[13rem] md:left-[9rem] top-[18rem] left-[1.8rem] right-0 drop-shadow-2xl">
      <h3
        className={`${membersCarousel.h3} font-semibold md:text-6xl text-3xl md:w-7 z-10 relative`}
      >
        {carouselData[currentSlide - 1]?.name}
      </h3>
      <p
        className={`${membersCarousel.p} md:text-2xl md:mt-2 mt-0 md:ml-1 font-medium md:absolute"`}
      >
        {carouselData[currentSlide - 1]?.title}
      </p>
    </div>
  );
}
