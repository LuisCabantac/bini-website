"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

import { MusicDataType } from "@/lib/music-data";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import PlayButtonOverlay from "@/components/PlayButtonOverlay";
import { DotButton, useDotButton } from "@/components/EmblaCarouselDotButton";

type PropType = {
  slides: MusicDataType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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
    <div className="embla music relative mt-4 md:mt-6">
      <div className="embla__viewport rounded-xl md:rounded-2xl" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((content) => (
            <div className="embla__slide" key={content.title}>
              <div className="embla__slide__number">
                <div className="video__container relative h-[8rem] w-[8rem] md:h-[14rem] md:w-[14rem]">
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

              <div className="flex items-center justify-center text-center text-[#224a4e]">
                <div>
                  <p className="text-sm font-semibold md:text-lg">
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
          <div className="embla__buttons parallax videos music pointer-events-none flex items-center justify-between">
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
