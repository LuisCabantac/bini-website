"use client";

import Link from "next/link";
import { useEffect } from "react";

import { navigationTheme, navigationLinksTheme } from "@/app/_lib/themes";
import { useNav } from "@/app/_contexts/NavContext";
import { useMobileWidth } from "@/app/_contexts/MobileContext";
import { usePath } from "@/app/_contexts/PathContext";

import Button from "@/app/_components/Button";
import Socials from "@/app/_components/Socials";
import Newsletter from "./Newsletter";

const routes = ["About", "Music", "Videos", "Events"];

export default function NavLinks() {
  const { isMobileNav, setIsMobileNav, isSticky } = useNav();
  const { isMobile } = useMobileWidth();
  const { pathname } = usePath();

  function handleSetIsMobileNav() {
    setIsMobileNav((nav) => !nav);
  }

  useEffect(() => {
    if (isMobileNav && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNav, isMobile]);

  return (
    <div className="z-10 relative md:bg-transparent">
      <div className="md:hidden flex absolute top-[-0.6rem] right-[-0.3rem] z-30">
        <button onClick={handleSetIsMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-9 transition-transform transform ${
              isMobileNav ? "rotate-90" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={`${
                isMobileNav
                  ? "M6 18 18 6M6 6l12 12"
                  : "M3.75 9h16.5m-16.5 6.75h16.5"
              }`}
            />
          </svg>
        </button>
      </div>

      <div className="gap-12 pt-3 md:flex justify-end grid grid-cols-2 relative">
        <div className="transition-all text-center">
          <ul
            className={`md:flex w-full h-full md:flex-row md:gap-12 gap-8 font-semibold md:items-center right-0 md:static transition-all overflow-y-hidden md:bg-none ${
              isMobileNav
                ? `flex-col fixed md:top-2 top-0 md:pt-0 md:pb-0 pt-[12rem] pb-[3rem] right-0  ${
                    isSticky ? "top-0 pt-[12rem]" : "pt-[12rem]"
                  } flex md:bg-transparent ${
                    pathname === "/" && isMobileNav
                      ? `${navigationTheme.homeIsNav}`
                      : pathname === "/" && isSticky
                      ? `${navigationTheme.homeIsSticky}`
                      : pathname !== "/" && isMobileNav
                      ? `${navigationTheme.defaultIsNav}`
                      : `${navigationTheme.defaultIsSticky}`
                  }`
                : "hidden"
            }`}
          >
            <li className="md:hidden">
              <Link
                href="/"
                onClick={handleSetIsMobileNav}
                className={`transition-colors ${
                  pathname === "/"
                    ? `${navigationLinksTheme.textHome} font-extrabold`
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            {routes.map((route) => {
              return (
                <li key={route}>
                  <Link
                    href={`/${route.toLowerCase()}`}
                    onClick={handleSetIsMobileNav}
                    className={`transition-colors md:bg-transparent ${
                      pathname.startsWith(`/${route.toLowerCase()}`) &&
                      pathname !== "/"
                        ? `${navigationLinksTheme.textDefault} font-extrabold`
                        : pathname === "/"
                        ? `${navigationLinksTheme.textHomeHover}`
                        : `${navigationLinksTheme.textDefaultHover}`
                    }`}
                  >
                    {route}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button
                href="https://fandom.abs-cbn.com/bini"
                size="extraLarge"
                path={pathname}
              >
                Join
              </Button>
            </li>
            <li className="md:hidden absolute bottom-12 flex items-center justify-center w-full">
              <Socials />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
