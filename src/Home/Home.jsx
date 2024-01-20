import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Calculations from "./Calculations/Calculations";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import Join from "./Join/Join";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Join />
      <CoreFeatures /> 
      <Calculations />
    </div>
  );
};

export default Home;
