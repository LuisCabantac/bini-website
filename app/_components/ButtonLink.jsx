import Link from "next/link";

import { raleway } from "@/app/_lib/fonts";

export default function ButtonLink({ btnTheme, href, children }) {
  return (
    <Link
      href={href}
      className={`${raleway.className} md:text-base text-sm ${btnTheme} hover:bg-[#f8d300] transition-colors rounded-full font-extrabold cursor-pointer inline-block leading-[1.1]`}
    >
      {children}
    </Link>
  );
}
