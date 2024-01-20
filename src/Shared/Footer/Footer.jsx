import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#302D51]">
      <footer className="footer rounded-sm px-8 py-20 grid grid-cols-2 md:grid-cols-4">
        <div>
          <div>
            <Link to="/">
              <h3 className=" text-3xl font-bold text-white">Hilf al-Fudul</h3>
            </Link>
          </div>
          <p className=" text-sm mt-3 text-slate-50">
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
                <FaFacebookF className=" text-sky-500 text-2xl" />
              </a>
            </div>
            <div className=" border rounded-full p-1">
              <FaYoutube className=" text-red-500 text-2xl" />
            </div>
            <div className=" border rounded-full p-1">
              <FaTwitter className=" text-sky-600 text-2xl" />
            </div>
            <div className=" border rounded-full p-1">
              <FaInstagram className=" text-orange-500 text-2xl" />
            </div>
          </div>
        </div>
        {/* Urgent causes */}
        <div className="text-white hover:text-green-400">
          <header className=" text-slate-200 text-2xl font-medium">
            Urgent causes
          </header>
        </div>
        {/* Quick links */}
        <div className="text-white">
          <header className=" text-slate-200 text-2xl font-medium">
            Quick links
          </header>
          <section>
            <Link to="/about">
              <div className="mt-3 flex hover:text-green-400 items-center gap-1 text-xl font-medium">
                <MdKeyboardArrowRight className=" text-2xl" /> About
              </div>
            </Link>
            <div className=" border-b-2 mt-3 mb-2 border-slate-400"></div>
            <Link to="/blogs">
              <div className=" flex hover:text-green-400 items-center gap-1 text-xl font-medium">
                <MdKeyboardArrowRight className=" text-2xl" /> Blogs
              </div>
            </Link>
            <div className=" border-b-2 mt-3 mb-2 border-slate-400"></div>
            <Link to="/events">
              <div className=" flex hover:text-green-400 items-center gap-1 text-xl font-medium">
                <MdKeyboardArrowRight className=" text-2xl" /> Events
              </div>
            </Link>
            <div className=" border-b-2 mt-3 mb-2 border-slate-400"></div>
            <Link to="/donations">
              <div className="flex hover:text-green-400 items-center gap-1 text-xl font-medium">
                <MdKeyboardArrowRight className=" text-2xl" /> Donation
              </div>
            </Link>
          </section>
        </div>
        {/* Contact info */}
        <div className="text-white">
          <header className=" text-slate-200 text-2xl font-medium">
            Contact info
          </header>
          <section>
            <div className=" mt-3 flex gap-3 hover:text-green-400 items-center font-medium">
              <IoLocationOutline className=" text-2xl" /> 6B, Helvetica street,
              Jordan
            </div>
            <div className=" mt-3 flex gap-3 hover:text-green-400 items-center font-medium">
              <IoIosCall className=" text-2xl" /> +123-456-789
            </div>
            <div className=" border-b-2 border-slate-400 mt-6 mb-6"></div>

            <div className=" mt-3 flex gap-3 hover:text-green-400 items-center font-medium">
              <IoLocationOutline className=" text-2xl" /> 6B, Helvetica street,
              Jordan
            </div>
            <div className=" mt-3 flex gap-3 hover:text-green-400 items-center font-medium">
              <IoIosCall className=" text-2xl" /> +123-456-789
            </div>
          </section>
        </div>
      </footer>
      <div className="divider divider-accent w-11/12 mx-auto"></div>
      <section>
        <div className=" flex gap-2 text-center justify-center text-white pb-5">
          Copyright @2024 Hilf al-Fudul. Developed By
          <a
            className=" font-bold text-green-200 underline"
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
