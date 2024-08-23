import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import HeaderBar from "../Home/Banner/HeaderBar";
import Navbar from "../Shared/NavBar/NavBar";

const Layouts = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <HeaderBar />
        {location.pathname === "/" ? <Header /> : <Navbar />}
      </div>
      <div className=" overflow-hidden min-h-screen">
        <Outlet />
      </div>
      <div className=" mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
