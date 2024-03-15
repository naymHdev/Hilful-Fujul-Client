import { MdLocalPhone, MdLocationOn, MdAlternateEmail } from "react-icons/md";

const Contact = () => {
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
          <form className="md:space-y-10 space-y-5">
            <div className=" md:flex grid gap-5">
              <div className=" w-full">
                <input
                  className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className=" w-full">
                <input
                  className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                />
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
                />
              </div>
              <div className=" w-full">
                <input
                  className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  id="subject"
                />
              </div>
            </div>
            <div className=" w-full">
              <textarea
                className="bg-[#F9F9F9] w-full p-3 rounded-md border-transparent focus:outline-none focus:ring-0"
                placeholder="Write message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
                
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
