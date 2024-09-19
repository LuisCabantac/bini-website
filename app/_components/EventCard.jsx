import {
  eventCardDiv,
  eventCardList,
  eventCardTextStroke,
} from "@/app/_lib/themes";

export default function EventCard({ date, name, loc }) {
  const [month, num] = date.split(" ");

  return (
    <li
      className={`${eventCardList} grid md:grid-cols-[8rem_3fr_2fr] md:grid-rows-1 grid-cols-[6rem_1fr] grid-rows-2 border-1 rounded-xl shadow-sm md:h-[8rem] h-[6rem] event__card`}
    >
      <div
        className={`${eventCardDiv} text-center font-extrabold flex flex-col justify-center row-span-2 rounded-xl md:px-4 md:py-6 px-2 py-4 md:h-[8rem] h-[6rem] event__calendar`}
      >
        <p className="md:text-2xl text-xl">{month}</p>
        <p className="md:text-5xl text-3xl">{num}</p>
      </div>
      <p className="md:pl-8 md:pt-0 pt-6 pl-4 pr-4 flex items-center font-semibold md:text-xl text-[1.05rem] leading-5 md:border-none">
        {name}
      </p>
      <div
        className={`${eventCardTextStroke} flex items-center md:text-sm text-xs pl-4 pr-2 py-2 text-balance md:gap-2 gap-1 leading-3`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="md:size-6 size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <span>{loc}</span>
      </div>
    </li>
  );
}
