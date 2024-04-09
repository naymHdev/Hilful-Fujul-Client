import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import bannerImage from "../../assets/about - banner - image.jpeg";

const About = () => {
  return (
    <>
      <div className=" flex items-center mt-8 md:mt-16 gap-3 px-2 md:px-20">
        <div className=" flex items-center gap-5 border rounded-xl px-8 py-1 font-extrabold">
          <FaChevronLeft />
          <Link>Home</Link>
        </div>
        <div className="border rounded-xl px-8 py-1 font-extrabold">
          <Link>About Hilf al-Fudul</Link>
        </div>
      </div>
      <div className="mt-2 md:mt-5 space-y-3 w-11/12 mx-auto">
        <hr />
        <hr />
      </div>
      <div className=" flex items-center justify-center mt-16">
        <h1 className=" text-3xl font-extrabold">About Hilf al-Fudul</h1>
      </div>
      <div className=" mt-20">
        <img className=" w-full rounded-md h-full" src={bannerImage} alt="" />
      </div>
      <div className=" space-y-8 mt-16 text-slate-600 text-2xl font-mono w-10/12 mx-auto">
        <p>
          There’s a part of every one of us that dreams of a better world. That
          spark of inspiration to help a person, fix a neighborhood, or even
          change a nation. At Hilf al-Fudul, we empower both individuals and
          nonprofits to turn compassion into action. Because that is how change
          happens.
        </p>
        <p>
          With fundraising for all, we are creating the giving layer of the
          internet: a space where individuals, teams, organizations, and
          nonprofits can champion causes that matter and raise money to make a
          lasting difference. Through Hilf al-Fudul, people and organizations
          have the tools they need to share their cause far and wide and harness
          the power of generosity. We are transforming the way people give and
          changing lives—are you ready to join us?
        </p>
      </div>
      <div className=" mt-20">
        <div className=" w-9/12 mx-auto px-20 py-24 border shadow-md rounded-md">
          <div className=" flex items-center justify-center">
            <h1 className="text-[#28A16A] text-2xl font-extrabold">Hilf al-Fudul</h1>
          </div>
          <p className="text-sm font-thin mt-10">
            Launched in 2010, Hilf al-Fudul is the world’s largest social
            fundraising platform. With over $9 billion raised from more than 120
            million donations, we’re on a mission to help people fundraise for
            personal, business, and charitable causes.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
