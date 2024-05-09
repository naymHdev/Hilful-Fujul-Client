import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import { Pagination } from "antd";
import { useState } from "react";

const OurBlogs = () => {
  const [isBlogs] = useBlogs();
  const [pages, setPages] = useState(1);
  const itemsPerPage = 4;

  const handelPageChange = (page) => {
    setPages(page);
  };

  const startIndex = (pages - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = isBlogs?.slice(startIndex, endIndex);

  return (
    <>
      <div>
        {currentProperties?.map((blog) => (
          <div key={blog?._id}>
            <div>
              <p className=" font-medium text-sm text-slate-500 py-3">
                {blog?.blog_publish_time}
              </p>
              <Link to={`${blog._id}`}>
                <h2 className=" text-2xl font-semibold underline">
                  {blog?.blog_name}
                </h2>
              </Link>
            </div>
            <hr className=" w-11/12 mt-5 md:mt-10 mb-5 md:mb-10" />
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center md:justify-end md:px-20">
        <Pagination
          onChange={handelPageChange}
          current={pages}
          pageSize={itemsPerPage}
          defaultCurrent={1}
          total={isBlogs?.length}
          showQuickJumper={false}
          showSizeChanger={false}
          itemRender={(item, type, originalElement) => (
            <li key={item.key} className="custom-bg text-white">
              {originalElement}
            </li>
          )}
        />
      </div>
    </>
  );
};

export default OurBlogs;
