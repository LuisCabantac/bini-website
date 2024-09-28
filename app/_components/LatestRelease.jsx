import Image from "next/image";

import { raleway } from "@/app/_lib/fonts";
import {
  latestReleaseCardTextTheme,
  latestReleaseCardTheme,
} from "@/app/_lib/themes";

import HeaderTitle from "@/app/_components/HeaderTitle";
import Button from "@/app/_components/Button";

function LatestRelease() {
  return (
    <section>
      <HeaderTitle type="h1">Latest release</HeaderTitle>
      <div
        className={`${latestReleaseCardTheme} border-1 md:rounded-2xl rounded-xl md:h-[22rem] h-[12rem] grid grid-cols-[1fr_2fr] drop-shadow-md md:w-[100%] m-auto`}
      >
        <div className="relative md:h-[18rem] h-[10rem] md:w-[18rem] w-[10rem] md:mx-8 md:my-8 ml-4 mr-2 my-4">
          <Image
            src={`https://i.scdn.co/image/ab67616d0000b273b89bd876c79f495ab3009444`}
            fill
            alt="Cherry on top album cover"
            className="md:rounded-2xl rounded-xl"
          />
        </div>
        <div className="md:py-8 md:px-8 flex flex-col md:gap-4 gap-2 justify-center items-start">
          <h3
            className={`${raleway.className} ${latestReleaseCardTextTheme.heading} md:text-6xl text-2xl font-bold drop-shadow-md`}
          >
            Cherry On Top
          </h3>
          <p
            className={`${latestReleaseCardTextTheme.paragraph} md:pl-2 pl-1 md:pb-0 pb-1 md:text-base text-xs`}
          >
            Single &#8226; 2024
          </p>
          <Button href="https://orcd.co/bini-cherryontop" path="/" size="small">
            Listen now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LatestRelease;
