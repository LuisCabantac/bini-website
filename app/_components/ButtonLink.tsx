import Link from "next/link";

import { raleway } from "@/app/_lib/fonts";
import React from "react";

export default function ButtonLink({
  btnTheme,
  href,
  children,
}: {
  btnTheme: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${raleway.className} text-sm md:text-base ${btnTheme} inline-block cursor-pointer rounded-full font-extrabold leading-[1.1] transition-colors hover:bg-[#f8d300]`}
    >
      {children}
    </Link>
  );
}
