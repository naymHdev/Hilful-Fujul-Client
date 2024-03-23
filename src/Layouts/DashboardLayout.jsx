import { Outlet } from "react-router-dom";
import AdminRoutes from "../Dashboard/Admin/AdminRoutes";

const DashboardLayout = () => {
  return (
    <div className="font-joseFin">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none md:hidden ">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-1 px-2 mx-2">Hilf al-Fudul</div>
            <div className="flex-none hidden md:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <AdminRoutes />
              </ul>
            </div>
          </div>
          <li className="p-1 rounded-sm text-center"></li>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 md:hidden">
            {/* Sidebar content here */}
            <AdminRoutes />
          </ul>
        </div>
      </div>
      <div className=" w-11/12 mx-auto overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
