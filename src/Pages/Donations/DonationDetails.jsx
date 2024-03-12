import { Link, useParams } from "react-router-dom";
import useDonations from "../../Hooks/useDonations";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
  const [isDonations] = useDonations();
  const { id } = useParams();

  const donationDetails = isDonations?.filter((item) => item._id === id);

  return (
    <>
      <section className=" overflow-hidden">
        <section className="bg-[url(https://i.ibb.co/KGGzHf6/top-view-paper-hand-holding-heart-with-copy-space.jpg)] bg-cover w-full h-[40vh] md:h-[60vh]">
          <div className="md:pt-40 pt-[90px] md:px-8 px-5 mx-auto">
            <h3 className="md:text-7xl text-3xl font-bold text-green-700">Donations Details</h3>
          </div>
        </section>
        <div className=" text-white absolute font-bold rounded-sm p-3 right-8 md:right-16 bg-green-800 flex items-center gap-2 -mt-8">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>/</p>
          <Link to={`/donationDetails/${id}`}>
            <p>Donations Details</p>
          </Link>
        </div>
      </section>
      <section>
        {donationDetails?.map((donation) => (
          <DonationDetailsCard key={donation?._id} donation={donation} />
        ))}
      </section>
    </>
  );
};

export default DonationDetails;
