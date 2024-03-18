/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const IsBanner = ({ image, description, headerTitle }) => {
  return (
    <div>
      <section className=" py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className=" space-y-3">
            <h2 className=" text-4xl font-bold">{headerTitle}</h2>
            <p className=" font-medium">{description}</p>
          </div>
          <div className=" mt-10">
            <Link to="/donate">
              <Button text="Start a Hilf al-Fudul" />
            </Link>
          </div>
          <p className=" text-sm mt-10">
            Sarah raised $5k to help children in need get an education.
          </p>
        </div>
        <div className=" w-full order-first md:order-last">
          <img
            className=" w-full bg-cover rounded-md h-full"
            src={image}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default IsBanner;
