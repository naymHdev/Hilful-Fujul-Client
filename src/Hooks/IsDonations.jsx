/* eslint-disable react/prop-types */
import { Progress } from "antd";
import { Link } from "react-router-dom";

const IsDonations = ({ image, title, _id }) => {
  return (
    <div className="font-joseFin">
      <section className=" bg-gray-50 rounded-b-md shadow-md hover:shadow-2xl hover:rounded-none shadow-gray-400">
        <div>
          <img className="w-full h-96 rounded-md" src={image} alt="" />
        </div>
        <div className=" w-10/12 mx-auto py-5">
          <div>
            <h2 className="py-3 text-xl font-bold">{title}</h2>

            <div className="mt-5 mb-5">
              <div>
                <Progress percent={50} status="active" />
              </div>
              <div className=" flex items-center justify-between text-xs">
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
          </div>
          <div className=" flex items-center justify-center font-medium w-full">
            <Link to={`/donationDetails/${_id}`}>
              <div className="py-3 px-6 border-t text-center w-full">
                Learn More
              </div>
            </Link>
            <Link to={`/donate/${_id}`}>
              <div className="text-center bg-[#31C8CC] text-white w-full py-3 px-6">
                Donate Now
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IsDonations;
