/* eslint-disable react/prop-types */
import { Tab } from "@headlessui/react";
import { Progress } from "antd";
import Comments from "../../Components/Comments";
import Donate from "../Donate/Donate";

const DonationDetailsCard = ({ donation }) => {
  // console.log(donation);
  const {
    image,
    title,
    description_title,
    first_description,
    second_description,
    third_description,
    fourth_description,
    fifth_description,
    conditions_title,
    condition_one,
    condition_two,
    condition_three,
    condition_fourth,
    condition_fifth,
  } = donation || {};

  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-9 gap-3 mt-16">
        <section className=" col-span-6">
          <div>
            <img className=" w-full h-full md:h-[90vh]" src={image} alt="" />
          </div>
          {/* Tab content */}
          <div className="mt-16">
            <Tab.Group>
              <Tab.List>
                <Tab className="border rounded-3xl p-5 ">Description</Tab>
                <Tab className="border rounded-3xl p-5 ml-5 ">Donations</Tab>
                <Tab className="border rounded-3xl p-5 md:ml-5 mt-5 ">Comments</Tab>
              </Tab.List>
              <Tab.Panels className="mt-16">
                {/* Content 1 */}
                <Tab.Panel>
                  <section>
                    <h2 className=" text-3xl font-bold py-5">{title}</h2>
                    <div>
                      <Progress percent={50} status="active" />
                      <div className=" flex items-center justify-between text-sm md:px-10">
                        <div className=" flex items-center">
                          <p>Raised:</p>
                          <p>$7,000.00</p>
                        </div>
                        <div className=" flex items-center">
                          <p>Goal:</p>
                          <p>$10,000.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 space-y-4">
                      <h3 className="text-3xl font-bold py-5">
                        {description_title}
                      </h3>
                      <p>{first_description}</p>
                      <p>{second_description}</p>
                      <p>{third_description}</p>
                      <p>{fourth_description}</p>
                      <p>{fifth_description}</p>
                      <h3 className="text-3xl font-bold py-5">
                        {conditions_title}
                      </h3>
                      <div className=" space-y-4">
                        <p>{condition_one}</p>
                        <p>{condition_two}</p>
                        <p>{condition_three}</p>
                        <p>{condition_fourth}</p>
                        <p>{condition_fifth}</p>
                      </div>
                    </div>
                  </section>
                </Tab.Panel>
                {/* Your Donation */}
                <Tab.Panel>
                  <Donate />
                </Tab.Panel>
                {/* Leave a Comment */}
                <Tab.Panel>
                  <Comments />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
        <section className=" col-span-3"></section>
      </section>
    </>
  );
};

export default DonationDetailsCard;
