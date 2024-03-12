import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { Toaster } from "react-hot-toast";

const Layouts = () => {
  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <div>
        <Header />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className=" mt-20">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default Layouts;
