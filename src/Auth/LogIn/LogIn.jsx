/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import { ImSpinner10 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const { userLogin, googleJoin, loading } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(email, password);
    await userLogin(email, password)
      .then(() => {
        toast.success("Login Success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
        navigate("/login");
      });
  };

  const handleGoogle = async () => {
    await googleJoin();
    toast.success("Login Success!");
    navigate("/");
  };

  return (
    <>
      <section className="bg-[url(https://i.ibb.co/VVynJhQ/5961.jpg)] bg-cover">
        <div className=" mt-20 px-20 space-y-5">
          <div>
            <h2 className=" text-4xl font-bold text-green-400">
              Login Now Your Volunteer Account
            </h2>
            <h4 className=" mt-5 text-2xl font-medium">Hilf al-Fudul</h4>
          </div>
          <div className="w-6/12 py-20">
            <form onSubmit={handleLogin}>
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
              <div className=" border-none hover:bg-green-700 hover:cursor-pointer font-bold text-white bg-sky-900 rounded-full w-full flex justify-center mt-5 p-2">
                <button>
                  {loading ? (
                    <ImSpinner10 className="animate-spin m-auto" />
                  ) : (
                    "LogIn"
                  )}
                </button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm ">Login now with social accounts</p>
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
              <p className="text-xs text-slate-900 text-center sm:px-6">
                Don't have an account?
                <Link to="/signUp">
                  <span
                    rel="noopener noreferrer"
                    href="#"
                    className="underline text-red-500"
                  >
                    Sign up Now
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

export default LogIn;
