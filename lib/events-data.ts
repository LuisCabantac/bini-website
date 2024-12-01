import { StaticImageData } from "next/image";

import biniDocuseries from "@/public/announcements/bini_docuseries.webp";

interface AnnouncementsDataType {
  id: number;
  title: string;
  description: string;
  btnText: string;
  btnUrl: string;
  img: StaticImageData;
}

export interface EventsDataType {
  date: string;
  name: string;
  loc: string;
}

export const announcementsData: AnnouncementsDataType[] = [
  {
    id: 1,
    title: "BINI Chapter 1: Born to Win",
    description:
      "They are ready to tell their story!🌸 Watch BINI Chapter 1: Born to Win, an iWantTFC and ABS-CBN News Original Docuseries. NOW STREAMING WORLDWIDE, only on iWantTFC! Visit iWantTFC.com or Download the App, and Register to watch the show and other BINI content.",
    btnText: "Watch",
    btnUrl: "https://app.iwanttfc.com/ROWBiniDocuEp1",
    img: biniDocuseries,
  },
];

export const eventsData: EventsDataType[] = [
  {
    date: "Nov 16",
    name: "Grand BINIverse Day 1",
    loc: "Araneta Coliseum",
  },
  {
    date: "Nov 17",
    name: "Grand BINIverse Day 2",
    loc: "Araneta Coliseum",
  },
  {
    date: "Nov 18",
    name: "Grand BINIverse Day 3",
    loc: "Araneta Coliseum",
  },
];
