import Marquee from "react-fast-marquee";
import SectionDetails from "../../Hooks/SectionDetails";

import im1 from "../../assets/v1.jpeg";
import im2 from "../../assets/v1.jpeg";
import im3 from "../../assets/v1.jpeg";

const OurGallery = () => {
  return (
    <>
      <section className="font-joseFin">
        <SectionDetails
          sectionName="Our Gallery"
          sectionTitle="Discover the best things we do"
          sectionDetails=" We exist for non-profits, social enterprises, community groups,
        activists,lorem politicians and individual citizens that are making."
        />
      </section>
      <section className="py-5 font-joseFin">
        <Marquee speed={100} pauseOnClick={true}>
          <img className="w-96 rounded-2xl px-2" src={im1} alt="" />
          <img className="w-96 rounded-2xl px-2" src={im2} alt="" />
          <img className="w-96 rounded-2xl px-2" src={im3} alt="" />
          <img className="w-96 rounded-2xl px-2" src={im1} alt="" />
          <img className="w-96 rounded-2xl px-2" src={im2} alt="" />
          <img className="w-96 rounded-2xl px-2" src={im3} alt="" />
          <img className="w-96 rounded-2xl px-2" src={im1} alt="" />
          <img className="w-96 rounded-2xl px-2" src={im2} alt="" />
          <img className="w-96 rounded-2xl" src={im3} alt="" />
        </Marquee>
      </section>
    </>
  );
};

export default OurGallery;
