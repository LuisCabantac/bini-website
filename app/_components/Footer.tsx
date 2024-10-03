"use client";

import { footerTheme } from "@/app/_lib/themes";
import { usePath } from "@/app/_contexts/PathContext";

import Newsletter from "@/app/_components/Newsletter";
import Socials from "@/app/_components/Socials";

export default function Footer() {
  const { pathname } = usePath();

  return (
    <footer
      className={`${footerTheme} grid px-5 py-8 text-sm md:grid-cols-[2fr_1fr] md:px-10 md:text-base ${
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
