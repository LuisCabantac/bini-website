import { eventsData } from "@/lib/events-data";

import HeaderTitle from "@/components/HeaderTitle";
import EventCard from "@/components/EventCard";

export default function Events() {
  return (
    <section>
      <HeaderTitle type="h2">Upcoming events</HeaderTitle>
      <ul className="mt-4 flex flex-col gap-6 md:mt-6">
        {eventsData.map((event) => (
          <EventCard
            date={event.date}
            name={event.name}
            loc={event.loc}
            key={event.date}
          />
        ))}
      </ul>
    </section>
  );
}
