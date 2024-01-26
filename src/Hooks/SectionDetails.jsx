/* eslint-disable react/prop-types */
const SectionDetails = ({sectionName, sectionTitle, sectionDetails}) => {
  return (
    <>
      <section className="mt-16">
        <div className=" text-center space-y-2 md:w-6/12 mx-auto">
          <h4 className=" text-xl font-bold text-green-500">{sectionName}</h4>
          <h2 className=" text-3xl font-bold">
            {sectionTitle}
          </h2>
          <p className=" text-slate-600">
            {sectionDetails}
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionDetails;
