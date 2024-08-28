import { useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";
import CausesDetailsCard from "./CausesDetailsCard";

const CausesDetails = () => {
  const [isProjects] = useProjects();

  const { projectName } = useParams();

  const projectDetails = isProjects?.filter(
    (project) => project.projectName === projectName
  );

  return (
    <>
      <div className=" px-4 md:px-6 lg:px-10 mx-auto max-w-7xl  mt-20 md:mt-24">
        {projectDetails?.map((details) => (
          <CausesDetailsCard key={details._id} details={details} />
        ))}
      </div>
    </>
  );
};

export default CausesDetails;
