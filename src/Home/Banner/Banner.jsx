import Slider from "react-slick";
import banner1 from "../../../src/assets/sliderB1.jpg";
import banner2 from "../../../src/assets/sliderB2.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
          <div className=" relative">
            <img
              className=" w-full h-full object-cover object-center"
              src={banner1}
              alt="Slider Banner"
            />
            <div className="">
              
            </div>
          </div>
          <div>
            <img
              className=" w-full h-full object-cover object-center"
              src={banner2}
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
