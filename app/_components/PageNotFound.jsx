import Image from "next/image";

import logo from "@/public/spinner.png";
import { linkBtn } from "@/app/_lib/themes";

import ButtonLink from "@/app/_components/ButtonLink";

export default function PageNotFound() {
  return (
    <div className="md:h-[25rem] h-[40rem] md:mx-16 mx-6 md:mb-20 mb-12 flex justify-center items-center">
      <div>
        <div className="flex">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="filter grayscale contrast-100"
          />
          <h2 className="flex justify-center items-center font-bold md:text-2xl text-xl">
            PAGE NOT FOUND
          </h2>
        </div>
        <div className="flex justify-center">
          <ButtonLink href="/" btnTheme={linkBtn}>
            Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
