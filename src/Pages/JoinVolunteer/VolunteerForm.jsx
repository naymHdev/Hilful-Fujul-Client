import { useForm } from "react-hook-form";

const VolunteerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div></div>
        <div>
          {/* স্থায়ী ঠিকানা */}
          <h3 className=" text-green-800 text-2xl font-bold">স্থায়ী ঠিকানা</h3>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              জেলা / উপজেলা:
            </label>
            <select
              {...register("permanentDistrict", {
                required: "জেলা / উপজেলা প্রয়োজন",
              })}
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
            >
              <option value="">জেলা/উপজেলা নির্বাচন করুন</option>
              {/* Add more options here */}
            </select>
            {errors.permanentDistrict && (
              <p className="text-red-500 text-xs">
                {errors.permanentDistrict.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <p className=" font-medium text-black">ঠিকানা :</p>
            <textarea
              className="mt-2 w-full px-3 py-3 border rounded-md focus:outline-none"
              name=""
              placeholder="হোসেনগড়, ভিতরগড়"
              {...register("permanentAddress", {
                required: "হোসেনগড়, ভিতরগড়",
              })}
            ></textarea>
            {errors.permanentDistrict && (
              <p className="text-red-500 text-xs">
                {errors.permanentAddress.message}
              </p>
            )}
          </div>
          {/* বর্তমান ঠিকানা */}
          <h3 className=" text-green-800 text-2xl font-bold mt-8">
            বর্তমান ঠিকানা
          </h3>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="presentDistrict"
            >
              জেলা / উপজেলা:
            </label>
            <select
              {...register("presentDistrict", {
                required: "জেলা / উপজেলা প্রয়োজন",
              })}
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
            >
              <option value="">জেলা/উপজেলা নির্বাচন করুন</option>
              {/* Add more options here */}
            </select>
            {errors.permanentDistrict && (
              <p className="text-red-500 text-xs">
                {errors.permanentDistrict.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <p className=" font-medium text-black">ঠিকানা :</p>
            <textarea
              className="mt-2 w-full px-3 py-3 border rounded-md focus:outline-none"
              name=""
              id=""
            ></textarea>
            {errors.permanentDistrict && (
              <p className="text-red-500 text-xs">
                {errors.permanentDistrict.message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Submit Button */}
      {/* <div className="mt-4">
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          আমাদের স্বেচ্ছাসেবী হিসেবে নিবন্ধন দিন
        </button>
      </div> */}

      {/* Disclaimer and Notes */}
      <div className="mt-4 text-center text-red-500 text-sm">
        {/* * ফর্মের সমস্ত ক্ষেত্র পূরণ করা আবশ্যক। অনুগ্রহ করে সাবধান থাকুন। */}
      </div>
    </form>
  );
};

export default VolunteerForm;
