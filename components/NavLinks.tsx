"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useNav } from "@/contexts/NavContext";
import { useMobileWidth } from "@/contexts/MobileContext";
import { usePath } from "@/contexts/PathContext";

import Button from "@/components/Button";
import Socials from "@/components/Socials";

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
    <div className="relative z-10 md:bg-transparent">
      <div className="absolute right-[-0.3rem] top-[-0.6rem] z-30 flex md:hidden">
        <button onClick={handleSetIsMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-9 transform transition-transform ${
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

      <div className="relative grid grid-cols-2 justify-end gap-12 pt-3 md:flex">
        <div className="text-center transition-all">
          <ul
            className={`right-0 h-full w-full gap-8 overflow-y-hidden font-semibold transition-all md:static md:flex md:flex-row md:items-center md:gap-12 md:bg-none ${
              isMobileNav
                ? `fixed right-0 top-0 flex-col pb-[3rem] pt-[12rem] md:top-2 md:pb-0 md:pt-0 ${
                    isSticky ? "top-0 pt-[12rem]" : "pt-[12rem]"
                  } flex md:bg-transparent ${
                    pathname === "/" && isMobileNav
                      ? "bg-gradient-to-tr from-[#10A4C2] to-[#10A4C2]"
                      : pathname === "/" && isSticky
                        ? "bg-[#16415E]/90"
                        : pathname !== "/" && isMobileNav
                          ? "bg-gradient-to-tr from-[#59c8d4] to-[#6aced8]"
                          : "bg-[#59c8d4]/90"
                  }`
                : "hidden"
            }`}
          >
            <li className="md:hidden">
              <Link
                href="/"
                onClick={handleSetIsMobileNav}
                className={`transition-colors ${
                  pathname === "/" ? "font-bold text-[#ffdc1a]" : ""
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
                        ? "font-bold text-[#ffdc1a] hover:text-[#ffe034]"
                        : pathname === "/"
                          ? "hover:text-[#ffe3e3]"
                          : "hover:text-[#eefafb]"
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
                size="large"
                path={pathname}
              >
                Join
              </Button>
            </li>
            <li className="absolute bottom-12 flex w-full items-center justify-center md:hidden">
              <Socials />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
