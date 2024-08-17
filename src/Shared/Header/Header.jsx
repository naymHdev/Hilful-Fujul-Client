import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

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
          ? "fixed top-0 z-50 w-full"
          : "absolute lg:top-[270px] z-50 w-11/12 left-[55px]"
      } bg-white shadow-md transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-start py-8">
        <nav className="hidden lg:flex space-x-6 text-[#161616] font-bold">
          <a href="/" className="hover:text-green-500">
            হোম
          </a>
          <a href="/gallery" className="hover:text-green-500">
            আমাদের কার্যক্রম
          </a>
          <a href="/events" className="hover:text-green-500">
            চলমান প্রজেক্ট
          </a>
          <a href="/donations" className="hover:text-green-500">
            আজীবন ও দাতা সদস্য
          </a>
          <a href="/blogs" className="hover:text-green-500">
            গ্যালারী
          </a>
          <a href="/about" className="hover:text-green-500">
            সংবাদ
          </a>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-green-500"
          >
            {menuOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <IoMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md w-full">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="text-gray-700 hover:text-green-500">
              Home
            </a>
            <a href="/gallery" className="text-gray-700 hover:text-green-500">
              Gallery
            </a>
            <a href="/events" className="text-gray-700 hover:text-green-500">
              Events
            </a>
            <a href="/donations" className="text-gray-700 hover:text-green-500">
              Donations
            </a>
            <a href="/blogs" className="text-gray-700 hover:text-green-500">
              Blogs
            </a>
            <a href="/about" className="text-gray-700 hover:text-green-500">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-green-500">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
