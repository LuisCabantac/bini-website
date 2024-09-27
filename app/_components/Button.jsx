import { raleway } from "@/app/_lib/fonts";
import { defaultBtnTheme, homeBtnTheme, buttonSize } from "@/app/_lib/themes";

export default function Button({
  href,
  path,
  size = "large",
  onClick,
  type,
  children,
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${raleway.className} ${
        path === "/" ? homeBtnTheme : defaultBtnTheme
      } ${
        buttonSize[size]
      } transition-colors rounded-full font-extrabold cursor-pointer inline-block leading-[1.1]`}
    >
      <button className="active:outline-none" onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  );
}
