import SectionDetails from "../../Hooks/SectionDetails";

const LatestNews = () => {
  return (
    <>
      <section className="px-4 md:px-6 lg:px-10 max-w-7xl mx-auto mt-32">
        <SectionDetails
          sectionName="সাম্প্রতিক সংবাদ"
          sectionDetails="আমাদের সর্বশেষ কার্যক্রম, ইভেন্ট, এবং আপডেট সম্পর্কে জানতে পড়ুন। মানবকল্যাণের পথে আমাদের যাত্রায় অংশ নিন এবং গুরুত্বপূর্ণ খবরগুলির সাথে আপডেট থাকুন।"
        />
        <div className="">{/* <LatestNewsSlider /> */}</div>
      </section>
    </>
  );
};

export default LatestNews;
