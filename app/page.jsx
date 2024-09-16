"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

import bg from "@/public/bg.jpg";
import bgMobile from "@/public/bg-mobile.jpg";
import Button from "./_components/Button";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 900);
  }, [setIsMobile]);

  useEffect(
    function () {
      window.addEventListener("resize", handleIsMobile);
      return () => {
        window.removeEventListener("resize", handleIsMobile);
      };
    },
    [handleIsMobile]
  );

  useEffect(() => handleIsMobile(), [handleIsMobile]);

  return (
    <section className="overflow-hidden">
      <Image
        src={isMobile ? bgMobile : bg}
        placeholder="blur"
        fill
        quality={80}
        className="object-cover object-top"
        alt="Cherry On Top album cover"
      />

      <div className="absolute md:bottom-[18%] right-0 md:pr-[6%] bottom-[10%] pr-[10.5%] z-20 translate-x-[-50%]">
        <Button path="/">Listen now</Button>
      </div>
    </section>
  );
}
