import { Steps } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import islamicHistory from "../../../src/assets/islamic-hstry-img.png";

const AboutUs = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (value) => {
    // console.log(value);
    setCurrent(value);
    toast.success("আসসালামু আলাইকুম!");
  };

  return (
    <div className="md:flex mt-28 md:mt-32 justify-between gap-16 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex-1">
        <img
          className=" w-full h-full mx-auto"
          src={islamicHistory}
          alt="Islamic Historic Image"
        />
      </div>
      <div className="flex-1 mt-14 md:mt-0">
        <h2 className=" text-4xl font-extrabold text-green-500">
          হিলফুল ফুজুল
        </h2>
        <p className=" mt-3 font-bold text-black">সমাজ কল্যাণ ফাউন্ডেশন</p>

        <div className="border-2 border-slate-600 my-5 border-dashed" />
        <p className=" font-medium text-black leading-8">
          হিলফুল ফুজুল - সমাজ কল্যাণ ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক
          প্রতিষ্ঠান যা শিক্ষা, দাওয়াহ, এবং মানবকল্যাণে নিবেদিত। আমরা মহানবী
          মুহাম্মদ (সা.)-এর আদর্শ অনুসরণ করে আর্তমানবতার সেবা, সমাজ সংস্কার, এবং
          নৈতিক মূল্যবোধের উন্মেষে কাজ করি। ফাউন্ডেশনটি দারিদ্র্য বিমোচন,
          কর্মসংস্থান সৃষ্টি, এবং ইসলামী সংস্কৃতির বিকাশে অগ্রণী ভূমিকা পালন
          করে। এছাড়াও, আমরা ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে
          স্বাস্থ্যসেবা প্রদান, এবং সমাজে সুস্থ মানসিকতার বিকাশে বিভিন্ন
          কর্মসূচি বাস্তবায়ন করি। সর্বোপরি, আমরা আল্লাহর পথে মানুষকে আহ্বান
          জানিয়ে একটি আদর্শ কল্যাণমূলক সমাজ গঠনের জন্য অবিরাম প্রচেষ্টা চালিয়ে
          যাচ্ছি।
        </p>
        <section className=" mt-5 md:mt-8">
          <Steps
            current={current}
            direction="vertical"
            onChange={onChange}
            items={[
              {
                title: "শিক্ষা",
              },
              {
                title: "সেবা",
              },
              {
                title: "দা‘ওয়াহ",
              },
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
