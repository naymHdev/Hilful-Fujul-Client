/* eslint-disable react/prop-types */
import "./causes.css";

const CausesCard = ({ project }) => {
  // console.log(project);

  const { projectName, images } = project || {};

  console.log("images___", images);

  const value = 90;

  return (
    <>
      <div className="hover:bg-gray-50 rounded-2xl p-2 hover:group">
        <div className=" rounded-2xl overflow-hidden">
          <img
            className=" rounded-2xl w-full h-auto"
            src={images[0]?.data?.display_url}
            alt={projectName}
          />
        </div>
        <div className=" px-3 mt-2">
          <h3 className=" font-bold">{projectName}</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #10b981 ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CausesCard;
