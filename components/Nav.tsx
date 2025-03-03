"use client";

import { raleway } from "@/lib/fonts";
import { useNav } from "@/contexts/NavContext";
import { usePath } from "@/contexts/PathContext";

import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";

export default function Nav() {
  const { isSticky, isMobileNav } = useNav();
  const { pathname } = usePath();

  const navTheme =
    pathname === "/" && !isSticky
      ? "bg-gradient-to-b from-[#16415e1b] to-[#16415e00]"
      : pathname === "/" && isSticky
        ? "bg-[#16415E]/90"
        : (pathname !== "/" && isSticky && window.innerWidth >= 900) ||
            (pathname !== "/" &&
              isSticky &&
              !isMobileNav &&
              window.innerWidth <= 900)
          ? "bg-[#59c8d4]/90"
          : "bg-gradient-to-b from-[rgba(62,140,148,0.6)] to-[rgba(89, 200, 212, 0.055)]";

  return (
    <nav
      className={`${raleway.className} sticky top-0 flex items-center justify-between px-5 pb-4 pt-4 text-2xl text-[#fdffff] md:grid md:grid-cols-[1fr_1fr] md:px-12 md:pb-3 md:pt-0 md:text-lg ${navTheme} z-10 overflow-hidden font-semibold leading-[1.1]`}
    >
      <Logo />
      <NavLinks />
    </nav>
  );
}
