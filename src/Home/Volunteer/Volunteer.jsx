import SectionDetails from "../../Hooks/SectionDetails";
import useChairman from "../../Hooks/useChairman";
import { FaFacebookSquare, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Volunteer = () => {
  const [chairman] = useChairman();

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
            <div className="dropdown dropdown-hover" key={man._id}>
              <div tabIndex={0} className=" rounded-md">
                <img
                  className=" rounded-md w-full h-60"
                  src={man?.image}
                  alt=""
                />
              </div>
              <div tabIndex={10} className="dropdown-content z-[1]">
                <div className="list-none flex text-center items-center gap-5 justify-center w-full ml-[75px] -mt-12">
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Volunteer;
