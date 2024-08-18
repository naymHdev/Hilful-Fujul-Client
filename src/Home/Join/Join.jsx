const Join = () => {
  return (
    <>
      <div className="bg-[#FEF0E7] pt-20 pb-8 mt-32">
        <div className=" px-4 md:px-6 lg:px-10 mx-auto max-w-7xl">
          <section className=" md:flex justify-between gap-10">
            <div className=" flex-1 order-first md:order-last">
              <img
                className=" w-full h-full mx-auto"
                src="/src/assets/join-volunteer .jpg"
                alt="Volunteers join image"
              />
            </div>
            <div className=" flex-1 mt-10 md:mt-0">
              <h2 className=" text-4xl font-extrabold text-green-600">
                সমাজের ভবিষ্যৎ রক্ষায় <br /> আসুন সহায়তা করি
              </h2>
              <p className=" mt-8 text-xl font-medium text-gray-800 leading-8">
                বাংলাদেশে চ্যারিটি আইন কিছুটা পরিবর্তিত হতে পারে, তবে মূল
                নীতিগুলি একই থাকে। বেশিরভাগ চ্যারিটি প্রতিষ্ঠানগুলোর নিবন্ধন
                প্রয়োজনীয়। আইন ও বিধিনিষেধের মাধ্যমে এই সংস্থাগুলো পরিচালিত
                হয়, যাতে তারা সঠিকভাবে মানবকল্যাণে কাজ করতে পারে এবং জনসাধারণের
                জন্য সেবামূলক কার্যক্রম পরিচালনা করতে পারে।
              </p>
              <p className=" mt-8 text-gray-600">
                বাংলাদেশে চ্যারিটি সংস্থাগুলো শুধু সাহায্য প্রদানেই সীমাবদ্ধ
                নয়, বরং তারা বিভিন্ন সামাজিক সমস্যার সমাধানে প্রচারণার ভূমিকা
                গ্রহণ করতে শুরু করেছে। এসব সংস্থা নির্দিষ্ট বিষয়ে সচেতনতা
                বৃদ্ধি এবং সরকারের নীতিমালায় পরিবর্তন আনার জন্য সক্রিয়ভাবে
                লবিং করে থাকে। এর মধ্যে শিশু ও প্রাণীদের প্রতি নির্যাতন বন্ধে
                সংগঠিত প্রচারণা উল্লেখযোগ্য। এই প্রচারণাগুলো ধীরে ধীরে সফলতা
                অর্জন করছে এবং সামাজিক পরিবর্তনের দিকে এগিয়ে যাচ্ছে।
              </p>
              <div className=" mt-12">
                <button
                  type="submit"
                  className=" bg-green-500 hover:bg-green-800 hover:rounded text-white py-3 px-10 md:px-24 font-bold text-lg"
                >
                  দান করুন
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Join;
