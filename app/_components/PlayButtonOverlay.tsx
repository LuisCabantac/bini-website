import { playBtnTheme } from "@/app/_lib/themes";

export default function PlayButtonOverlay({ type }: { type: string }) {
  return (
    <div className="play__icon pointer-events-none absolute flex h-full w-full items-center justify-center opacity-0 transition-opacity">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${
          type === "videos"
            ? "size-10 p-3 md:size-[4rem] md:p-5"
            : "size-14 p-4 md:size-20 md:p-6"
        } ${playBtnTheme} rounded-full`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
    </div>
  );
}
