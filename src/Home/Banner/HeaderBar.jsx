import { FacebookIcon, LinkedinIcon, PinterestIcon, XIcon } from "react-share";
import { FaUser } from "react-icons/fa";
import { MdCall } from "react-icons/md";
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
              <div className="gap-2 flex items-center text-white">
                <MdCall className=" text-xl" />
                <p className=" text-sm">+880 0177-006-4053</p>
              </div>
            </div>
            <div>
              <div className=" flex items-center space-x-3">
                <Link className="text-[#9F9F9F] hover:text-white">
                  আমাদের সম্পর্কে
                </Link>
                <div className=" text-white">|</div>
                <Link className="text-[#9F9F9F] hover:text-white">
                  আমাদের কার্যক্রম
                </Link>
                <div className=" text-white">|</div>
                <Link className="text-[#9F9F9F] hover:text-white">
                  স্বেচ্ছাসেবক নিবন্ধন
                </Link>
                <div className=" text-white">|</div>
                <Link className="text-[#9F9F9F] hover:text-white">যোগাযোগ</Link>
                <div className=" text-white">|</div>
                <Link className="text-white flex items-center gap-2">
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
