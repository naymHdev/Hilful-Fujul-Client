import { useForm } from "react-hook-form";
import { Checkbox } from "antd";

const CreditCardForm = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-full">
      <div className="mb-6">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          type="email"
          id="email"
          className={`appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="grid md:flex gap-5 items-center mb-6">
        <div className=" w-full">
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            id="firstName"
            className={` appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
              errors.firstName ? "border-red-500" : ""
            }`}
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className=" w-full">
          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            id="lastName"
            className={` appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
              errors.lastName ? "border-red-500" : ""
            }`}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <input
          {...register("cardNumber", {
            required: "Card number is required",
            pattern: { value: /^[0-9]{16}$/, message: "Invalid card number" },
          })}
          type="text"
          id="cardNumber"
          className={`appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
            errors.cardNumber ? "border-red-500" : ""
          }`}
          placeholder="Card Number"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-xs italic">
            {errors.cardNumber.message}
          </p>
        )}
      </div>
      <div className="grid md:flex gap-5 items-center mb-6">
        <div className="w-full">
          <input
            {...register("country", { required: "Country is required" })}
            type="text"
            id="country"
            className={`appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
              errors.country ? "border-red-500" : ""
            }`}
            placeholder="Your Country"
          />
          {errors.country && (
            <p className="text-red-500 text-xs italic">
              {errors.country.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            {...register("postalCode", { required: "Postal code is required" })}
            type="text"
            id="postalCode"
            className={` appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
              errors.postalCode ? "border-red-500" : ""
            }`}
            placeholder="Your Postal Code"
          />
          {errors.postalCode && (
            <p className="text-red-500 text-xs italic">
              {errors.postalCode.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <input
          {...register("nameOnCard", { required: "Name on card is required" })}
          type="text"
          id="nameOnCard"
          className={` appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
            errors.nameOnCard ? "border-red-500" : ""
          }`}
          placeholder="Name on Card"
        />
        {errors.nameOnCard && (
          <p className="text-red-500 text-xs italic">
            {errors.nameOnCard.message}
          </p>
        )}
      </div>
      <div className="grid md:flex gap-5 items-center mb-6">
        <div className="w-full">
          <input
            {...register("expiry", {
              required: "Expiry date is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                message: "Invalid expiry date",
              },
            })}
            type="text"
            id="expiry"
            className={`appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
              errors.expiry ? "border-red-500" : ""
            }`}
            placeholder="MM/YY"
          />
          {errors.expiry && (
            <p className="text-red-500 text-xs italic">
              {errors.expiry.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            {...register("cvv", {
              required: "CVV is required",
              pattern: { value: /^[0-9]{3}$/, message: "Invalid CVV" },
            })}
            type="text"
            id="cvv"
            className={`appearance-none border border-gray-400 rounded-xl w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
              errors.cvv ? "border-red-500" : ""
            }`}
            placeholder="CVV"
          />
          {errors.cvv && (
            <p className="text-red-500 text-xs italic">{errors.cvv.message}</p>
          )}
        </div>
      </div>
      <section className=" py-5 space-y-2">
        <Checkbox onChange={onChange}>
          তহবিল সংগ্রহকারীতে আমার নাম সর্বজনীনভাবে প্রদর্শন করবেন না।
        </Checkbox>
        <Checkbox onChange={onChange}>
          হিলফ আল-ফুদুল থেকে মাঝে মাঝে মার্কেটিং আপডেট পান। আপনি যদি চান, যেকোনো
          সময় সদস্যতা ত্যাগ করতে পারেন।
        </Checkbox>
      </section>
      <hr className=" py-2" />
      <button
        type="submit"
        className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-3 px-4 rounded-2xl focus:outl4ne-none focus:shadow-outline"
      >
        দান করুন
      </button>
      <div className=" text-sm text-slate-600 font-medium py-5">
        আপনি উপরের পেমেন্ট পদ্ধতি নির্বাচন করে, হিলফ আল-ফুদুলের সেবার{" "}
        <a className=" underline text-black" href="#">
          শর্তাবলীর{" "}
        </a>
        সাথে সম্মত হচ্ছেন এবং{" "}
        <a className=" underline text-black" href="#">
          গোপনীয়তা নোটিশটি{" "}
        </a>{" "}
        মেনে নিচ্ছেন।{" "}
        <a className=" underline text-black" href="#">
          মূল্য নির্ধারণ এবং ফি
        </a>{" "}
        সম্পর্কে আরও জানুন।
      </div>
    </form>
  );
};

export default CreditCardForm;
