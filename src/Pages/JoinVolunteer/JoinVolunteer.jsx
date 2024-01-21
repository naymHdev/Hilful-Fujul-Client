import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const JoinVolunteer = () => {
  return (
    <>
      <section className="bg-[url(https://i.ibb.co/1vTMr1X/group-volunteers-nature.jpg)] w-full bg-cover">
        <div className=" flex items-center gap-2 justify-center py-40 font-bold text-slate-100 text-xl backdrop-blur-sm">
          <p className=" hover:text-green-500">
            <Link>Home</Link>
          </p>
          <p>
            <FaChevronRight />
          </p>
          <p>Join Now Volunteer</p>
        </div>
      </section>
    </>
  );
};

export default JoinVolunteer;
