"use client";

import Link from "next/link";
import Button from "@/app/_components/Button";
import Socials from "@/app/_components/Socials";
import { useNav } from "@/app/contexts/NavContext";
import { navigationTheme, navigationLinksTheme } from "@/app/_lib/themes";

const routes = ["About", "Music", "Videos", "Events"];

export default function NavLinks() {
  const { isMobileNav, setIsMobileNav, isSticky, pathname } = useNav();

  function handleSetIsMobileNav() {
    setIsMobileNav((nav) => !nav);
  }

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
            className="size-8"
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
            className={`md:flex w-[100%] md:flex-row md:gap-12 gap-6 font-semibold md:items-center right-0 md:static ${
              isMobileNav
                ? `flex-col fixed md:top-2 top-0 md:pt-0 md:pr-0 md:pl-0 pl-4 md:pb-0 right-0 pr-5 pt-[5rem] pb-[3rem] ${
                    isSticky ? "top-0 pt-[5.2rem]" : "pt-[5.2rem]"
                  } flex md:bg-transparent ${
                    pathname === "/"
                      ? `${navigationTheme.homeIsSticky}`
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
                  pathname === "/" ? "text-[#f4d4d4] font-extrabold" : ""
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
              <Button href="https://fandom.abs-cbn.com/bini" path={pathname}>
                Join
              </Button>
            </li>
            <li className="md:hidden flex justify-center">
              <Socials />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
