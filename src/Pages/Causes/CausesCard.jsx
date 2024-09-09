/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./causes.css";
import { Skeleton } from "antd";

const CausesCard = ({ project, isLoading }) => {
  // console.log(project);

  const { projectName, images, projectDescription, _id } = project || {};

  // Function to convert English numerals to Bangla numerals
  const convertToBanglaNumber = (num) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num.toString().replace(/\d/g, (digit) => banglaDigits[digit]);
  };

  // input range value set
  const value = 50000;
  const maxValue = 100000;
  const percentage = (value / maxValue) * 100;

  // Check if the data is still loading, show Skeleton
  if (isLoading === true) {
    return <Skeleton active />;
  }

  return (
    <>
      <Link to={`/projects/${projectName}/${_id}`}>
        <div className="rounded-2xl hover:group">
          <div className=" rounded-2xl overflow-hidden">
            <img
              className=" rounded-2xl w-full h-auto"
              src={images[0]?.data?.display_url}
              alt={projectName}
            />
          </div>
          <div className=" px-3 mt-4">
            <h3 className=" font-bold">{projectName}</h3>
            <div
              className="prose mt-2 text-sm text-gray-700"
              dangerouslySetInnerHTML={{
                __html:
                  projectDescription.length > 150
                    ? projectDescription.slice(0, 150) + "..."
                    : projectDescription,
              }}
            />
            <input
              type="range"
              min="0"
              max={maxValue}
              value={value}
              className="w-full mt-6 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
              }}
            />
            <p className=" font-bold text-sm">
              ৳ {convertToBanglaNumber(value.toLocaleString())} সংগৃহীত
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CausesCard;
