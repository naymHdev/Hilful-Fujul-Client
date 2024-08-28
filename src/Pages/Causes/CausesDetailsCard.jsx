/* eslint-disable react/prop-types */

import { Divider } from "antd";
import DonationSection from "./DonationSection";

const CausesDetailsCard = ({ details }) => {
  const {
    projectName,
    images,
    projectDescription,
    hadiths,
    shortDescription,
    _id,
  } = details || {};

  return (
    <>
      <div className="">
        <h1 className=" text-4xl font-semibold text-black mb-4">
          {projectName}
        </h1>

        <section className=" grid grid-cols-1 lg:grid-cols-9 gap-4">
          <div className=" col-span-full lg:col-span-6 overflow-auto overflow-y-scroll h-screen overflow-x-hidden no-scrollbar">
            <img
              className=" mt-6 w-full h-auto rounded-3xl"
              src={images[0]?.data?.display_url}
              alt={projectName}
            />

            {/* Description */}
            <div className=" w-full border-b border-slate-800 my-10" />
            <div className="">
              <div
                className="prose text-black"
                dangerouslySetInnerHTML={{
                  __html: shortDescription && shortDescription,
                }}
              />
            </div>
            <Divider />
            <div className=" font-semibold text-green-700 space-y-2">
              <p>{hadiths?.firstHadith && hadiths?.firstHadith}</p>
              <p>{hadiths?.secondHadith && hadiths?.secondHadith}</p>
            </div>
            {hadiths?.firstHadith || (hadiths?.secondHadith && <Divider />)}

            <div
              className="prose mt-4"
              dangerouslySetInnerHTML={{
                __html: projectDescription && projectDescription,
              }}
            />
          </div>
          <div className=" col-span-full lg:col-span-3 mb-6">
            <DonationSection _id={_id} projectName={projectName} />
          </div>
        </section>
      </div>
    </>
  );
};

export default CausesDetailsCard;
