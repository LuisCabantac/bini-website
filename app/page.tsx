"use client";

import Image from "next/image";

import bg from "@/public/bg.jpg";
import bgMobile from "@/public/bg-mobile.jpg";
import { useMobileWidth } from "@/contexts/MobileContext";

import Button from "@/components/Button";

export default function Page() {
  const { isMobile } = useMobileWidth();

  return (
    <section>
      <Image
        src={isMobile ? bgMobile : bg}
        placeholder="blur"
        fill
        quality={100}
        className="block object-cover"
        alt="Cherry On Top album cover"
      />

      <div className="absolute bottom-[10%] left-[50%] translate-x-[-50%] translate-y-0 md:bottom-[18%] md:right-[29%] md:translate-x-[100%]">
        <Button path="/" href="https://orcd.co/bini-cherryontop">
          Listen now
        </Button>
      </div>
    </section>
  );
}
