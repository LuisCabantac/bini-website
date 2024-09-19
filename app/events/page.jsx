import Events from "@/app/_components/Events";
import HeaderTitle from "@/app/_components/HeaderTitle";

export const metadata = {
  title: "Events",
};

export default function Page() {
  return (
    <section className="md:mx-16 mx-6 md:mb-20 mb-12">
      <HeaderTitle type="h1">Upcoming events</HeaderTitle>
      <Events />
    </section>
  );
}
