import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Calculations from "./Calculations/Calculations";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import Join from "./Join/Join";
import Work from "./Work/Work";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Join />
      <CoreFeatures /> 
      <Calculations />
      <Work />
    </div>
  );
};

export default Home;
