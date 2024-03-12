import { Link } from "react-router-dom";
import useEvents from "../../Hooks/useEvents";
import EventCard from "./EventCard";
import Button from "../../Components/Button";

const Events = () => {
  const [isEvents] = useEvents();
  // console.log(isEvents);

  return (
    <>
      <section className=" overflow-hidden">
        <section className="bg-[url(https://i.ibb.co/KGGzHf6/top-view-paper-hand-holding-heart-with-copy-space.jpg)] bg-cover w-full h-[40vh] md:h-[60vh]">
          <div className="md:pt-40 pt-[90px] md:px-8 px-5 mx-auto">
            <h3 className="text-7xl  font-bold text-green-700">
              Events
            </h3>
          </div>
        </section>
        <div className=" text-white absolute font-bold rounded-sm p-3 right-8 md:right-16 bg-green-800 flex items-center gap-2 -mt-8">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>/</p>
          <Link to="/events">
            <p>Events</p>
          </Link>
        </div>
      </section>
      <section className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isEvents?.map((item) => (
          <EventCard key={item._id} event={item} />
        ))}
      </section>
      <section>
        <div className=" flex justify-end">
          <Button text="More..." />
        </div>
      </section>
    </>
  );
};

export default Events;
