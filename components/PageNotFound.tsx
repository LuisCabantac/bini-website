import Image from "next/image";

import logo from "@/public/spinner.png";

import ButtonLink from "@/components/ButtonLink";

export default function PageNotFound() {
  return (
    <div className="mx-6 mb-12 flex h-[40rem] items-center justify-center md:mx-16 md:mb-20 md:h-[25rem]">
      <div>
        <div className="flex">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="contrast-100 grayscale filter"
            placeholder="blur"
          />
          <h2 className="flex items-center justify-center text-xl font-bold md:text-2xl">
            PAGE NOT FOUND
          </h2>
        </div>
        <div className="flex justify-center">
          <ButtonLink
            href="/"
            btnTheme="md:px-6 md:py-3 px-4 py-2 text-[#fffbe6] bg-[#ffd801]"
          >
            Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
