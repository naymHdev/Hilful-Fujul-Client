import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-slate-800 border-t-2 mt-20">
      <footer className="footer rounded-sm primary-width md:gap-10 md:py-10 py-5 grid grid-cols-1 md:grid-cols-3">
        <div>
          <div>
            <Link to="/">
              <h3 className=" text-3xl font-bold text-green-700">
                Hilf al-Fudul
              </h3>
            </Link>
          </div>
          <p className=" text-sm mt-3 text-slate-800">
            It fits perfectly for your human charity! It evokes nobility,
            collective action, and standing up for the weak, all valuable traits
            for a charitable organization.
          </p>
          <div className=" flex items-center justify-center gap-3 mt-5">
            <div className=" border rounded-full p-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/96zoy?mibextid=ZbWKwL"
              >
                <FaFacebookF className=" text-sky-500 text-2xl reactIcons" />
              </a>
            </div>
            <div className=" border rounded-full p-1">
              <FaYoutube className=" text-red-500 text-2xl reactIcons" />
            </div>
            <div className=" border rounded-full p-1">
              <FaTwitter className=" text-sky-600 text-2xl reactIcons" />
            </div>
            <div className=" border rounded-full p-1">
              <FaInstagram className=" text-orange-500 text-2xl reactIcons" />
            </div>
          </div>
        </div>
        {/* Quick links */}
        <div className="text-slate-800">
          <header className=" text-green-700 text-2xl font-medium">
            Quick links
          </header>
          <section>
            <Link to="/about">
              <div className="mt-2 flex hover:text-green-400 items-center gap-1 font-medium">
                <MdKeyboardArrowRight className=" " /> About
              </div>
            </Link>
            <div className="mt-3 mb-2"></div>
            <Link to="/blogs">
              <div className=" flex hover:text-green-400 items-center gap-1 font-medium">
                <MdKeyboardArrowRight className=" " /> Blogs
              </div>
            </Link>
            <div className="mt-3 mb-2"></div>
            <Link to="/events">
              <div className=" flex hover:text-green-400 items-center gap-1 font-medium">
                <MdKeyboardArrowRight className=" " /> Events
              </div>
            </Link>
            <div className="mt-3 mb-2"></div>
            <Link to="/donations">
              <div className="flex hover:text-green-400 items-center gap-1 font-medium">
                <MdKeyboardArrowRight className=" " /> Donation
              </div>
            </Link>
          </section>
        </div>
        {/* Contact info */}
        <div className="text-slate-800">
          <header className=" text-green-700 text-2xl font-medium">
            Contact info
          </header>
          <section className="mt-2 space-y-3">
            <div className="flex gap-1 hover:text-green-400 items-center font-medium">
              <IoLocationOutline className="text-xl" /> 6B, Helvetica street,
              Jordan
            </div>
            <div className="flex gap-1 hover:text-green-400 items-center font-medium">
              <IoIosCall className="text-xl" /> +123-456-789
            </div>
            <div className="flex gap-1 hover:text-green-400 items-center font-medium">
              <IoLocationOutline className="text-xl" /> 6B, Helvetica street,
              Jordan
            </div>
            <div className="flex gap-1 hover:text-green-400 items-center font-medium">
              <IoIosCall className="text-xl" /> +123-456-789
            </div>
          </section>
        </div>
      </footer>
      <hr className=" py-2" />
      <section>
        <div className="md:flex gap-2 text-center justify-center text-slate-800 pb-5">
          Copyright @2024 Hilf al-Fudul. Developed By
          <a
            className=" font-bold text-green-900 underline"
            target="_blank"
            rel="noreferrer"
            href="https://naymhossen1b.netlify.app"
          >
            @Naym Hossen
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
