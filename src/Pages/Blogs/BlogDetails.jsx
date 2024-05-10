import { useParams } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";

const BlogDetails = () => {
  const [isBlogs] = useBlogs();
  const { id } = useParams();

  const details = isBlogs?.find((blog) => blog?._id === id);

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-7 gap-5">
        <div className=" col-span-full md:col-span-5">
          <div>
            <h2 className="text-xl md:text-3xl font-medium py-3">{details?.blog_name}</h2>
            <img
              className=" rounded-md w-full"
              src={details?.blog_image}
              alt="Blog Image"
            />
          </div>
          
        </div>
        <div className=" col-span-full md:col-span-2 border"></div>
      </div>
    </>
  );
};

export default BlogDetails;
