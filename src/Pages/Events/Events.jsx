import useEvents from "../../Hooks/useEvents";
import EventCard from "./EventCard";
import Button from "../../Components/Button";
import IsBanner from "../../Hooks/IsBanner";
import eventImage from "../../assets/eventRoute.jpg";

const Events = () => {
  const [isEvents] = useEvents();
  // console.log(isEvents);

  return (
    <>
      <IsBanner
        headerTitle="Stride for a Cause: Mapping Our Charity Walk Route"
        description="Discover the Path of Purpose: Navigate through our charity event route page to explore the journey of giving back and making a difference, step by step."
        image={eventImage}
      />
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
