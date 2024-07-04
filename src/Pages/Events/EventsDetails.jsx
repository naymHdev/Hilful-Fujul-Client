import { Link, useParams } from "react-router-dom";
import useEvents from "../../Hooks/useEvents";
import EventDetailsCard from "./EventDetailsCard";

const EventsDetails = () => {
  const [isEvents] = useEvents();
  const { id } = useParams();

  const eventDetails = isEvents.filter((item) => item._id === id);

  return (
    <>
      <section className="primary-width">
        {eventDetails?.map((details) => (
          <EventDetailsCard key={details._id} details={details} />
        ))}
      </section>
    </>
  );
};

export default EventsDetails;
