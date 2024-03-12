import IsDonations from "../../Hooks/IsDonations";
import SectionDetails from "../../Hooks/SectionDetails";
import useDonations from "../../Hooks/useDonations";

const Causes = () => {
  const [isDonations] = useDonations();

  return (
    <>
      <SectionDetails
        sectionName="Causes to care"
        sectionTitle="Be the reason of someone smiles"
        sectionDetails="We exist for non-profits, social enterprises, community groups, activists,lorem politicians and individual citizens that are making."
      />
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {isDonations?.slice(0, 6)?.map((card) => (
          <div key={card._id}>
            <IsDonations
              image={card?.image}
              title={card?.title}
              _id={card?._id}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Causes;
