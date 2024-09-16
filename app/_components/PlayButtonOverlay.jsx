export default function PlayButtonOverlay({ type }) {
  return (
    <div className="absolute flex justify-center items-center h-full w-full play__icon opacity-0 pointer-events-none transition-opacity">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${
          type === "videos"
            ? "md:size-[4rem] size-10 md:p-5 p-3"
            : "md:size-20 size-14 md:p-6 p-4"
        } bg-[#ffd801] fill-[#fffbe6] stroke-[#fffbe6] rounded-full`}
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
