/* eslint-disable react/prop-types */

import IsDonations from "../../Hooks/IsDonations";

const DonationCard = ({ casus }) => {
  const { image, title, _id } = casus || {};

  return (
    <>
      <section>
        <IsDonations image={image} _id={_id} title={title} />
      </section>
    </>
  );
};

export default DonationCard;
