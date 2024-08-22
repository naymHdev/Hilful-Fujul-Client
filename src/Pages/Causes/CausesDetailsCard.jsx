/* eslint-disable react/prop-types */

import DonationSection from "./DonationSection";

const CausesDetailsCard = ({ details }) => {
  const {
    projectName,
    images,
    projectDescription,
    hadiths,
    shortDescription,
    projectHighlights,
    paymentSystem,
  } = details || {};

  return (
    <>
      <div className=" mt-16">
        <h1 className=" text-4xl font-semibold text-black">{projectName}</h1>

        <section className=" grid grid-cols-1 lg:grid-cols-9 gap-4">
          <div className=" col-span-full lg:col-span-6">
            <img
              className=" mt-6 w-full h-auto rounded-3xl"
              src={images[0]?.data?.display_url}
              alt={projectName}
            />
          </div>
          <div className=" col-span-full lg:col-span-3">
            <DonationSection />
          </div>
        </section>
      </div>
    </>
  );
};

export default CausesDetailsCard;
