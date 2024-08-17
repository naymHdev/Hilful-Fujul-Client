import { FacebookIcon, LinkedinIcon, PinterestIcon, XIcon } from "react-share";
import { MdCall } from "react-icons/md";
import Container from "../../Components/Container";

const HeaderBar = () => {
  return (
    <>
      <div className="bg-[#1F1F1F] w-full mx-auto py-6">
        <Container>
          <div className=" flex items-center justify-between">
            {/* Icons */}
            <div className=" flex items-center gap-8">
              <div className="flex items-center gap-4">
                <a href="#">
                  <FacebookIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <LinkedinIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <PinterestIcon className=" w-8 h-auto rounded-full" />
                </a>
                <a href="#">
                  <XIcon className=" w-8 h-auto rounded-full" />
                </a>
              </div>
              <div className="gap-2 flex items-center text-white">
                <MdCall className=" text-xl" />
                <p className=" text-sm">+880 0177-006-4053</p>
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderBar;
