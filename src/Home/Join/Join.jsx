import { ImManWoman } from "react-icons/im";
import { BiDonateHeart } from "react-icons/bi";
import { GiLoveLetter } from "react-icons/gi";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <>
      <div className="text-white font-joseFin w-full mt-16 bg-cover bg-center bg-fixed bg-[url('https://i.ibb.co/ssHVpFw/about-main2.jpg')]">
        <div className="grid grid-cols-1 p-1 md:px-16 md:grid-cols-3 gap-8 items-center min-h-screen">
          <div className="hover:rounded-none bg-[#2DB187] p-6 rounded-t-3xl rounded-bl-3xl">
            <ImManWoman className=" text-5xl " />
            <div className=" mt-5 space-y-2">
              <h2 className=" text-2xl font-medium">Be a volunteer</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply rom text.
                Contrary to popular belief is not simply.
              </p>
            </div>
            <div className=" mt-5 flex justify-start">
              <Link to="/joinVolunteer">
                <Button text="Join Now" />
              </Link>
            </div>
          </div>
          <div className="hover:rounded-none bg-[#FA6015] p-6 rounded-t-3xl rounded-bl-3xl">
            <BiDonateHeart className=" text-5xl " />
            <div className=" mt-5 space-y-2">
              <h2 className=" text-2xl font-medium">Donate now</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply rom text.
                Contrary to popular belief is not simply.
              </p>
            </div>
            <div className=" mt-5 flex justify-start">
              <Link to="/donate">
                <Button text="Donate now" />
              </Link>
            </div>
          </div>
          <div className="hover:rounded-none bg-[#302C51] p-6 rounded-t-3xl rounded-bl-3xl">
            <GiLoveLetter className=" text-5xl " />
            <div className=" mt-5 space-y-2">
              <h2 className=" text-2xl font-medium">Show your love</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply rom text.
                Contrary to popular belief is not simply.
              </p>
            </div>
            <div className=" mt-5 flex justify-start">
              <Button text="Show your love" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
