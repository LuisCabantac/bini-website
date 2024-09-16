import { raleway } from "@/app/_lib/fonts";
import Events from "@/app/_components/Events";
import HeaderTitle from "../_components/HeaderTitle";

export const metadata = {
  title: "Events",
};

export default function Page() {
  return (
    <section className="md:mx-12 mx-6 md:mb-14 mb-12">
      <HeaderTitle type="h1">Upcoming events</HeaderTitle>
      <Events />
    </section>
  );
}
