import { useParams } from "react-router-dom";
import useDonations from "../../Hooks/useDonations";
import DonateForm from "./DonateForm";

const Donate = () => {
  const [isDonations] = useDonations();
  const { id } = useParams();

  const donateDetails = isDonations?.filter((item) => item._id === id);

  return (
    <>
      <section>
        {donateDetails?.map((donate) => (
          <DonateForm key={donate._id} donate={donate} />
        ))}
      </section>
    </>
  );
};

export default Donate;
