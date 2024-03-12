/* eslint-disable react/prop-types */
import IsEvents from "../../Hooks/IsEvents";

const EventCard = ({ event }) => {
  const {
    image,
    title,
    date,
    month,
    first_description,
    starting_time,
    location,
    _id,
  } = event || {};

  return (
    <div>
      <IsEvents
        _id={_id}
        image={image}
        title={title}
        date={date}
        month={month}
        first_description={first_description}
        starting_time={starting_time}
        location={location}
      />
    </div>
  );
};

export default EventCard;
