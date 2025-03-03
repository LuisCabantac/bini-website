import { StaticImageData } from "next/image";

import biniWorldTour from "@/public/announcements/bini-worldtour.webp";

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
    title: "BINIverse World Tour",
    description:
      "The BINIverse World Tour Dubai & London shows are happening soon! Whether you're looking for the ultimate VIP experience or a budget-friendly way to join the fun, there's a ticket option for everyone. Check out the full pricing and VIP package details below and get ready to be part of this unforgettable experience!",
    btnText: "Get Your Tickets Now",
    btnUrl: "https://app.iwanttfc.com/ROWBiniDocuEp1",
    img: biniWorldTour,
  },
];

export const eventsData: EventsDataType[] = [
  {
    date: "May 18",
    name: "BINIverse World Tour Dubai 2025 (Presale)",
    loc: "Coca-Cola Arena, Dubai, UAE",
  },
  {
    date: "May 18",
    name: "BINIverse World Tour Dubai 2025 (Seatmap)",
    loc: "Coca-Cola Arena, Dubai, UAE",
  },
  {
    date: "May 25",
    name: "BINIverse World Tour London 2025 (Presale)",
    loc: "OVO Arena Wembley, London, UK",
  },
  {
    date: "May 25",
    name: "BINIverse World Tour London 2025 (VIP)",
    loc: "OVO Arena Wembley, London, UK",
  },
  {
    date: "May 30",
    name: "BINIverse World Tour Canada 2025",
    loc: "Coca-Cola Coliseum, Toronto Canada",
  },
  {
    date: "May 31",
    name: "BINIverse World Tour USA 2025",
    loc: "The Theater at Madison Square Garden, New York, New York",
  },
];
