import { Link } from "react-router-dom";
import "./articles.css";
import tips from "../../assets/Fundraising tips-2.png";
import ideas from "../../assets/funda-ida.jpeg";

const Articles = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-5">
        <div className=" col-span-4 border-r">
          <h4 className=" text-xl font-extrabold">All articles</h4>
        </div>
        <div className=" col-span-2">
          <h4 className=" text-xl font-extrabold">Categories</h4>
          <div className=" font-thin px-5 mt-5">
            <ul className="categoryList">
              <li>
                <Link>Charity</Link>
              </li>
              <li>
                <Link>Crowdfunding</Link>
              </li>
              <li>
                <Link>Financial Assistance</Link>
              </li>
              <li>
                <Link>Fundraiser Promotion</Link>
              </li>
              <li>
                <Link>Fundraising Strategy</Link>
              </li>
            </ul>
          </div>
          <div className=" grid space-y-10 mt-20">
            <div>
              <img className="w-full mx-auto rounded-xl" src={ideas} alt="" />
              <Link>
                <h5 className=" text-center mt-5 text-xl font-medium underline hover:text-green-500">
                  Fundraising ideas
                </h5>
              </Link>
            </div>
            <div>
              <img className="w-full mx-auto rounded-xl" src={tips} alt="" />
              <Link>
                <h5 className=" text-center mt-5 text-xl font-medium underline hover:text-green-500">
                  Fundraising tips
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
