"use client";

import { usePath } from "@/contexts/PathContext";

import Newsletter from "@/components/Newsletter";
import Socials from "@/components/Socials";

export default function Footer() {
  const { pathname } = usePath();

  return (
    <footer
      className={`grid bg-[#8bd9e1] px-5 py-8 text-sm text-[#35787f] md:grid-cols-[2fr_1fr] md:px-12 md:text-base ${
        pathname === "/" ? "hidden" : "block"
      }`}
    >
      <Socials path="footer" />

      <Newsletter />
      <p className="mt-4 text-xs md:mt-0 md:text-inherit">
        &copy; ABS-CBN Corporation. Designed by{" "}
        <span className="font-semibold">
          <a
            href="https://github.com/LuisCabantac/"
            target="_blank"
            className="underline"
          >
            Luis Cabantac
          </a>
        </span>
      </p>
    </footer>
  );
}
