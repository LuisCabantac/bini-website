"use client";

import React from "react";
import Image from "next/image";
import {
  DotButton,
  useDotButton,
} from "@/app/_components/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/app/_components/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
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
    <div className="embla videos relative">
      <div className="embla__viewport rounded-xl" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index.id}>
              <div className="embla__slide__number">
                <div className="video__container md:h-[13rem] h-[8rem] md:w-[24rem] w-full relative">
                  <a
                    href={`https://www.youtube.com/${
                      section === "playlist"
                        ? `playlist?list=${index.id}`
                        : `watch?v=${index.id.videoId}`
                    }`}
                    target="_blank"
                  >
                    <Image
                      className="embla__slide__img embla__parallax__img object-cover object-top"
                      src={
                        section === "playlist"
                          ? index.snippet.thumbnails.maxres.url
                          : index.snippet.thumbnails.medium.url
                      }
                      alt={
                        section === "playlist"
                          ? index.snippet.title
                          : index.title
                      }
                      fill
                    />
                  </a>
                  <PlayButtonOverlay type="videos" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls ">
        <div className="embla__buttons parallax videos flex justify-between items-center pointer-events-none">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
