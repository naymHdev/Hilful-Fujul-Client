import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className=" flex items-center mt8 md:mt-16 gap-3 px-2 md:px-20">
        <div className=" flex items-center gap-5 border rounded-xl px-8 py-1 font-extrabold">
          <FaChevronLeft />
          <Link>Home</Link>
        </div>
        <div className="border rounded-xl px-8 py-1 font-extrabold">
          <Link>About Hilf al-Fudul</Link>
        </div>
      </div>
      <div className="mt-2 md:mt-5 space-y-3">
        <hr />
        <hr />
      </div>
      <section></section>
    </>
  );
};

export default About;
