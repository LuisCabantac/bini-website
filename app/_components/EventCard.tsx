import {
  eventCardDiv,
  eventCardList,
  eventCardTextStroke,
} from "@/app/_lib/themes";
import { EventsDataType } from "@/app/_lib/events-data";

export default function EventCard({ date, name, loc }: EventsDataType) {
  const [month, num] = date.split(" ");

  return (
    <li
      className={`${eventCardList} border-1 event__card grid h-[6rem] grid-cols-[6rem_1fr] grid-rows-2 rounded-xl shadow-sm md:h-[8rem] md:grid-cols-[8rem_3fr_2fr] md:grid-rows-1 md:rounded-2xl`}
    >
      <div
        className={`${eventCardDiv} event__calendar row-span-2 flex h-[6rem] flex-col justify-center rounded-xl px-2 py-4 text-center font-extrabold md:h-[8rem] md:rounded-2xl md:px-4 md:py-6`}
      >
        <p className="text-xl md:text-2xl">{month}</p>
        <p className="text-3xl md:text-5xl">{num}</p>
      </div>
      <p className="flex items-center pl-4 pr-4 pt-6 text-[1.05rem] font-semibold leading-5 md:border-none md:pl-8 md:pt-0 md:text-xl">
        {name}
      </p>
      <div
        className={`${eventCardTextStroke} flex items-center gap-1 text-balance py-2 pl-4 pr-2 text-xs leading-3 md:gap-2 md:text-sm`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 md:size-6"
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
