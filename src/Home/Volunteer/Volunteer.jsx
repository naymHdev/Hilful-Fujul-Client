import SectionDetails from "../../Hooks/SectionDetails";
import useChairman from "../../Hooks/useChairman";
import { FaFacebookSquare, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Volunteer = () => {
  const [chairman] = useChairman();
  // console.log(chairman);

  return (
    <>
      <section className="mt-16">
        <SectionDetails
          sectionName="Volunteer"
          sectionTitle="Meet our excellent volunteers"
          sectionDetails="We exist for non-profits, social enterprises, community groups, activists,lorem politicians and individual citizens that are making.          "
        />
      </section>
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-3 py-8 gap-10">
          {chairman?.slice(0, 3).map((man) => (
            <div
              className="dropdown dropdown-hover shadow-md rounded-xl hover:shadow-green-300"
              key={man._id}
            >
              <div tabIndex={0} className=" rounded-md">
                <img className=" rounded-md w-full" src={man?.image} alt="" />
              </div>
              <div tabIndex={10} className="dropdown-content z-[1]">
                <div className="list-none flex text-center items-center gap-5 justify-center w-full ml-[67px] -mt-12">
                  <li className="rounded-full bg-[#1F2937] p-2">
                    <a href={man?.facebookId}>
                      <FaFacebookSquare className=" text-xl text-sky-400 hover:cursor-pointer" />
                    </a>
                  </li>
                  <li className="rounded-full bg-[#1F2937] p-2">
                    <a href={man?.twitter}></a>
                    <FaTwitter className=" text-xl text-sky-400 hover:cursor-pointer" />
                  </li>
                  <li className="rounded-full bg-[#1F2937] p-2">
                    <a href={man?.whatsApp}></a>
                    <FaWhatsapp className=" text-xl text-green-400 cursor-pointer" />
                  </li>
                </div>
              </div>
              <div className=" text-center py-3">
                <h2 className=" text-xl font-medium">{man?.name}</h2>
                <h2 className=" text-green-600 text-xl font-bold">
                  {man?.role}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Volunteer;
