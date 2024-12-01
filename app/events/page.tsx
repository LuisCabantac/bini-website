import Announcements from "@/components/Announcements";
import Events from "@/components/Events";

export const metadata = {
  title: "Events",
};

export default function Page() {
  return (
    <div className="mb-12 mt-12 flex flex-col gap-12 md:mb-20 md:mt-14 md:gap-16">
      <Announcements />
      <Events />
    </div>
  );
}
