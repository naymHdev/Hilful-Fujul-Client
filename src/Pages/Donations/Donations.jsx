import Button from "../../Components/Button";
import useDonations from "../../Hooks/useDonations";
import DonationCard from "./DonationCard";
import { Breadcrumb } from "antd";
import bdH from "../../assets/bdh.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Donations = () => {
  const [isDonations] = useDonations();

  return (
    <>
      <section className=" mt-5">
        <Breadcrumb
          className="text-xl font-semibold"
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
      <section className=" py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className=" space-y-3">
            <h2 className=" text-4xl font-bold">
              Discover nonprofit fundraisers on Hilf al-Fudul
            </h2>
            <p className=" font-medium">
              Help others by donating to their fundraiser, or start one for
              someone you care about.
            </p>
          </div>
          <div className=" mt-10">
            <Button text="Start a Hilf al-Fudul" />
          </div>
          <p className=" text-sm mt-10">
            Sarah raised $5k to help children in need get an education.
          </p>
        </div>
        <div className=" w-full order-first md:order-last">
          <img
            className=" w-full bg-cover rounded-md h-full"
            src={bdH}
            alt=""
          />
        </div>
      </section>
      <hr />
      <h3 className=" text-2xl md:text-4xl font-semibold  md:mt-12 mt-5">
        Browse nonprofit fundraisers
      </h3>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 md:mt-10">
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
