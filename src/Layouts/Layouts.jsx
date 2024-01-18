import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Layouts = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
