import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import { useState } from "react";
import PrivateAxios from "../../Hooks/PrivateAxios";
import toast from "react-hot-toast";
import { imageApi } from "../../Utils/ImageAPI/imageApi";

const JoinVolunteer = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const images = e.target.image.files[0];
    const imageURL = await imageApi(images);
    const product_image = imageURL.data.display_url;
    console.log(data);
    try {
      await PrivateAxios.post("/joinVolunteer", data, product_image);
      toast.success("Successfully Joined a Volunteer!");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <span className="loading loading-ring loading-lg flex h-screen"></span>
    );
  }

  return (
    <>
      <section className="bg-[url(https://i.ibb.co/1vTMr1X/group-volunteers-nature.jpg)] w-full bg-cover">
        <div className=" flex items-center gap-2 justify-center py-40 font-bold text-slate-100 text-xl backdrop-blur-sm">
          <p className=" hover:text-green-500">
            <Link>Home</Link>
          </p>
          <p>
            <FaChevronRight />
          </p>
          <p>Join Now Be a Volunteer</p>
        </div>
      </section>
      <div className=" bg-slate-200">
        <section className="md:w-9/12 mx-auto py-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 border rounded-md border-slate-100 px-5 py-2 bg-slate-300"
          >
            <div className="w-full">
              <label className="label font-bold">Full Name:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name=""
                id=""
                placeholder="type your full name"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className=" w-full">
              <label className="label font-bold">Email:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="email"
                name=""
                id=""
                placeholder="type your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className=" w-full">
              <label className="label font-bold">Phone Number:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="number"
                name=""
                id=""
                placeholder="type your phone number"
                {...register("number", { required: true })}
              />
              {errors.number && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className=" w-full">
              <label className="label font-bold">National Id:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name=""
                id=""
                placeholder="type your national id"
                {...register("nationalId", { required: true })}
              />
              {errors.nationalId && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className=" w-full">
              <label className="label font-bold">Age:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="number"
                name=""
                id=""
                placeholder="type your age"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className=" w-full">
              <label className="label font-bold">Date of birth:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name=""
                id=""
                placeholder="type your date of birth"
                {...register("birthDate", { required: true })}
              />
              {errors.birthDate && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className="w-full">
              <label className="label font-bold">Current Address:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name=""
                id=""
                placeholder="type your current address"
                {...register("currentAddress", { required: true })}
              />
              {errors.currentAddress && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className="w-full">
              <label className="label font-bold">Permanent Address:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name=""
                id=""
                placeholder="type your permanent address"
                {...register("permanentAddress", { required: true })}
              />
              {errors.permanentAddress && (
                <span className=" text-red-600 font-medium">
                  This field is required*
                </span>
              )}
            </div>
            <div className="w-full">
              <label className="label font-bold">Professional Image:</label>
              <div className="flex items-center">
                <div className=" rounded-lg text-start flex justify-start">
                  <div className="file_upload  rounded-lg">
                    <div className=" text-center">
                      <label>
                        <input
                          onChange={(e) => handleImage(e.target.files[0])}
                          className="text-sm cursor-pointer hidden"
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                        />
                        <div>
                          <IoAddCircleOutline className="text-5xl text-green-400" />
                          <div>
                            {/* Display the image preview */}
                            {imagePreview && (
                              <div className="w-64 rounded-md">
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  className="rounded-lg"
                                  style={{ maxWidth: "100%" }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-end px-10">
              <Button text="Submit" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default JoinVolunteer;
