import useDonations from "../../Hooks/useDonations";
import DonationCard from "./DonationCard";
import { Breadcrumb } from "antd";
import bdH from "../../assets/bdh.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import IsBanner from "../../Hooks/IsBanner";

const Donations = () => {
  const [isDonations] = useDonations();

  return (
    <>
      <section className="primary-width mt-5">
        <Breadcrumb
          className="text-xl font-semibold font-joseFin"
          separator=">"
          items={[
            {
              href: "/",
              title: "Home",
            },
            {
              title: "Donation",
            },
          ]}
        />
      </section>
      <IsBanner
        image={bdH}
        description="Help others by donating to their fundraiser, or start one for
              someone you care about."
        headerTitle="Discover nonprofit fundraisers on Hilf al-Fudul"
      />
      <hr />
      <h3 className=" text-2xl md:text-4xl font-semibold  md:mt-12 mt-5">
        Browse nonprofit fundraisers
      </h3>
      <section className="primary-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 md:mt-10">
        {isDonations?.map((casus) => (
          <DonationCard key={casus?._id} casus={casus} />
        ))}
      </section>
      <section className=" py-5">
        <div className=" ">
          <p className="flex items-center gap-1 justify-end font-medium hover:text-green-600 hover:cursor-pointer">
            See more <MdKeyboardArrowRight className=" text-4xl" />
          </p>
        </div>
      </section>
    </>
  );
};

export default Donations;
