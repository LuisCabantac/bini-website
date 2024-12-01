import { StaticImageData } from "next/image";

import aiah from "@/public/gallery/gallery-aiah-1.webp";
import aiah2 from "@/public/gallery/gallery-aiah-2.webp";
import colet from "@/public/gallery/gallery-colet-1.webp";
import colet2 from "@/public/gallery/gallery-colet-2.webp";
import maloi from "@/public/gallery/gallery-maloi-1.webp";
import maloi2 from "@/public/gallery/gallery-maloi-2.webp";
import gwen from "@/public/gallery/gallery-gwen-1.webp";
import gwen2 from "@/public/gallery/gallery-gwen-2.webp";
import stacey from "@/public/gallery/gallery-stacey-1.webp";
import stacey2 from "@/public/gallery/gallery-stacey-2.webp";
import mikha from "@/public/gallery/gallery-mikha-1.webp";
import mikha2 from "@/public/gallery/gallery-mikha-2.webp";
import jhoanna from "@/public/gallery/gallery-jhoanna-1.webp";
import jhoanna2 from "@/public/gallery/gallery-jhoanna-2.webp";
import sheena from "@/public/gallery/gallery-sheena-1.webp";
import sheena2 from "@/public/gallery/gallery-sheena-2.webp";

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
    id: 1,
    name: "Aiah Arceta",
    url: aiah2,
  },
  {
    id: 2,
    name: "Colet Vergara",
    url: colet2,
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
    id: 3,
    name: "Maloi Ricalde",
    url: maloi2,
  },
  {
    id: 4,
    name: "Gwen Apuli",
    url: gwen2,
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
    id: 5,
    name: "Stacey Sevilleja",
    url: stacey2,
  },
  {
    id: 6,
    name: "Mikha Lim",
    url: mikha2,
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
    id: 7,
    name: "Jhoanna Robles",

    url: jhoanna2,
  },
  {
    id: 8,
    name: "Sheena Catacutan",
    url: sheena2,
  },
  {
    id: 8,
    name: "Sheena Catacutan",
    url: sheena,
  },
];

export default galleryData;
