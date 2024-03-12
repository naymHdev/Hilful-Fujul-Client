/* eslint-disable react/prop-types */

const EventCard = ({ event }) => {
  const {image, title, date, description_title, first_description, second_description, third_description, fourth_description, fifth_description, starting_time, phone, category, website_link, location } = event || {};

  return <div>

    <section>
        <div>
            <img src={image} alt="" />
        </div>
    </section>
  </div>;
};

export default EventCard;
