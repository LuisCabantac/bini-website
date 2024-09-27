import About from "@/app/_components/About";
import MembersCarousel from "@/app/_components/MembersCarousel";
import Gallery from "@/app/_components/Gallery";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="md:mt-14 mt-12 md:mb-20 mb-12 flex flex-col md:gap-16 gap-12">
      <About />
      <MembersCarousel />
      <Gallery />
    </div>
  );
}
