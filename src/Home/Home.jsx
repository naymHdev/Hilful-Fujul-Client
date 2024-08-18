import Causes from "../Pages/Causes/Causes";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import LogoBar from "./Banner/LogoBar";
import DonateToday from "./DonateToday/DonateToday";
import Join from "./Join/Join";
import LatestNews from "./LatestNews/LatestNews";
import Save from "./Save/Save";

const Home = () => {
  return (
    <div>
      <Banner />
      <LogoBar />
      <Save />
      <DonateToday />
      <AboutUs />
      <Join />
      <Causes />
      <LatestNews />
    </div>
  );
};

export default Home;
