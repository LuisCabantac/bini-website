import carouselData from "@/lib/carousel-data";

export default function CarouselHeader({
  currentSlide,
}: {
  currentSlide: number;
}) {
  return (
    <div className="absolute left-[1.8rem] right-0 top-[18rem] drop-shadow-2xl md:left-[4rem] md:top-[13rem]">
      <h3 className="relative z-10 text-3xl font-semibold text-[#eefafb] md:w-7 md:text-6xl">
        {carouselData[currentSlide - 1]?.name}
      </h3>
      <p className="mt-0 font-medium text-[#ffe44d] md:absolute md:ml-1 md:mt-2 md:text-2xl">
        {carouselData[currentSlide - 1]?.title}
      </p>
    </div>
  );
}
