import Image from "next/image";

import groupProfile from "@/public/profile-group.jpeg";

import HeaderTitle from "@/components/HeaderTitle";

export default function About() {
  return (
    <section>
      <HeaderTitle type="h1">Mabuhay! We are BINI!</HeaderTitle>
      <p className="mb-4 text-lg leading-normal md:mb-6">
        BINI is a Filipino girl group created by ABS-CBN Entertainment,
        currently managed by Star Magic. It has 8 members composed of Aiah,
        Colet, Gwen, Jhoanna, Maloi, Mikha, Sheena and Stacey. They were trained
        under renowned Filipino voice and dance coaches and South Korean idol
        producer MU Doctor. They officially debuted on June 11, 2021 with their
        debut single Born To Win.
      </p>
      <div className="relative h-[14rem] w-full md:h-[30rem]">
        <Image
          src={groupProfile}
          alt="group"
          className="rounded-xl object-cover md:rounded-2xl"
          fill
          placeholder="blur"
        />
      </div>
    </section>
  );
}
