/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdAccessTime, MdLocationOn } from "react-icons/md";

const IsEvents = ({
  image,
  date,
  month,
  title,
  starting_time,
  first_description,
  location,
  _id
}) => {
  return (
    <>
      <section className="relative rounded-md font-joseFin">
        <div>
          <img className=" rounded-md" src={image} alt="" />
          <div className="px-2 py-3 rounded-bl-full bg-green-700 text-white absolute top-0 right-0 shadow-lg shadow-green-200">
            <p className="ml-3 font-medium">{date?.slice(5, 7)}</p>
            <p className="ml-3 font-bold">{month.toUpperCase()}</p>
          </div>
        </div>
        <div className=" w-11/12 mx-auto -mt-24 rounded-md hover:rounded-none hover:bg-green-200 relative bg-green-100 text-slate-800 p-5 space-y-3">
          <p className=" text-2xl font-bold">{title?.slice(0, 20)}...</p>
          <div className=" flex items-center gap-5 text-xs font-medium">
            <div className="flex items-center gap-2">
              <MdAccessTime className=" text-2xl" />
              <p>{starting_time}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className=" text-2xl" />{" "}
              <p>{location?.slice(0, 15)}</p>
            </div>
          </div>
          <div className=" space-y-3">
            <p>{first_description?.slice(0, 70)}</p>
            <Link to={`/eventsDetails/${_id}`}>
              <p className=" text-xl font-bold text-green-700 hover:cursor-pointer">
                Show More...
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsEvents;
