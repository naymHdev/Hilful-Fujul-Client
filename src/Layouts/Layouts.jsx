import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { Toaster } from "react-hot-toast";
import HeaderBar from "../Home/Banner/HeaderBar";

const Layouts = () => {
  return (
    <div>
      <div>
        <HeaderBar />
        <Header />
      </div>
      <div className=" overflow-hidden min-h-screen">
        <Outlet />
      </div>
      <div className=" mt-10">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default Layouts;
