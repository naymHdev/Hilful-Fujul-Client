import Button from "../../Components/Button";
import video from "../../assets/hilfulfujul.mp4";
const Banner = () => {
  return (
    <>
      <div className="relative h-[100vh] font-joseFin">
        <video
          autoPlay
          muted
          loop
          poster="fallback-image.jpg"
          className="absolute inset-0 bg-cover w-full h-[100vh] object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="absolute text-white md:-mt-[370px] -mt-[300px] md:px-12 px-3">
        <div className="space-y-4">
          <h3 className="md:text-5xl text-2xl font-medium">
            We help all of the <br /> people in need around <br /> the world
          </h3>
          <p className="md:font-medium font-thin">
            It is a long established fact that a reader will be page distracted
            by the <br /> readable content of a pain
          </p>
        </div>
        <div className=" md:flex flex-grow items-center gap-5 mt-4 md:mt-8">
          <Button text="Get Start A Funding" />
          <Button text="Donate Now" />
        </div>
      </div>
    </>
  );
};

export default Banner;
