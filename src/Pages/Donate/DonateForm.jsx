/* eslint-disable react/prop-types */

import PaymentMethodTab from "./PaymentMethodTab";

const DonateForm = ({ donate }) => {
  const { images, projectName } = donate || {};

  return (
    <>
      <section className="md:w-7/12 mx-auto rounded-3xl shadow-xl p-10 mt-20 mb-8">
        <div className=" flex items-center gap-5">
          <div className="card bg-base-100 w-32 shadow-xl">
            <figure>
              <img src={images[0]?.data?.display_url} alt="Shoes" />
            </figure>
          </div>
          <h3 className="font-medium">
            আপনি সমর্থন করছেন |
            <span className=" font-bold text-slate-900"> {projectName}</span>
          </h3>
        </div>
        <hr className="mt-16 mb-16" />
        {/* Payment method*/}
        <section className="">
          <h2 className=" text-4xl font-bold text-center mb-4">
            পেমেন্ট পদ্ধতি
          </h2>
          <div className=" text-center mb-6">
            <h2 className=" text-xl font-bold">
              আপনার সামর্থ্য অনুযায়ী দান করুন
            </h2>
            <p className=" font-semibold mt-1">জাযাকাল্লাহু খাইরান</p>
          </div>
          <PaymentMethodTab />
        </section>
      </section>
    </>
  );
};

export default DonateForm;
