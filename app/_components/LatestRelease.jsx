import HeaderTitle from "@/app/_components/HeaderTitle";
import Image from "next/image";
import { raleway } from "../_lib/fonts";
import Button from "./Button";

function LatestRelease() {
  return (
    <section>
      <HeaderTitle type="h1">Latest release</HeaderTitle>
      <div className="bg-[#cdeff2] border-1 border-[#8bd9e1] md:rounded-3xl rounded-xl md:h-[22rem] h-[8rem] grid grid-cols-[1fr_2fr] drop-shadow-md md:w-[100%] m-auto">
        <div className="relative md:h-[18rem] h-[6rem] md:w-[18rem] w-[6rem] md:mx-8 md:my-8 mx-4 my-4">
          <Image
            src={`https://i.scdn.co/image/ab67616d0000b273b89bd876c79f495ab3009444`}
            fill
            alt="Cherry on top album cover"
            className="md:rounded-3xl rounded-xl"
          />
        </div>
        <div className="md:py-8 md:px-8 flex flex-col md:gap-4 gap-2 justify-center items-start">
          <h3
            className={`${raleway.className} text-red-600 md:text-6xl text-2xl font-bold drop-shadow-md`}
          >
            Cherry On Top
          </h3>
          <p className="md:pl-2 pl-1 text-[#f57878] md:text-base text-xs">
            Single &#8226; 2024
          </p>
          <Button href="https://orcd.co/bini-cherryontop" path="/" size="small">
            Listen now
          </Button>
        </div>
      </div>
      {/* <div className="after:content-['▶'] after:absolute after:top-[42%] after:left-[42%] after:pb-[0.9rem] after:pt-[0.9rem] after:px-5 after:text-red-50 after:rounded-full after:bg-[#f03e3e] after:opacity-0 transition-all after:hover:opacity-100 relative overflow-hidden md:h-[16rem] h-[6rem] md:w-[16rem] w-[6rem] after:drop-shadow-2xl after:cursor-pointer">
        <div className="relative md:h-[16rem] h-[6rem] md:w-[16rem] w-[6rem]">
          <Image
            src={`https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-bini-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F07%2F18120501%2FCherry-On-Top-Cover-Art.jpg&w=640&q=75`}
            fill
            alt="Cherry on top album cover"
            className="rounded-xl"
          />
        </div> */}
    </section>
  );
}

export default LatestRelease;
