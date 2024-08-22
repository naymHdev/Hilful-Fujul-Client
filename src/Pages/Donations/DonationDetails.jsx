import { useParams } from "react-router-dom";
import useDonations from "../../Hooks/useDonations";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
  const [isDonations] = useDonations();
  const { id } = useParams();

  const donationDetails = isDonations?.filter((item) => item._id === id);

  return (
    <>
      <section className="primary-width">
        {donationDetails?.map((donation) => (
          <DonationDetailsCard key={donation?._id} donation={donation} />
        ))}
      </section>
    </>
  );
};

export default DonationDetails;
