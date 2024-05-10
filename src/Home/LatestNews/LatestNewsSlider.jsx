import useBlogs from "../../Hooks/useBlogs";
import { CgCalendarDates } from "react-icons/cg";
import Slider from "react-slick";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestNewsSlider = () => {
  const [isBlogs] = useBlogs();
  //   console.log(isBlogs);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
          {isBlogs?.map((blog) => (
            <div key={blog?._id} className=" p-2">
              <div>
                <img
                  className=" rounded-t-2xl hover:rounded-none w-full"
                  src={blog?.blog_image}
                  alt=""
                />
              </div>
              {/* Details */}
              <div className="p-2 bg-slate-100  rounded-b-md hover:shadow-md hover:shadow-green-200">
                <div className=" flex items-center justify-between text-slate-500">
                  <div className=" flex items-center gap-1 font-thin">
                    <CgCalendarDates className=" text-[#1F803D]" />
                    <p>{blog?.blog_publish_time}</p>
                  </div>
                  <div className=" flex items-center gap-1">
                    <FaUser className=" text-[#1F803D]" />
                    <p className=" text-sm font-thin">
                      {blog?.blog_metadata?.author}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className=" text-2xl font-medium py-2">
                    {blog?.blog_name}
                  </h2>
                  <p className=" text-sm text-slate-500">
                    {blog?.blog_conclusions.slice(0, 150)}...
                  </p>
                </div>
                <div className=" mt-2">
                  <Link to={`/blogDetails/${blog?._id}`}>
                    <button className="hover:border hover:border-green-600 hover:rounded-full px-4 py-3 text-green-400 hover:text-green-700 text-xl font-medium">
                      Read more...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default LatestNewsSlider;
