import useDonations from "../../Hooks/useDonations";
import DonationCard from "./DonationCard";

const Donations = () => {
  const [isDonations] = useDonations();

  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isDonations?.map((casus) => (
          <DonationCard key={casus?._id} casus={casus} />
        ))}
      </section>
    </>
  );
};

export default Donations;
