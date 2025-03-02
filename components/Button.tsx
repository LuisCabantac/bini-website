import React from "react";

import { raleway } from "@/lib/fonts";

const buttonSize = {
  small: "md:px-6 md:py-3 px-3 py-2 md:text-base text-xs text-[#fffbe6]",
  medium:
    "px-4 py-2 bg-transparent border-2 border-[#245055] text-[#245055] hover:text-[#3a6266] hover:border-[#3a6266]",
  large: "md:px-6 md:py-3 px-8 py-4 text-[#fffbe6]",
};

export default function Button({
  href,
  path,
  size = "large",
  onClick,
  type,
  children,
}: {
  href?: string;
  path?: string;
  size?: "small" | "medium" | "large";
  onClick?: (v?: React.FormEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode | string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${raleway.className} ${
        path === "/"
          ? "bg-[#16415E] hover:bg-[#1e5276]"
          : "bg-[#ffd801] hover:bg-[#f8d300]"
      } ${
        buttonSize[size]
      } inline-block cursor-pointer rounded-full font-bold leading-[1.1] transition-colors md:px-8 md:py-4`}
    >
      <button className="active:outline-none" onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  );
}
