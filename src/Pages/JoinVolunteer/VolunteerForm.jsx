import { useForm } from "react-hook-form";
import { divisions } from "../../Data/data";
import { useState } from "react";
import PrivateAxios from "../../Hooks/PrivateAxios";
import toast from "react-hot-toast";

const VolunteerForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await PrivateAxios.post("/api/joinVolunteer", data);
      // console.log("joinVolunteer", res.data);
      if (res.data.acknowledged) {
        toast.success("আপনার ফর্ম জমা দেওয়া হয়েছে");
      } else {
        toast.error("আপনার ফর্ম জমা ব্যর্থ হয়েছে");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("আপনার ফর্ম জমা ব্যর্থ হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div>
            <h3 className=" text-green-800 text-2xl font-bold">
              ব্যক্তিগত তথ্য
            </h3>
            <div className=" mt-5">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="permanentDistrict"
              >
                নাম:
              </label>
              <input
                className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
                type="text"
                placeholder="Abdul Rofik Miya"
                {...register("volunteerName")}
              />
              {errors.volunteerName && (
                <p className="text-red-500 text-xs">
                  {errors.volunteerName.message}
                </p>
              )}
            </div>
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phoneNumber"
            >
              ফোন নম্বর:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="number"
              placeholder="017XXXXXXXX"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              জরুরি ফোন নম্বর:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="number"
              placeholder="017XXXXXXXX"
              {...register("emergencyPhoneNumber")}
            />
            {errors.emergencyPhoneNumber && (
              <p className="text-red-500 text-xs">
                {errors.emergencyPhoneNumber.message}
              </p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              ইমেইল:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              ফেসবুক আইডি লিংক:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="url"
              placeholder="https://www.facebook.com/hilfAlFudul"
              {...register("facebookIdLink")}
            />
            {errors.facebookIdLink && (
              <p className="text-red-500 text-xs">
                {errors.facebookIdLink.message}
              </p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              এনআইডি নম্বর:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="number"
              placeholder="90209974239"
              {...register("nidNumber")}
            />
            {errors.nidNumber && (
              <p className="text-red-500 text-xs">{errors.nidNumber.message}</p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              শিক্ষাগত তথ্য:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="text"
              placeholder="SSC, HSC, BSC, Others"
              {...register("lastEducation")}
            />
            {errors.lastEducation && (
              <p className="text-red-500 text-xs">
                {errors.lastEducation.message}
              </p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              পেশা:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="text"
              placeholder="Teacher"
              {...register("qualification")}
            />
            {errors.qualification && (
              <p className="text-red-500 text-xs">
                {errors.qualification.message}
              </p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              যে ক্ষেত্রে স্বেচ্ছাশ্রম দিতে ইচ্ছুক:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="text"
              placeholder="Teacher, Food Creator..."
              {...register("workingSector")}
            />
            {errors.workingSector && (
              <p className="text-red-500 text-xs">
                {errors.workingSector.message}
              </p>
            )}
          </div>
          <div className=" mt-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="permanentDistrict"
            >
              বিশেষ দক্ষতা:
            </label>
            <input
              className=" mt-2 px-3 py-3 border rounded-md focus:outline-none w-full"
              type="text"
              placeholder="বিশেষ দক্ষতা"
              {...register("specialWorkProficiency")}
            />
            {errors.specialWorkProficiency && (
              <p className="text-red-500 text-xs">
                {errors.specialWorkProficiency.message}
              </p>
            )}
          </div>
        </div>

        {/* স্থায়ী ঠিকানা */}
        <div>
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
              {divisions?.map((district, index) => (
                <option key={index} value={district.name}>
                  {district.bn_name}
                </option>
              ))}
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
              {divisions?.map((district, index) => (
                <option key={index} value={district.name}>
                  {district.bn_name}
                </option>
              ))}
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
              {...register("presentAddress", {
                required: "জেলা / উপজেলা প্রয়োজন",
              })}
            ></textarea>
            {errors.presentAddress && (
              <p className="text-red-500 text-xs">
                {errors.presentAddress.message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="">
        <button
          type="submit"
          className="bg-green-600 w-full text-white py-3 px-4 rounded hover:bg-green-700"
        >
          {loading ? "লোড হচ্ছে..." : "জমা দিন"}
        </button>
      </div>
    </form>
  );
};

export default VolunteerForm;
