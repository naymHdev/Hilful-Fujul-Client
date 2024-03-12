import { Link, useParams } from "react-router-dom";
import useEvents from "../../Hooks/useEvents";
import EventDetailsCard from "./EventDetailsCard";

const EventsDetails = () => {
  const [isEvents] = useEvents();
  const { id } = useParams();

  const eventDetails = isEvents.filter((item) => item._id === id);

  return (
    <>
      <section className=" overflow-hidden">
        <section className="bg-[url(https://i.ibb.co/KGGzHf6/top-view-paper-hand-holding-heart-with-copy-space.jpg)] bg-cover w-full h-[40vh] md:h-[60vh]">
          <div className="md:pt-40 pt-[90px] md:px-8 px-5 mx-auto">
            <h3 className="md:text-7xl text-4xl font-bold text-green-700">
              Events Details
            </h3>
          </div>
        </section>
        <div className=" text-white absolute font-bold rounded-sm p-3 right-8 md:right-16 bg-green-800 flex items-center gap-2 -mt-8">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>/</p>
          <Link to={`/eventsDetails/${id}`}>
            <p>Events Details</p>
          </Link>
        </div>
      </section>
      <section className="mt-16">
        {eventDetails?.map((details) => (
          <EventDetailsCard key={details._id} details={details} />
        ))}
      </section>
    </>
  );
};

export default EventsDetails;
