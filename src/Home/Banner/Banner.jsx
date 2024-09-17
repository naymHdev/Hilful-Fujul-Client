import Slider from "react-slick";
import banner1 from "../../../src/assets/sliderB1.jpg";
import banner2 from "../../../src/assets/sliderB2.jpg";
import "./banner.css";
import Button from "../../Components/Button";
import { SiHelpscout } from "react-icons/si";

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className=" relative md:h-full h-[400px]">
            <img
              className=" w-full h-full object-cover object-center"
              src={banner1}
              alt="Slider Banner"
            />
            <div className=" text-white absolute flex flex-col space-y-4 md:space-y-6 lg:space-y-10 items-center lg:bottom-[200px] bottom-14 md:bottom-[100px] md:left-[14px] lg:left-[200px] text-center">
              <SiHelpscout className=" lg:text-9xl text-6xl text-red-600" />
              <h2 className=" text-2xl md:text-5xl font-extrabold">
                সহমর্মিতার ছোঁয়া,{" "}
                <span className=" text-green-600">মানবতার</span> জয়
              </h2>
              <p className="font-medium lg:font-bold">
                আপনার ছোট্ট সহায়তায় গড়ে উঠতে পারে একজনের সুখী জীবন। দরিদ্র ও
                অভাবীদের পাশে দাঁড়িয়ে মানবতার সেবা করুন।
              </p>
              <Button label="যোগ দিন" />
            </div>
          </div>
          <div className=" relative md:h-full h-[400px]">
            <img
              className=" w-full h-full object-cover object-center"
              src={banner2}
              alt=""
            />
            <div className=" text-white absolute flex flex-col space-y-4 md:space-y-6 lg:space-y-10 items-center lg:bottom-[200px] bottom-14 md:bottom-[100px] md:left-[14px] lg:left-[200px] text-center">
              <SiHelpscout className="lg:text-9xl text-6xl text-green-600" />
              <h2 className="text-2xl md:text-5xl font-extrabold">
                প্রকৃতির সুরক্ষায় আপনার{" "}
                <span className=" text-red-600">অংশীদারিত্ব</span>
              </h2>
              <p className="font-medium lg:font-bold">
                আপনার সহায়তায় পরিবেশ রক্ষা করুন। একসাথে আমরা সবুজ পৃথিবী গড়তে
                পারি।
              </p>
              <Button label="যোগ দিন" />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
