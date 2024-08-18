import PropTypes from "prop-types";

const CausesCard = ({ project }) => {
  console.log(project);

  const { projectName, images } = project || {};

  console.log(images?.[0]);

  return (
    <>
      <div>
        <div>
          <img src={images?.[0]} alt={projectName} />
        </div>
        <h3 className="text-green-600">{projectName}</h3>
      </div>
    </>
  );
};

CausesCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CausesCard;
