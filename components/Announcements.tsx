import Image from "next/image";

import { announcementsData } from "@/lib/events-data";

import HeaderTitle from "@/components/HeaderTitle";
import Button from "@/components/Button";

export default function Events() {
  return (
    <section>
      <HeaderTitle type="h1">Announcements</HeaderTitle>
      <ul className="border-1 flex flex-col gap-6 rounded-xl bg-[#cdeff2] px-5 py-5 md:rounded-2xl md:px-8 md:py-8">
        {announcementsData.map((announcement) => (
          <li key={announcement.id}>
            <Image
              src={announcement.img}
              className="w-full rounded-xl object-cover md:rounded-2xl"
              width={1000}
              height={1000}
              placeholder="blur"
              alt={announcement.title}
            />
            <div className="mt-4 flex items-center justify-between">
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
