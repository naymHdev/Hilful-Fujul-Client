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
    </>
  );
};

export default Contact;
