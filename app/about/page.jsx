import About from "@/app/_components/About";
import Gallery from "@/app/_components/Gallery";
import MembersCarousel from "@/app/_components/MembersCarousel";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="md:mb-16 mb-14 flex flex-col md:gap-14 gap-12">
      <About />
      <MembersCarousel />
      <Gallery />
    </div>
  );
}
