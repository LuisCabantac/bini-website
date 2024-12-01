import About from "@/components/About";
import MembersCarousel from "@/components/MembersCarousel";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="mb-12 mt-12 flex flex-col gap-12 md:mb-20 md:mt-14 md:gap-16">
      <About />
      <MembersCarousel />
      <Gallery />
    </div>
  );
}
