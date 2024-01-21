import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner10 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import PrivateAxios from "../../Hooks/PrivateAxios";

const SignUp = () => {
  const { updateUser, userCreate, loading, googleJoin } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const address = form.address.value;
    const age = form.age.value;
    const phone = form.phone.value;
    try {
      await userCreate(email, password);
      await updateUser(name);
      // Post user data in MongoDB
      const userInfo = { email, address, phone, age };
      await PrivateAxios.post("/users", userInfo)
        .then((res) => {
          // console.log(res);
          if (res.data.acknowledged == true) {
            toast.success("User Account Create Success!");
            navigate("/");
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
      //Update UserInfo
    } catch (error) {
      // console.log(error);
      toast.error(error?.message);
    }
  };

  const handleGoogle = async () => {
    await googleJoin();
    toast.success("User Account Create Success!");
    navigate("/");
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
          <div className=" w-6/12 py-20">
            <form onSubmit={handleSignUp}>
              <div>
                <label className="font-bold">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                  className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                  placeholder="type your address"
                />
              </div>
              <div className=" border-none hover:bg-green-700 hover:cursor-pointer font-bold text-white bg-sky-900 rounded-full w-full flex justify-center mt-5 p-2">
                <button>
                  {loading ? (
                    <ImSpinner10 className="animate-spin m-auto" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm ">Register with social accounts</p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center text-3xl space-x-4">
              <button
                onClick={handleGoogle}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FcGoogle />
              </button>
              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-sm"
              >
                <FaSquareXTwitter />
              </button>
              <button
                aria-label="Log in with GitHub"
                className="p-3 rounded-sm"
              >
                <FaSquareGithub />
              </button>
            </div>
            <div>
              <p className="text-xs text-center sm:px-6">
                Already have an account?
                <Link to="/login">
                  <span
                    rel="noopener noreferrer"
                    href="#"
                    className="underline text-red-500"
                  >
                    Login Now
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
