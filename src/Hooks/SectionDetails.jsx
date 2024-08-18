/* eslint-disable react/prop-types */
const SectionDetails = ({ sectionName, sectionDetails }) => {
  return (
    <>
      <section className="">
        <div className=" text-center md:text-start space-y-3">
          <h4 className="text-3xl md:text-4xl font-extrabold text-green-500">
            {sectionName}
          </h4>
          <p className=" text-slate-600 md:w-1/2 font-medium">{sectionDetails}</p>
        </div>
      </section>
    </>
  );
};

export default SectionDetails;
