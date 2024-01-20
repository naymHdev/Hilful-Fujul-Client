const LogIn = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const address = form.address.value;
    const age = form.age.value;
    const phone = form.phone.value;
    console.log(name, phone, email, password, address, age);
  };

  return (
    <>
      <section className="bg-[url(https://i.ibb.co/VVynJhQ/5961.jpg)] bg-cover">
        <div className=" mt-20 px-20 space-y-5">
          <div>
            <h2 className=" text-4xl font-bold text-green-400">
              Create Your Volunteer Account
            </h2>
            <h4 className=" mt-5 text-2xl font-medium">Hilf al-Fudul</h4>
          </div>
          <form onSubmit={handleSignUp} className=" w-6/12 py-20">
            <div>
              <label className="font-bold">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="type your name"
              />
            </div>
            <div>
              <label className="font-bold">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="example@yahoo.com"
              />
            </div>
            <div>
              <label className="font-bold">Your Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="***********"
              />
            </div>
            <div>
              <label className="font-bold">Phone Number</label>
              <input
                id="phone"
                type="number"
                name="phone"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="type your phone number"
              />
            </div>
            <div>
              <label className="font-bold">Age</label>
              <input
                id="number"
                type="number"
                name="age"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="type your age"
              />
            </div>
            <div>
              <label className="font-bold">Your Address</label>
              <input
                id="text"
                type="text"
                name="address"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="type your address"
              />
            </div>
            <div className=" border-none hover:bg-green-700 hover:cursor-pointer font-bold text-white bg-sky-900 rounded-full w-full flex justify-center mt-5 p-2">
              <input type="submit" value="Join Now" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LogIn;
