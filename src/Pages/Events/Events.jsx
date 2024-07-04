import useEvents from "../../Hooks/useEvents";
import EventCard from "./EventCard";
import Button from "../../Components/Button";
import IsBanner from "../../Hooks/IsBanner";
import eventImage from "../../assets/eventRoute.jpg";
import { Breadcrumb } from "antd";

const Events = () => {
  const [isEvents] = useEvents();
  // console.log(isEvents);

  return (
    <>
      <section className="primary-width mt-5">
        <Breadcrumb
          className="text-xl font-semibold font-joseFin"
          separator=">"
          items={[
            {
              href: "/",
              title: "Home",
            },
            {
              title: "Events",
            },
          ]}
        />
      </section>
      <IsBanner
        headerTitle="Stride for a Cause: Mapping Our Charity Walk Route"
        description="Discover the Path of Purpose: Navigate through our charity event route page to explore the journey of giving back and making a difference, step by step."
        image={eventImage}
      />
      <hr />
      <h3 className="primary-width text-2xl md:text-4xl font-semibold  md:mt-12 mt-5">
        Browse nonprofit fundraisers Events
      </h3>
      <section className="primary-width py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
