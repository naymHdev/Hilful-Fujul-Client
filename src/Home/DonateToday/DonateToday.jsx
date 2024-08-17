import { useForm } from "react-hook-form";
import { FcDonate } from "react-icons/fc";

const DonateToday = () => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      amount: "100",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission
  };

  const selectedAmount = watch("amount");

  return (
    <>
      <div className=" px-4 md:px-6 lg:px-10 max-w-7xl mx-auto mt-36">
        <section className="flex-grow text-center items-center justify-center">
          <div className=" flex flex-grow text-center items-center justify-center">
            <FcDonate className="text-9xl" />
          </div>
          <div className=" mt-14 space-y-7">
            <h1 className=" text-5xl font-bold text-black md:text-7xl md:font-extrabold">
              আজ দান করুন
            </h1>
            <p className=" font-medium text-gray-700">
              আজকের একটি দান আগামীকালের সুন্দর ভবিষ্যতের ভিত্তি হতে পারে। এগিয়ে
              আসুন, এবং পরিবর্তনের পথে আপনার ভূমিকা রাখুন।
            </p>
          </div>
        </section>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex items-center justify-center gap-8 mt-10">
              <div className="grid lg:flex items-center gap-5">
                {["100", "500", "1000", "5000"].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setValue("amount", value)}
                    className={`px-4 py-2 font-bold ${
                      selectedAmount === value
                        ? "bg-green-500 text-white"
                        : " border border-black"
                    }`}
                  >
                    ৳{value}
                  </button>
                ))}
              </div>

              <div className="">
                <input
                  type="text"
                  {...register("amount")}
                  placeholder="যেকোনো পরিমাণের অনুদান..."
                  className=" border-b-2 border-black focus:outline-none py-2 px-4"
                />
              </div>
            </div>

            <div className=" mt-12 flex items-center justify-center">
              <button
                type="submit"
                className=" bg-green-500 hover:bg-green-800 hover:rounded text-white py-3 px-10 font-bold text-lg"
              >
                দান করুন
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default DonateToday;
