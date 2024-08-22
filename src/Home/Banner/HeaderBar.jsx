import { FacebookIcon, LinkedinIcon, PinterestIcon, XIcon } from "react-share";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <>
      <div className=" hidden lg:flex items-center bg-[#1F1F1F]">
        <div className="px-4 md:px-6 lg:px-10 w-full mx-auto py-6 max-w-7xl">
          <div className=" flex items-center justify-between">
            {/* Icons */}
            <div className=" flex items-center gap-8">
              <div className="flex items-center gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/96zoy?mibextid=ZbWKwL"
                >
                  <FacebookIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <LinkedinIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <PinterestIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <XIcon className=" w-8 h-auto rounded-full" />
                </a>
              </div>
            </div>
            <div>
              <div className=" flex items-center space-x-3">
                <Link to="/" className="text-[#9F9F9F] hover:text-white">
                  হোম
                </Link>
                <div className=" text-white">|</div>
                <Link to="/about" className="text-[#9F9F9F] hover:text-white">
                  আমাদের সম্পর্কে
                </Link>
                <div className=" text-white">|</div>
                <Link to="#" className="text-[#9F9F9F] hover:text-white">
                  আমাদের কার্যক্রম
                </Link>
                <div className=" text-white">|</div>
                <Link to="#" className="text-[#9F9F9F] hover:text-white">
                  স্বেচ্ছাসেবক নিবন্ধন
                </Link>
                <div className=" text-white">|</div>
                <Link to="/contact" className="text-[#9F9F9F] hover:text-white">
                  যোগাযোগ
                </Link>
                <div className=" text-white">|</div>
                <Link to="#" className="text-white flex items-center gap-2">
                  <FaUser /> আমার অ্যাকাউন্ট
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
