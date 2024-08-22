import { useParams } from "react-router-dom";
import DonateForm from "./DonateForm";
import useProjects from "../../Hooks/useProjects";

const Donate = () => {
  const [isProjects] = useProjects();
  const { id } = useParams();

  const donateDetails = isProjects?.filter((donate) => donate._id === id);

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
