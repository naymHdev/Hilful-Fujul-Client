/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const IsBanner = ({ image, description, headerTitle }) => {
  return (
    <div>
      <section className="primary-width py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className=" space-y-5">
            <h2 className=" text-4xl font-bold">{headerTitle}</h2>
            <p className=" font-medium">{description}</p>
          </div>
          <div className=" mt-10">
            <Link to="#">
              <Button label="যোগ দিন হিলফুল ফুজুল-এ" />
            </Link>
          </div>
          <p className=" text-sm mt-10">
            মুসলমান সেই ব্যক্তি, যার হাত ও মুখ থেকে অন্য মুসলমান নিরাপদ থাকে।
          </p>
        </div>
        <div className=" w-full order-first md:order-last">
          <img
            className=" w-full object-center h-auto md:h-[550px] rounded-md"
            src={image}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default IsBanner;
