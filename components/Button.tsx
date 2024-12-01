import React from "react";

import { raleway } from "@/lib/fonts";

const buttonSize = {
  small: "md:px-6 md:py-3 px-3 py-2 md:text-base text-xs text-[#fffbe6]",
  medium:
    "md:px-6 md:py-3 px-4 py-2 bg-transparent border-2 border-[#245055] text-[#245055] hover:text-[#3a6266] hover:border-[#3a6266]",
  large: "px-6 py-3 md:text-lg text-base text-[#fffbe6]",
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
          ? "bg-[#f03e3e] hover:bg-[#e03131]"
          : "bg-[#ffd801] hover:bg-[#f8d300]"
      } ${
        buttonSize[size]
      } inline-block cursor-pointer rounded-full font-extrabold leading-[1.1] transition-colors`}
    >
      <button className="active:outline-none" onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  );
}
