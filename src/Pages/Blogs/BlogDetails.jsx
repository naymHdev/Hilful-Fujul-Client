import { useParams } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import author from "../../../public/16f8e077ff29debbf45e6b237e9bd7c7.png";

const BlogDetails = () => {
  const [isBlogs] = useBlogs();
  const { id } = useParams();

  const details = isBlogs?.find((blog) => blog?._id === id);

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-7 gap-5">
        <div className=" col-span-full md:col-span-5">
          <div>
            <h2 className="text-xl md:text-3xl font-medium py-3">
              {details?.blog_name}
            </h2>
            <img
              className="rounded-md w-full"
              src={details?.blog_image}
              alt="Blog Image"
            />
          </div>
          <div className=" space-y-5">
            <p className=" font-thin text-sm mt-2">
              {details?.blog_publish_time}
            </p>
            <p>{details?.blog_description1}</p>
            <p className=" text-2xl font-semibold">1. {details?.blog_title1}</p>
            <p>{details?.blog_description2}</p>
            <p className=" text-2xl font-semibold">2. {details?.blog_title2}</p>
            <p>{details?.blog_description3}</p>
            <p className=" text-2xl font-semibold">3. {details?.blog_title3}</p>
            <p>{details?.blog_description4}</p>
            <p className=" text-2xl font-semibold">4. {details?.blog_title4}</p>
            <p>{details?.blog_description5}</p>
            <p className=" text-2xl font-semibold">5. {details?.blog_title5}</p>
            <p>{details?.blog_conclusions}</p>
          </div>
          <div className=" grid md:flex gap-5 mt-10 bg-[#E6F6EE] rounded-md p-8">
            <div>
              <img className=" rounded-md" src={author} alt="" />
            </div>
            <div>
              <h3 className=" text-2xl font-semibold text-slate-500">
                WRITTEN BY
                <span> {details?.blog_metadata?.author.toUpperCase()}</span>
              </h3>
              <p>
                Category: <span>{details?.blog_metadata?.category}</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-full md:col-span-2 border"></div>
      </div>
    </>
  );
};

export default BlogDetails;
