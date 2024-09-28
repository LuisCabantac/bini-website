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
        className={`${cardsBgColor} flex flex-col gap-6 border-1 md:rounded-2xl rounded-xl md:px-8 md:py-8 px-5 py-5`}
      >
        {announcementsData.map((announcement) => (
          <li key={announcement.id}>
            <div className="relative md:h-[30rem] h-[11rem] w-full md:mb-4 mb-2">
              <Image
                src={announcement.img}
                className="object-cover md:rounded-2xl rounded-xl"
                fill
                placeholder="blur"
                alt={announcement.title}
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[#255257] font-bold md:text-4xl text-2xl md:pr-4">
                {announcement.title}
              </h3>
              <div className="md:inline-block hidden">
                <Button size="medium" href={announcement.btnUrl}>
                  {announcement.btnText}
                </Button>
              </div>
            </div>
            <p className="leading-normal md:text-lg mt-2 announcement">
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
