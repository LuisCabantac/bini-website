import { raleway } from "@/app/_lib/fonts";
import { defaultBtnTheme, homeBtnTheme, buttonSize } from "@/app/_lib/themes";
import React from "react";

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
  size?: string;
  onClick?: (v?: React.FormEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode | string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${raleway.className} ${
        path === "/" ? homeBtnTheme : defaultBtnTheme
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
