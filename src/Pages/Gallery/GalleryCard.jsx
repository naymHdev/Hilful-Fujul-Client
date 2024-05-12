/* eslint-disable react/prop-types */
const GalleryCard = ({ itm }) => {
  const { image_link } = itm || {};

  return (
    <>
      <div className=" hover:cursor-pointer">
        <img className=" w-96 rounded-md h-64" src={image_link} alt="" />
      </div>
    </>
  );
};

export default GalleryCard;
