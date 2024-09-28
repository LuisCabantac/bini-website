import Announcements from "@/app/_components/Announcements";
import Events from "@/app/_components/Events";

export const metadata = {
  title: "Events",
};

export default function Page() {
  return (
    <div className="md:mt-14 mt-12 md:mb-20 mb-12 flex flex-col md:gap-16 gap-12">
      <Announcements />
      <Events />
    </div>
  );
}
