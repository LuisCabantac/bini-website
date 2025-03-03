import { StaticImageData } from "next/image";

import aiah from "@/public/gallery/AIAH-1.webp";
import colet from "@/public/gallery/COLET-1.webp";
import maloi from "@/public/gallery/MALOI-1.webp";
import gwen from "@/public/gallery/GWEN-1.webp";
import stacey from "@/public/gallery/STACEY-1.webp";
import mikha from "@/public/gallery/MIKHA-1.webp";
import jhoanna from "@/public/gallery/JHOANNA-1.webp";
import sheena from "@/public/gallery/SHEENA-1.webp";

export interface GalleryDataType {
  id: number;
  name: string;
  url: StaticImageData;
}

const galleryData: GalleryDataType[] = [
  {
    id: 1,
    name: "Aiah Arceta",
    url: aiah,
  },

  {
    id: 2,
    name: "Colet Vergara",
    url: colet,
  },
  {
    id: 3,
    name: "Maloi Ricalde",
    url: maloi,
  },
  {
    id: 4,
    name: "Gwen Apuli",
    url: gwen,
  },
  {
    id: 5,
    name: "Stacey Sevilleja",
    url: stacey,
  },
  {
    id: 6,
    name: "Mikha Lim",
    url: mikha,
  },
  {
    id: 7,
    name: "Jhoanna Robles",
    url: jhoanna,
  },
  {
    id: 8,
    name: "Sheena Catacutan",
    url: sheena,
  },
];

export default galleryData;
