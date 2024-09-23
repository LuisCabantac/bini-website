import Image from "next/image";

import groupProfile from "@/public/profile-group.jpeg";

import HeaderTitle from "@/app/_components/HeaderTitle";

export default function About() {
  return (
    <section className="md:mx-16 mx-6">
      <HeaderTitle type="h1">Mabuhay! We are BINI!</HeaderTitle>
      <p className="leading-normal text-lg md:mb-6 mb-4">
        BINI is a Filipino girl group created by ABS-CBN Entertainment,
        currently managed by Star Magic. It has 8 members composed of Aiah,
        Colet, Gwen, Jhoanna, Maloi, Mikha, Sheena and Stacey. They were trained
        under renowned Filipino voice and dance coaches and South Korean idol
        producer MU Doctor. They officially debuted on June 11, 2021 with their
        debut single Born To Win.
      </p>
      <div className="relative md:h-[30rem] h-[14rem] w-full">
        <Image
          src={groupProfile}
          alt="group"
          className="object-cover rounded-xl"
          fill
        />
      </div>
    </section>
  );
}
