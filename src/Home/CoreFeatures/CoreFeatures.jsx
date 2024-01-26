import { HiOutlineHomeModern } from "react-icons/hi2";
import { CiMedicalCase } from "react-icons/ci";
import { GiFoodTruck } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import SectionDetails from "../../Hooks/SectionDetails";

const CoreFeatures = () => {
  return (
    <>
      <div>
        <SectionDetails
          sectionName="Core features"
          sectionTitle="Our goals and missions"
          sectionDetails="We exist for non-profits, social enterprises, community groups,
      activists,lorem politicians and individual citizens that are
      making."
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 md:mt-16 mt-5">
        <div className=" hover:-translate-y-12 px-3 md:py-8 p-3  border-green-400 border-2 border-dotted rounded-3xl text-center space-y-2">
          <div className=" text-3xl flex items-center justify-center">
            <div className=" rounded-full bg-[#E6E6FF] hover:bg-[#302C51] hover:text-white avatar p-5">
              <HiOutlineHomeModern />
            </div>
          </div>
          <h2 className=" text-xl font-medium text-green-500">Build home</h2>
          <p>
            Gift of money, materials, or labor to organizations that construct
            safe, affordable houses for families in need.
          </p>
        </div>
        <div className=" hover:-translate-y-12 px-3 md:py-8 p-3 border-teal-400 border-2 border-dotted rounded-3xl text-center space-y-2">
          <div className=" text-3xl flex items-center justify-center">
            <div className=" rounded-full bg-[#E6E6FF] hover:bg-[#302C51] hover:text-white avatar p-5">
              <CiMedicalCase />
            </div>
          </div>
          <h2 className=" text-xl font-medium text-green-500">
            Medical facilities
          </h2>
          <p>
            Gift of money, materials, or labor to organizations that construct
            safe, affordable houses for families in need.
          </p>
        </div>
        <div className=" hover:-translate-y-12 px-3 md:py-8 p-3  border-yellow-400 border-2 border-dotted rounded-3xl text-center space-y-2">
          <div className=" text-3xl flex items-center justify-center">
            <div className=" rounded-full bg-[#E6E6FF] hover:bg-[#302C51] hover:text-white avatar p-5">
              <GiFoodTruck />
            </div>
          </div>
          <h2 className=" text-xl font-medium text-green-500">Food & water</h2>
          <p>
            Gift of money, materials, or labor to organizations that construct
            safe, affordable houses for families in need.
          </p>
        </div>
        <div className=" hover:-translate-y-12 px-3 md:py-8 p-3 border-orange-400 border-2 border-dotted rounded-3xl text-center space-y-2">
          <div className=" text-3xl flex items-center justify-center">
            <div className=" rounded-full bg-[#E6E6FF] hover:bg-[#302C51] hover:text-white avatar p-5">
              <PiStudent />
            </div>
          </div>
          <h2 className=" text-xl font-medium text-green-500">
            Education facilities
          </h2>
          <p>
            Gift of money, materials, or labor to organizations that construct
            safe, affordable houses for families in need.
          </p>
        </div>
      </div>
    </>
  );
};

export default CoreFeatures;
