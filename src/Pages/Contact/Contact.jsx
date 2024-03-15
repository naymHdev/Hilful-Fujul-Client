import { useForm } from "react-hook-form";
import { MdLocalPhone, MdLocationOn, MdAlternateEmail } from "react-icons/md";
import PrivateAxios from "../../Hooks/PrivateAxios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await PrivateAxios.post("/contactMessage", data);
      if (res.data.acknowledged === true) {
        toast.success("Message sent✌️");
      } else {
        toast.error("Message Failed!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending the message.");
    }
  };

  return (
    <>
      <section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 md:w-7/12 mx-auto">
          <div className="space-y-2">
            <MdLocationOn className=" text-3xl  text-green-600" />
            <h3 className="text-3xl text-green-600 font-semibold">Location</h3>
            <div className="text-sm font-medium">
              <p>Tetulia, Panchagarh, Bangladesh</p>
              <p>6A, North street, Jordan</p>
            </div>
          </div>
          <div className="space-y-2">
            <MdLocalPhone className=" text-3xl  text-green-600" />
            <h3 className="text-3xl text-green-600 font-semibold">Phone</h3>
            <div className="text-sm font-medium">
              <p>+880 01575084496</p>
              <p>+ 880 01773478157</p>
            </div>
          </div>
          <div className="space-y-2">
            <MdAlternateEmail className=" text-3xl  text-green-600" />
            <h3 className="text-3xl text-green-600 font-semibold">Email</h3>
            <div className="text-sm font-medium">
              <p>habiburrahoman@gmail.com</p>
              <p>naymhossen09@gmail.com</p>
            </div>
          </div>
        </section>
      </section>
      <section className=" mt-20">
        <div>
          <h2 className=" text-3xl font-bold mb-2">Let's talk...!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            iusto possimus doloremque amet vitae facere blanditiis nulla
            explicabo obcaecati nihil ipsam deleniti nesciunt illo, non iure
          </p>
        </div>
        <div className="md:w-9/12 mx-auto mt-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:space-y-10 space-y-5"
          >
            <div className=" md:flex grid gap-5">
              <div className=" w-full">
                <input
                  className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className=" text-red-500">Place enter your name</span>
                )}
              </div>
              <div className=" w-full">
                <input
                  className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-500">Place enter your email</span>
                )}
              </div>
            </div>
            <div className=" md:flex grid gap-5">
              <div className=" w-full">
                <input
                  className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                  placeholder="Phone"
                  type="number"
                  name="phone"
                  id="phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className=" text-red-500">Place enter your phone</span>
                )}
              </div>
              <div className=" w-full">
                <input
                  className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  id="subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <span className=" text-red-500">
                    Place write your subject
                  </span>
                )}
              </div>
            </div>
            <div className=" w-full">
              <textarea
                className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                placeholder="Write message"
                name=""
                id=""
                cols="10"
                rows="5"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className=" text-red-500">Place write your message</span>
              )}
            </div>
            <div className=" flex items-center gap-2">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-success"
                  />
                </label>
              </div>
              <div>
                <p className=" text-sm font-bold">
                  Accept
                  <span className=" text-red-500"> Terms & Conditions</span> And
                  <span className=" text-red-500"> Privacy Policy</span>.
                </p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-block bg-green-500 text-white font-semibold hover:bg-green-800 rounded-full hover:shadow-2xl hover:shadow-green-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
