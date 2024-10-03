import { announcementsData } from "@/app/_lib/events-data";

import Image from "next/image";

import { cardsBgColor } from "@/app/_lib/themes";

import HeaderTitle from "@/app/_components/HeaderTitle";
import Button from "@/app/_components/Button";

export default function Events() {
  return (
    <section>
      <HeaderTitle type="h1">Announcements</HeaderTitle>
      <ul
        className={`${cardsBgColor} border-1 flex flex-col gap-6 rounded-xl px-5 py-5 md:rounded-2xl md:px-8 md:py-8`}
      >
        {announcementsData.map((announcement) => (
          <li key={announcement.id}>
            <div className="relative mb-2 h-[11rem] w-full md:mb-4 md:h-[30rem]">
              <Image
                src={announcement.img}
                className="rounded-xl object-cover md:rounded-2xl"
                fill
                placeholder="blur"
                alt={announcement.title}
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#255257] md:pr-4 md:text-4xl">
                {announcement.title}
              </h3>
              <div className="hidden md:inline-block">
                <Button size="medium" href={announcement.btnUrl}>
                  {announcement.btnText}
                </Button>
              </div>
            </div>
            <p className="announcement mt-2 leading-normal md:text-lg">
              {announcement.description}
            </p>
            <div className="flex justify-end md:hidden">
              <Button size="medium" href={announcement.btnUrl}>
                {announcement.btnText}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
