"use client";

import { usePathname } from "next/navigation";
import Newsletter from "@/app/_components/Newsletter";
import Socials from "@/app/_components/Socials";
import { footerTheme } from "@/app/_lib/themes";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`${footerTheme} md:px-10 py-8 px-5 md:text-base text-sm grid md:grid-cols-[2fr_1fr] ${
        pathname === "/" ? "hidden" : "block"
      }`}
    >
      <Socials path="footer" />

      <Newsletter />
      <p className="md:text-inherit md:mt-0 mt-4 text-xs">
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
