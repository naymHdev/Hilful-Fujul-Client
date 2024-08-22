import { Divider } from "antd";
import { useState, useEffect } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? "fixed top-0 z-50 w-full left-0"
          : "absolute lg:top-[270px] z-50 w-full lg:w-11/12 mx-auto lg:left-[55px]"
      } bg-white shadow-sm transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between py-4 md:py-8">
        <nav className="hidden lg:flex space-x-6 text-[#161616] font-bold">
          <a href="/" className="hover:text-green-500">
            হোম
          </a>
          <a href="#" className="hover:text-green-500">
            আমাদের কার্যক্রম
          </a>
          <a href="/events" className="hover:text-green-500">
            চলমান প্রজেক্ট
          </a>
          <a href="#" className="hover:text-green-500">
            আজীবন ও দাতা সদস্য
          </a>
          <a href="/gallery" className="hover:text-green-500">
            গ্যালারী
          </a>
          <a href="/blogs" className="hover:text-green-500">
            তথ্য ব্লগ
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden  flex items-center justify-between w-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-green-500 col-span-1"
          >
            {menuOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <HiMiniBars3BottomLeft className="text-3xl" />
            )}
          </button>
          <div className=" col-span-3">
            <h2 className="text-xl font-extrabold">
              হিলফুল <span className=" text-green-600">ফুজুল</span>
            </h2>
          </div>
          <button className=" col-span-1">
            <IoSearchOutline className=" text-2xl font-bold" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 bg-white shadow-md h-full transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <Link to="/">
          <div className="col text-center space-y-1 py-2 shadow-sm">
            <h2 className="text-xl font-extrabold">হিলফুল ফুজুল</h2>
            <p className="text-[#3BCF94] font-bold">সমাজ কল্যাণ ফাউন্ডেশন</p>
          </div>
        </Link>

        <nav className="flex flex-col items-start space-y-4 py-4 px-6 mt-8">
          <a href="/" className="hover:text-green-500">
            হোম
          </a>
          <Divider
            style={{
              borderColor: "#3BCF95",
            }}
          />
          <a href="#" className="hover:text-green-500">
            আমাদের কার্যক্রম
          </a>
          <Divider
            style={{
              borderColor: "#3BCF95",
            }}
          />
          <a href="/events" className="hover:text-green-500">
            চলমান প্রজেক্ট
          </a>
          <Divider
            style={{
              borderColor: "#3BCF95",
            }}
          />
          <a href="#" className="hover:text-green-500">
            আজীবন ও দাতা সদস্য
          </a>
          <Divider
            style={{
              borderColor: "#3BCF95",
            }}
          />
          <a href="/gallery" className="hover:text-green-500">
            গ্যালারী
          </a>
          <Divider
            style={{
              borderColor: "#3BCF95",
            }}
          />
          <a href="/blogs" className="hover:text-green-500">
            তথ্য ব্লগ
          </a>
          <Divider
            style={{
              borderColor: "#3BCF95",
            }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
