import SectionDetails from "../../Hooks/SectionDetails";
import useProjects from "../../Hooks/useProjects";
import CausesCard from "./CausesCard";

const Causes = () => {
  const [isProjects] = useProjects();

  return (
    <>
      <div className=" px-4 md:px-6 lg:px-10 max-w-7xl mx-auto mt-32">
        <SectionDetails
          sectionName="চলুন একসাথে আলোর পথে হাঁটি"
          sectionDetails="মানবতার কল্যাণে আপনার সহায়তার মাধ্যমে আমরা একটি সুন্দর, শান্তিপূর্ণ, এবং ন্যায়পরায়ণ সমাজ গড়ে তুলতে পারি। আজই এগিয়ে আসুন এবং আলোর পথে একটি পরিবর্তনের সূচনা করুন।"
        />

        <section className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isProjects?.map((project, index) => (
            <CausesCard key={index} project={project} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Causes;
