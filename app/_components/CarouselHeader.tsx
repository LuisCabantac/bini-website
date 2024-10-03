import carouselData from "@/app/_lib/carousel-data";
import { membersCarousel } from "@/app/_lib/themes";

export default function CarouselHeader({
  currentSlide,
}: {
  currentSlide: number;
}) {
  return (
    <div className="absolute left-[1.8rem] right-0 top-[18rem] drop-shadow-2xl md:left-[9rem] md:top-[13rem]">
      <h3
        className={`${membersCarousel.h3} relative z-10 text-3xl font-semibold md:w-7 md:text-6xl`}
      >
        {carouselData[currentSlide - 1]?.name}
      </h3>
      <p
        className={`${membersCarousel.p} md:absolute" mt-0 font-medium md:ml-1 md:mt-2 md:text-2xl`}
      >
        {carouselData[currentSlide - 1]?.title}
      </p>
    </div>
  );
}
