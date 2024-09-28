"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import {
  DotButton,
  useDotButton,
} from "@/app/_components/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/app/_components/EmblaCarouselArrowButtons";
import PlayButtonOverlay from "@/app/_components/PlayButtonOverlay";

const EmblaCarousel = (props) => {
  const { slides, options, section } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla music relative md:mt-6 mt-4">
      <div className="embla__viewport md:rounded-2xl rounded-xl" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((content) => (
            <div className="embla__slide" key={content.id}>
              <div className="embla__slide__number">
                <div className="video__container md:h-[14rem] h-[8rem] md:w-[14rem] w-[8rem] relative">
                  <a href={content.url} target="_blank">
                    <Image
                      className="embla__slide__img object-cover object-center"
                      src={content.imgUrl}
                      alt={content.title}
                      fill
                    />
                  </a>
                  <PlayButtonOverlay type="videos" />
                </div>
              </div>

              <div className="flex justify-center items-center text-center text-[#224a4e]">
                <div>
                  <p className="font-semibold md:text-lg text-sm">
                    {content.title}
                  </p>
                  <p className="text-xs">{content.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {slides.length > 4 && (
        <div className="embla__controls">
          <div className="embla__buttons parallax videos music flex justify-between items-center pointer-events-none">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
