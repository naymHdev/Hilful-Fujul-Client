import { FaSackDollar } from "react-icons/fa6";
import { SlEvent } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import useVolunteer from "../../Hooks/useVolunteer";

const Calculations = () => {
  const [volunteer] = useVolunteer();

  return (
    <div>
      <section className="primary-width mt-16 grid grid-cols-2 md:grid-cols-4 font-joseFin">
        <div className=" text-center font-medium space-y-5">
          <div className=" flex justify-center text-5xl text-green-600">
            <FaSackDollar />
          </div>
          <div>
            <div className=" text-5xl font-bold">
              <span>12</span>
              <span>K+</span>
            </div>
            <h2 className=" mt-4 text-slate-400 font-bold">
              Total fund raised
            </h2>
          </div>
        </div>
        <div className=" text-center font-medium space-y-5">
          <div className=" flex justify-center text-5xl text-green-600">
            <SlEvent />
          </div>
          <div>
            <div className=" text-5xl font-bold">
              <span>50</span>
              <span>+</span>
            </div>
            <h2 className=" mt-4 text-slate-400 font-bold">
              Successful events
            </h2>
          </div>
        </div>
        <div className=" text-center font-medium space-y-5">
          <div className=" flex justify-center text-5xl text-green-600">
            <FaUsers />
          </div>
          <div>
            <div className=" text-5xl font-bold">
              <span>{volunteer?.length}</span>
              <span>+</span>
            </div>
            <h2 className=" mt-4 text-slate-400 font-bold">
              Worldwide volunteers
            </h2>
          </div>
        </div>
        <div className=" text-center font-medium space-y-5">
          <div className=" flex justify-center text-5xl text-green-600">
            <LiaHandsHelpingSolid />
          </div>
          <div>
            <div className=" text-5xl font-bold">
              <span>1</span>
              <span>K+</span>
            </div>
            <h2 className=" mt-4 text-slate-400 font-bold">Our donner</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculations;
