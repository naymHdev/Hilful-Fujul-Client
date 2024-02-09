import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../Components/Button";
import { useState } from "react";
import PrivateAxios from "../../Hooks/PrivateAxios";
import toast from "react-hot-toast";
import { imageApi } from "../../Utils/ImageAPI/imageApi";

const JoinVolunteer = () => {
  const [loading, setLoading] = useState(false);

  //acknowledged

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const images = form.image.files[0];
    const imageURL = await imageApi(images);
    const volunteersImage = imageURL.data.display_url;
    const name = form.name.value;
    const number = form.number.value;
    const nationalId = form.nationalId.value;
    const email = form.email.value;
    const age = form.age.value;
    const currentAddress = form.currentAddress.value;
    const permanentAddress = form.permanentAddress.value;
    const birthDate = form.birthDate.value;

    const volunteersData = {
      volunteersImage,
      name,
      number,
      nationalId,
      email,
      age,
      currentAddress,
      permanentAddress,
      birthDate,
    };

    try {
      await PrivateAxios.post("/joinVolunteer", volunteersData)
        .then((res) => {
          console.log(res.data);
          toast.success("Successfully Joined a Volunteer!");
        })
        .catch((err) => {
          console.log(err);
        });
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
      <div className=" bg-slate-200 pt-16">
        <section className="md:w-9/12 mx-auto py-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border rounded-md border-slate-100 px-5 py-2 bg-slate-300"
          >
            <div className="w-full">
              <label className="label font-bold">Full Name:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name="name"
                id=""
                placeholder="type your full name"
              />
            </div>
            <div className=" w-full">
              <label className="label font-bold">Email:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="email"
                name="email"
                id=""
                placeholder="type your email"
              />
            </div>
            <div className=" w-full">
              <label className="label font-bold">Phone Number:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="number"
                name="number"
                id=""
                placeholder="type your phone number"
              />
            </div>
            <div className=" w-full">
              <label className="label font-bold">National Id:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name="nationalId"
                id=""
                placeholder="type your national id"
              />
            </div>
            <div className=" w-full">
              <label className="label font-bold">Age:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="number"
                name="age"
                id=""
                placeholder="type your age"
              />
            </div>
            <div className=" w-full">
              <label className="label font-bold">Date of birth:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name="birthDate"
                id=""
                placeholder="type your date of birth"
              />
            </div>
            <div className="w-full">
              <label className="label font-bold">Current Address:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name="currentAddress"
                id=""
                placeholder="type your current address"
              />
            </div>
            <div className="w-full">
              <label className="label font-bold">Permanent Address:</label>
              <input
                className=" p-2 border rounded-md w-full"
                type="text"
                name="permanentAddress"
                id=""
                placeholder="type your permanent address"
              />
            </div>
            <div className="w-full">
              <label className="label font-bold">Professional Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
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
