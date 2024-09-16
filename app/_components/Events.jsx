import { eventsData } from "@/app/_lib/events-data";
import EventCard from "@/app/_components/EventCard";

export default function Events() {
  return (
    <ul className="flex flex-col gap-6">
      {eventsData.map((event) => (
        <EventCard
          date={event.date}
          name={event.name}
          loc={event.loc}
          key={event.date}
        />
      ))}
    </ul>
  );
}
