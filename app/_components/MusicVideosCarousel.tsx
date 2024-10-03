"use client";
import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";

import { VideosItemsType } from "@/app/_lib/actions";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/app/_components/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "@/app/_components/EmblaCarouselDotButton";
import PlayButtonOverlay from "@/app/_components/PlayButtonOverlay";

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
  slides: VideosItemsType[];
  options?: EmblaOptionsType;
};

const MusicVideosCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax, setTweenFactor, setTweenNodes]);

  return (
    <div className="embla parallax relative">
      <div className="embla__viewport parallax" ref={emblaRef}>
        <div className="embla__container rounded-xl md:rounded-2xl">
          {slides.map((content) => (
            <div className="embla__slide" key={content.snippet.title}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer video__container relative">
                  <a
                    href={`https://www.youtube.com/watch?v=${content.snippet.resourceId.videoId}`}
                    target="_blank"
                  >
                    <Image
                      className="embla__slide__img embla__parallax__img object-cover object-top"
                      src={content.snippet.thumbnails.maxres.url}
                      alt={content.snippet.title}
                      width={content.snippet.thumbnails.maxres.width}
                      height={content.snippet.thumbnails.maxres.height}
                    />
                  </a>
                  <PlayButtonOverlay type="music-videos" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons parallax pointer-events-none flex justify-between">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default MusicVideosCarousel;
