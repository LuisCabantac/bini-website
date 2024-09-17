"use client";

import { usePathname } from "next/navigation";
import Newsletter from "@/app/_components/Newsletter";
import Socials from "@/app/_components/Socials";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`md:px-10 py-8 px-5 md:text-base text-sm grid md:grid-cols-[2fr_1fr] text-[#35787f] ${
        pathname === "/" ? "hidden" : "block"
      } bg-[#8bd9e1]`}
    >
      <Socials path="footer" />

      <Newsletter />
      <p className="md:text-inherit md:mt-0 mt-4 text-xs">
        &copy; ABS-CBN Corporation. Designed by{" "}
        <span className="font-semibold">
          <a href="https://github.com/LuisCabantac/" target="_blank">
            Luis Cabantac
          </a>
        </span>
      </p>
    </footer>
  );
}
