import SectionDetails from "../../Hooks/SectionDetails";
import LatestNewsSlider from "./LatestNewsSlider";

const LatestNews = () => {
  return (
    <>
      <section className="font-joseFin">
        <SectionDetails
          sectionTitle="Latest news & blog"
          sectionName="Latest charity blog"
          sectionDetails="We exist for non-profits, social enterprises, community groups, activists,lorem politicians and individual citizens that are making."
        />
        <div className=" mt-20">
          <LatestNewsSlider />
        </div>
      </section>
    </>
  );
};

export default LatestNews;
