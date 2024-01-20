import Button from "../../Components/Button";

/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <div className="flex justify-center gap-10 py-10">
      <div className="flex-1">
        <h2 className="text-green-500 font-bold">About us</h2>
        <div className="mt-5 space-y-2">
          <h3 className="text-4xl font-bold">We're for social causes</h3>
          <p>
            Passionate about making a difference? So are we. We champion social
            causes that improve lives and build a better future.Equality,
            justice, and a sustainable world - we fight for these values through
            the power of social causes. Join us in changing the world.
          </p>
          <div className=" space-y-4 mt-5">
            <div className="flex items-center gap-3 font-medium">
              <div className=" rounded-full bg-purple-400 p-1 text-white">
                01
              </div>
              <div>
                <p>Raise money from different sources</p>
              </div>
            </div>
            <div className=" flex items-center gap-3 font-medium">
              <div className=" rounded-full bg-purple-400 p-1 text-white">
                02
              </div>
              <div>
                <p>Gather all the money and giving relief in need</p>
              </div>
            </div>
            <div className=" flex items-center gap-3 font-medium">
              <div className=" rounded-full bg-purple-400 p-1 text-white">
                03
              </div>
              <div>
                <p>Giving relief in rural area all over the world</p>
              </div>
            </div>
            <div className=" flex items-center gap-3 font-medium">
              <div className=" rounded-full bg-purple-400 p-1 text-white">
                04
              </div>
              <div>
                <p>Go to the country that really needs help</p>
              </div>
            </div>
          </div>
          <div className=" flex justify-end mt-4">
            <Button text="Read More..." />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <img className=" rounded-tl-full" src="https://i.ibb.co/ssHVpFw/about-main2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
