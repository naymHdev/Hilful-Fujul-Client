import { CiSearch } from "react-icons/ci";

const Blogs = () => {
  return (
    <>
      <section>
        <div>
          <h2 className=" text-center text-3xl font-extrabold mt-16">
            Hilf al-Fudul Fundraising Blog
          </h2>
          <p className=" font-thin text-center mt-8">
            Fundraising resources and tips to help raise more money
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <button className=" font-extrabold text-slate-50 bg-green-500 hover:bg-green-600 rounded-xl mt-8 px-4 py-3">
            Start a Hilf al-Fudul
          </button>
        </div>
        <div className="mt-10 w-5/12 mx-auto flex items-center">
          <input
            className=" bg-slate-100 border-none focus:outline-none rounded-full px-9 py-1 w-full"
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
          <CiSearch className="absolute ml-3" />
        </div>
      </section>
    </>
  );
};

export default Blogs;
