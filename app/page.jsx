"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

import bg from "@/public/bg.jpg";
import bgMobile from "@/public/bg-mobile.jpg";
import Button from "@/app/_components/Button";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 900);
  }, [setIsMobile]);

  useEffect(
    function () {
      window.addEventListener("resize", handleIsMobile);
      handleIsMobile();

      return () => {
        window.removeEventListener("resize", handleIsMobile);
      };
    },
    [handleIsMobile]
  );

  return (
    <section>
      <Image
        src={isMobile ? bgMobile : bg}
        placeholder="blur"
        fill
        quality={100}
        className="object-cover block"
        alt="Cherry On Top album cover"
      />

      <div className="absolute md:bottom-[18%] right-0 md:pr-[6%] bottom-[10%] pr-[11%] z-20 translate-x-[-50%]">
        <Button path="/" href="https://orcd.co/bini-cherryontop">
          Listen now
        </Button>
      </div>
    </section>
  );
}
