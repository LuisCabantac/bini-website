import { raleway } from "@/app/_lib/fonts";

const buttonSize = {
  small: "md:px-6 md:py-3 px-3 py-2 md:text-base text-xs text-[#fffbe6]",
  medium:
    "md:px-6 md:py-3 px-4 py-2 md:text-base text-sm bg-transparent border-2 border-[#1b3c40] text-[#1b3c40]",
  large:
    "md:px-8 md:py-4 px-6 py-[0.95rem] py-[1.20rem] md:text-lg text-base text-[#fffbe6]",
};

export default function Button({
  href,
  path,
  size = "large",
  onClick,
  type,
  children,
}) {
  const theme =
    path === "/"
      ? "hover:bg-[#e03131] bg-[#f03e3e]"
      : "hover:bg-[#f8d300] bg-[#ffd801]";

  return (
    <a
      href={href}
      target="_blank"
      className={`${raleway.className} ${theme} ${buttonSize[size]} transition-colors rounded-full  font-extrabold cursor-pointer inline-block leading-[1.1]`}
    >
      <button className="active:outline-none" onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  );
}
