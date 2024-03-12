import { Link } from "react-router-dom";
import useDonations from "../../Hooks/useDonations";
import DonationCard from "./DonationCard";

const Donations = () => {
  const [isDonations] = useDonations();

  return (
    <>
     <section className=" overflow-hidden">
        <section className="bg-[url(https://i.ibb.co/KGGzHf6/top-view-paper-hand-holding-heart-with-copy-space.jpg)] bg-cover w-full h-[40vh] md:h-[60vh]">
          <div className="md:pt-40 pt-[90px] md:px-8 px-5 mx-auto">
            <h3 className="md:text-7xl text-5xl font-bold text-green-700">Donations</h3>
          </div>
        </section>
        <div className=" text-white absolute font-bold rounded-sm p-3 right-8 md:right-16 bg-green-800 flex items-center gap-2 -mt-8">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>/</p>
          <Link to="/donations">
            <p>Donations</p>
          </Link>
        </div>
      </section>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {isDonations?.map((casus) => (
          <DonationCard key={casus?._id} casus={casus} />
        ))}
      </section>
    </>
  );
};

export default Donations;
