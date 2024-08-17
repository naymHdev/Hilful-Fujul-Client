import { threeTopics } from "../../Data/data";

const Save = () => {
  return (
    <>
      <div className=" px-4 md:px-6 lg:px-10 max-w-7xl mx-auto mt-28">
        <section className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {threeTopics?.map((itm, index) => (
            <div key={index} className=" flex gap-8">
              <div>
                <img className="w-56" src={itm.icon} alt="" />
              </div>
              <div>
                <h3 className=" text-3xl font-extrabold">{itm.title}</h3>
                <p className=" font-medium mt-4 leading-7">{itm.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Save;
