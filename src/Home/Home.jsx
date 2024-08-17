import Causes from "../Pages/Causes/Causes";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import LogoBar from "./Banner/LogoBar";
import Calculations from "./Calculations/Calculations";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import DonateToday from "./DonateToday/DonateToday";
import Join from "./Join/Join";
import LatestNews from "./LatestNews/LatestNews";
import OurGallery from "./OurGallery/OurGallery";
import Save from "./Save/Save";
import Work from "./Work/Work";

const Home = () => {
  return (
    <div>
      <Banner />
      <LogoBar />
      <Save />
      <DonateToday />
      <AboutUs />
      {/* <Join /> */}
      <CoreFeatures />
      <Causes />
      <Calculations />
      <Work />
      <OurGallery />
      {/* <Volunteer /> */}
      <LatestNews />
    </div>
  );
};

export default Home;
