"use client";

import { useEffect, useCallback } from "react";
import { raleway } from "@/app/_lib/fonts";

import Logo from "@/app/_components/Logo";
import NavLinks from "@/app/_components/NavLinks";
import { useNav } from "@/app/contexts/NavContext";
import { navigationTheme } from "@/app/_lib/themes";

export default function Nav() {
  const { isSticky, setIsSticky, isMobileNav, pathname } = useNav();

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

  const handleSetIsSticky = useCallback(() => {
    if (window.scrollY >= 40) {
      setIsSticky(true);
    } else setIsSticky(false);
  }, [setIsSticky]);

  useEffect(
    function () {
      window.addEventListener("scroll", handleSetIsSticky);

      return () => window.addEventListener("scroll", handleSetIsSticky);
    },
    [handleSetIsSticky]
  );

  return (
    <nav
      className={`${raleway.className} ${navigationTheme.text} sticky top-0 md:grid md:grid-cols-[1fr_1fr] flex justify-between items-center md:px-10 md:pb-3 md:pt-0 px-5 pb-4 pt-4 md:text-lg text-xl ${navTheme} z-10 leading-[1.1] font-bold overflow-hidden`}
    >
      <Logo />
      <NavLinks />
    </nav>
  );
}
