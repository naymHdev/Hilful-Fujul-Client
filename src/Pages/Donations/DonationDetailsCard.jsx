import { Tab } from "@headlessui/react";
import { Progress } from "antd";

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
            <img className=" w-full h-full" src={image} alt="" />
          </div>
          {/* Tab content */}
          <div className="mt-16">
            <Tab.Group>
              <Tab.List>
                <Tab className="border rounded-3xl p-5 ">Description</Tab>
                <Tab className="border rounded-3xl p-5 ml-5 ">Donations</Tab>
                <Tab className="border rounded-3xl p-5 ml-5 ">Comments</Tab>
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
                  </section>
                </Tab.Panel>
                {/* Content 2 */}
                <Tab.Panel>Content 2</Tab.Panel>
                {/* Content 3 */}
                <Tab.Panel>Content 3</Tab.Panel>
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
