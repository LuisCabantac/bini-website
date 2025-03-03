import Image from "next/image";

import { raleway } from "@/lib/fonts";

import HeaderTitle from "@/components/HeaderTitle";
import Button from "@/components/Button";

function LatestRelease() {
  return (
    <section>
      <HeaderTitle type="h1">Latest release</HeaderTitle>
      <div className="m-auto grid h-[11rem] grid-cols-[1fr_2fr] gap-2 rounded-xl border border-[#8bd9e1] bg-[#cdeff2] drop-shadow-md md:h-[20rem] md:w-[100%] md:rounded-2xl">
        <div className="relative my-4 ml-4 mr-2 h-[9rem] w-[9rem] md:mx-8 md:my-8 md:h-[16rem] md:w-[16rem]">
          <Image
            src="https://i.scdn.co/image/ab67616d0000b273c350e2d08a3ea63be712938c"
            fill
            alt="Blink twice cover"
            className="rounded-xl md:rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 md:gap-4 md:px-8 md:py-8">
          <h3
            className={`${raleway.className} text-2xl font-bold text-[#10A4C2] drop-shadow-md md:text-6xl`}
          >
            Blink Twice
          </h3>
          <p className="pb-1 pl-1 text-xs text-[#40b6ce] md:pb-0 md:pl-2 md:text-base">
            Single &#8226; 2025
          </p>
          <Button href="https://orcd.co/bini_blinktwice" path="/" size="small">
            Listen now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LatestRelease;
