"use client";

import Link from "next/link";
import Button from "@/app/_components/Button";
import Socials from "@/app/_components/Socials";
import { useNav } from "@/app/contexts/NavContext";

const routes = ["About", "Music", "Videos", "Events"];

export default function NavLinks() {
  const { isMobileNav, setIsMobileNav, isSticky, pathname } = useNav();

  function handleSetIsMobileNav() {
    setIsMobileNav((nav) => !nav);
  }

  const path = pathname === "/" ? "/" : "";

  return (
    <div className="z-10 relative md:bg-transparent">
      <div className="md:hidden flex absolute top-[-0.6rem] right-[-0.3rem] z-30">
        <button onClick={handleSetIsMobileNav}>
          {isMobileNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 -rotate-90 transition-all ease-in"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 transition-all ease-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
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
                    pathname === "/" ? "bg-[#c92a2a]/90" : "bg-[#59c8d4]/90"
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
                      pathname === `/${route.toLowerCase()}` && pathname !== "/"
                        ? "text-[#ffdc1a] hover:text-[#ffe034] font-extrabold"
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
              <Button href="/" path={path}>
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
