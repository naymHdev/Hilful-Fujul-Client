/* eslint-disable react/prop-types */
import Button from "../Components/Button";

const IsBanner = ({ image, btn, bottomTitle, description, headerTitle }) => {
  return (
    <div>
      <section className=" py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className=" space-y-3">
            <h2 className=" text-4xl font-bold">
              {headerTitle}
            </h2>
            <p className=" font-medium">
              {description}
            </p>
          </div>
          <div className=" mt-10">
            <Button text={btn} />
          </div>
          <p className=" text-sm mt-10">
            {bottomTitle}
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
