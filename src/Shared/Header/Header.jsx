import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { IoReorderThree } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { GiCrossedSabres } from "react-icons/gi";
import Button from "../../Components/Button";
import { GiSelfLove } from "react-icons/gi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navProducts = (
    <>
      <div className="grid md:flex text-slate-500 items-center list-none gap-5 font-medium">
        <li className="p-1 rounded-sm text-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="p-1 rounded-sm text-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li className="p-1 rounded-sm text-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/events"
          >
            Events
          </NavLink>
        </li>
        <li className="p-1 rounded-sm text-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/donations"
          >
            Donations
          </NavLink>
        </li>
        <li className="p-1 rounded-sm text-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
        </li>
        <li className="p-1 rounded-sm text-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </div>
    </>
  );

  return (
    <header className="relative">
      <nav
        className="mx-auto bg-white shadow-md px-5 flex w-11/12 fixed top-0 z-50 items-center justify-between py-5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Hilf al-Fudul</span>
            <h2 className="text-3xl font-bold text-slate-600">Hilf al-Fudul</h2>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IoReorderThree className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navProducts}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button text="Donation" icon={GiSelfLove} />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h2 className="text-3xl font-bold text-slate-600">Hilf al-Fudul</h2>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <GiCrossedSabres className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">{navProducts}</div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
