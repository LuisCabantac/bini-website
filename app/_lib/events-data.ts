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
    date: "Oct 13",
    name: "ASIYA Asian Music Festival & Conference",
    loc: "World Trade Center, Manila Philippines",
  },
  {
    date: "Oct 15",
    name: "Billboard PH Mainstage",
    loc: "SM Mall of Asia Arena",
  },
  {
    date: "Oct 15",
    name: "BINI Official Light Stick",
    loc: "Location TBD",
  },
  {
    date: "Oct 20",
    name: "IAM WORLDWIDE HIS7ORY 7TH ANNIVERSARY Anniversary + Music Festival",
    loc: "SM Mall of Asia Arena",
  },
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
