import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const MobileBanking = () => {
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission
    toast.error("দুঃখিত! উন্নয়নশীল প্রক্রিয়া কাজ চলমান!");
  };

  const selectedAmount = watch("amount");

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center justify-center gap-8 mt-10">
            <div className="flex items-center gap-2 md:gap-5">
              {["100", "500", "1000", "5000"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setValue("amount", value)}
                  className={`md:px-4 px-2 py-1 md:py-2 font-bold ${
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
    </>
  );
};

export default MobileBanking;
