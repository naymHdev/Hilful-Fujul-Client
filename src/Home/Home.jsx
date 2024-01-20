import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Calculations from "./Calculations/Calculations";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import Join from "./Join/Join";
import LatestNews from "./LatestNews/LatestNews";
import OurGallery from "./OurGallery/OurGallery";
import Testimonials from "./Testimonials/Testimonials";
import Volunteer from "./Volunteer/Volunteer";
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
      <OurGallery />
      <Volunteer />
      <Testimonials />
      <LatestNews />
    </div>
  );
};

export default Home;
