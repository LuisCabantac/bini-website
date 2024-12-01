import Image from "next/image";

import { raleway } from "@/lib/fonts";

import HeaderTitle from "@/components/HeaderTitle";
import Button from "@/components/Button";

function LatestRelease() {
  return (
    <section>
      <HeaderTitle type="h1">Latest release</HeaderTitle>
      <div className="border-1 m-auto grid h-[12rem] grid-cols-[1fr_2fr] rounded-xl border-[#8bd9e1] bg-[#cdeff2] drop-shadow-md md:h-[22rem] md:w-[100%] md:rounded-2xl">
        <div className="relative my-4 ml-4 mr-2 h-[10rem] w-[10rem] md:mx-8 md:my-8 md:h-[18rem] md:w-[18rem]">
          <Image
            src={`https://i.scdn.co/image/ab67616d0000b273b89bd876c79f495ab3009444`}
            fill
            alt="Cherry on top album cover"
            className="rounded-xl md:rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 md:gap-4 md:px-8 md:py-8">
          <h3
            className={`${raleway.className} text-2xl font-bold text-red-600 drop-shadow-md md:text-6xl`}
          >
            Cherry On Top
          </h3>
          <p className="pb-1 pl-1 text-xs text-[#f57878] md:pb-0 md:pl-2 md:text-base">
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
