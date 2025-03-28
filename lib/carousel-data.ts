import { StaticImageData } from "next/image";

import aiah from "@/public/member-carousel/BINI-AIAH.webp";
import colet from "@/public/member-carousel/BINI-COLET.webp";
import maloi from "@/public/member-carousel/BINI-MALOI.webp";
import gwen from "@/public/member-carousel/BINI-GWEN.webp";
import stacey from "@/public/member-carousel/BINI-STACEY.webp";
import mikha from "@/public/member-carousel/BINI-MIKHA.webp";
import jhoanna from "@/public/member-carousel/BINI-JHOANNA.webp";
import sheena from "@/public/member-carousel/BINI-SHEENA.webp";

export interface MembersCarouselType {
  id: number;
  name: string;
  title: string;
  url: StaticImageData;
}

const carouselData: MembersCarouselType[] = [
  {
    id: 1,
    name: "Aiah Arceta",
    title: "Visual, Main Rapper",
    url: aiah,
  },
  {
    id: 2,
    name: "Colet Vergara",
    title: "Main Vocal, Lead Dancer, Lead Rapper",
    url: colet,
  },
  {
    id: 3,
    name: "Maloi Ricalde",
    title: "Main Vocalist",
    url: maloi,
  },
  {
    id: 4,
    name: "Gwen Apuli",
    title: "Lead Vocal, Lead Rapper",
    url: gwen,
  },
  {
    id: 5,
    name: "Stacey Sevilleja",
    title: "Lead Rapper, Lead Dancer",
    url: stacey,
  },
  {
    id: 6,
    name: "Mikha Lim",
    title: "Main Rapper, Lead Dancer, Visual",
    url: mikha,
  },
  {
    id: 7,
    name: "Jhoanna Robles",
    title: "Leader, Lead Vocal, Lead Rapper",
    url: jhoanna,
  },
  {
    id: 8,
    name: "Sheena Catacutan",
    title: "Main Dancer",
    url: sheena,
  },
];

export default carouselData;
