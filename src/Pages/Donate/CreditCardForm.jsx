import { useForm } from "react-hook-form";

const CreditCardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can perform further actions like submitting data to the server here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-full">
      <div className="mb-4">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          type="email"
          id="email"
          className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="grid md:flex gap-5 items-center mb-4">
        <div className=" w-full">
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            id="firstName"
            className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
            className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
      <div className="mb-4">
        <input
          {...register("cardNumber", {
            required: "Card number is required",
            pattern: { value: /^[0-9]{16}$/, message: "Invalid card number" },
          })}
          type="text"
          id="cardNumber"
          className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
      <div className="grid md:flex gap-5 items-center mb-4">
        <div className="w-full">
          <input
            {...register("country", { required: "Country is required" })}
            type="text"
            id="country"
            className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
            className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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

      <div className="mb-4">
        <input
          {...register("nameOnCard", { required: "Name on card is required" })}
          type="text"
          id="nameOnCard"
          className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
      <div className="grid md:flex gap-5 items-center mb-4">
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
            className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
            className={`shadow appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.cvv ? "border-red-500" : ""
            }`}
            placeholder="CVV"
          />
          {errors.cvv && (
            <p className="text-red-500 text-xs italic">{errors.cvv.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outl4ne-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default CreditCardForm;
