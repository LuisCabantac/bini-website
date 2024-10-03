"use client";

import { raleway } from "@/app/_lib/fonts";
import { navigationTheme } from "@/app/_lib/themes";
import { useNav } from "@/app/_contexts/NavContext";
import { usePath } from "@/app/_contexts/PathContext";

import Logo from "@/app/_components/Logo";
import NavLinks from "@/app/_components/NavLinks";

export default function Nav() {
  const { isSticky, isMobileNav } = useNav();
  const { pathname } = usePath();

  const navTheme =
    pathname === "/" && !isSticky
      ? navigationTheme.homeNotSticky
      : pathname === "/" && isSticky
        ? navigationTheme.homeIsSticky
        : (pathname !== "/" && isSticky && window.innerWidth >= 900) ||
            (pathname !== "/" &&
              isSticky &&
              !isMobileNav &&
              window.innerWidth <= 900)
          ? navigationTheme.defaultIsSticky
          : navigationTheme.defaultNotSticky;

  return (
    <nav
      className={`${raleway.className} ${navigationTheme.text} sticky top-0 flex items-center justify-between px-5 pb-4 pt-4 text-2xl md:grid md:grid-cols-[1fr_1fr] md:px-10 md:pb-3 md:pt-0 md:text-lg ${navTheme} z-10 overflow-hidden font-bold leading-[1.1]`}
    >
      <Logo />
      <NavLinks />
    </nav>
  );
}
