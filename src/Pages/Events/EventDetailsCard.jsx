/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import Button from "../../Components/Button";
import { FaArrowRight } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const EventDetailsCard = ({ details }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const {
    image,
    date,
    month,
    description_title,
    first_description,
    second_description,
    third_description,
    fourth_description,
    fifth_description,
    starting_time,
    phone,
    category,
    website_link,
    location,
  } = details || {};

  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-9 gap-3 py-8">
        <div className="relative col-span-6">
          <div>
            <img className=" w-full h-full bg-cover" src={image} alt="image" />
            <div className="px-2 py-3 rounded-bl-full bg-green-700 text-white absolute top-0 right-0 shadow-lg shadow-green-200">
              <p className="ml-3 font-medium">{date?.slice(5, 7)}</p>
              <p className="ml-3 font-bold">{month.toUpperCase()}</p>
            </div>
          </div>
          <div className=" font-medium ">
            <h2 className="mt-10 text-3xl font-bold">{description_title}</h2>
            <div className=" space-y-5 mt-10">
              <p>{first_description}</p>
              <p>{second_description}</p>
              <p>{third_description}</p>
              <p>{fourth_description}</p>
              <p>{fifth_description}</p>
            </div>
          </div>
          <div className="py-8">
            <Button icon={FaArrowRight} text="Donate Now" />
          </div>
        </div>
        <div className="col-span-3">
          {/* Event Details */}
          <div className="bg-[#EFF5F4] p-5">
            <div className=" text-xl font-bold w-10/12 mx-auto text-center p-3 bg-[#FFFFFF] text-[#1F2230]">
              Event Details
            </div>
            <div className=" mt-7 space-y-5 font-bold text-xl">
              <div className=" flex items-center justify-between">
                <p>Starting Time:</p>{" "}
                <p className=" text-sm text-[#33C8A0]">{starting_time}</p>
              </div>
              <div className=" flex items-center justify-between">
                <p>Date:</p> <p className=" text-sm text-[#33C8A0]">{date}</p>
              </div>
              <div className=" flex items-center justify-between">
                <p>Categroy:</p>{" "}
                <p className=" text-sm text-[#33C8A0]">{category}</p>
              </div>
              <div className=" flex items-center justify-between">
                <p>Phone:</p> <p className=" text-sm text-[#33C8A0]">{phone}</p>
              </div>
              <div className=" flex items-center justify-between">
                <p>Website:</p>{" "}
                <a
                  className=" text-sm text-[#33C8A0] underline"
                  href={website_link}
                >
                  {website_link}
                </a>
              </div>
              <div className=" items-center justify-between">
                <p>Location:</p>{" "}
                <p className="text-sm text-[#33C8A0] mt-2">{location}</p>
              </div>
            </div>
          </div>
          {/* Event Map */}
          <div className=" mt-10">
            <div style={{ height: "70vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailsCard;
