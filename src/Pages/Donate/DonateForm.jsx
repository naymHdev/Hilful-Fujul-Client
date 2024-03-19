/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { InputNumber, Progress } from "antd";

const DonateForm = ({ donate }) => {
  const { image, title } = donate || {};

  return (
    <>
      <section className="w-8/12 mx-auto rounded-3xl shadow-xl bg-green-50 p-10 mt-20">
        <div className=" flex items-center gap-5">
          <div className="avatar">
            <div className="w-40 mask mask-squircle">
              <img src={image} className=" bg-cover w-full" alt="" />
            </div>
          </div>
          <h3 className="font-medium">
            You're supporting
            <span className=" font-bold text-slate-900"> {title}</span>
          </h3>
        </div>
        <section className=" mt-5">
          <h4 className=" text-xl font-bold py-4">Enter your donation</h4>
          <div className=" grid grid-cols-3 md:grid-cols-6 gap-5">
            <div className="py-3 rounded-3xl shadow-2xl text-xl font-bold text-slate-900 bg-white border text-center">
              50TK
            </div>
            <div className="py-3 rounded-3xl shadow-2xl text-xl font-bold text-slate-900 bg-white border text-center">
              100TK
            </div>
            <div className="py-3 rounded-3xl shadow-2xl text-xl font-bold text-slate-900 bg-white border text-center">
              200TK
            </div>
            <div className="py-3 rounded-3xl shadow-2xl text-xl font-bold text-slate-900 bg-white border text-center">
              300TK
            </div>
            <div className="py-3 rounded-3xl shadow-2xl text-xl font-bold text-slate-900 bg-white border text-center">
              400TK
            </div>
            <div className="py-3 rounded-3xl shadow-2xl text-xl font-bold text-slate-900 bg-white border text-center">
              500TK
            </div>
          </div>
          <div className=" mt-2">
            <InputNumber
              className="py-4"
              prefix="TK"
              style={{
                width: "100%",
                borderRadius: "15px",
              }}
            />
          </div>
          <div className="mt-5 space-y-8">
            <h3 className=" text-xl font-semibold">
              Tip Hilf Al-Fudul services
            </h3>
            <p className=" text-xs text-slate-600 font-medium">
              Hilf Al-Fudul has a 0% platform fee for organizers. Hilf Al-Fudul
              will continue offering its services thanks to donors who will
              leave an optional amount here:
            </p>
            <Progress percent={50} status="active" />
          </div>
        </section>
      </section>
    </>
  );
};

export default DonateForm;
