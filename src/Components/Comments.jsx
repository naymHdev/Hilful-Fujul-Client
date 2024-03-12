import toast from "react-hot-toast";
import PrivateAxios from "../Hooks/PrivateAxios";
import Button from "./Button";
import useComments from "../Hooks/useComments";
import moment from "moment";
import UserComments from "./UserComments";

const Comments = () => {
  const [, refetch] = useComments();
  //   console.log(isComments);

  const handelComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const comment = form.comment.value;
    const postTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    const userComment = { name, email, comment, postTime };

    try {
      const res = await PrivateAxios.post("/comments", userComment);
      if (res.data.acknowledged) {
        refetch();
        toast.success("Successfully post!");
      } else {
        toast.error("Post failed!");
      }
    } catch (error) {
      console.log("error----,", error);
      toast.error("Post failed!");
    }
  };

  return (
    <>
      <section>
        <h2 className=" text-3xl font-bold text-slate-800">Comments</h2>
        <div>
          <UserComments />
        </div>
      </section>
      <h2 className=" text-3xl font-bold text-slate-800">Leave a Comment</h2>
      <section>
        <form onSubmit={handelComment}>
          <div className="grid md:flex items-center gap-5 mt-10">
            <div className=" w-full">
              <input
                className="p-3 bg-[#F8F8F8] border w-full rounded-md"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className=" w-full">
              <input
                className="p-3 bg-[#F8F8F8] border w-full rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className=" w-full mt-5">
            <textarea
              className="p-3 bg-[#F8F8F8] border w-full rounded-md"
              name="comment"
              id="comment"
              cols="10"
              rows="7"
            ></textarea>
          </div>
          <div className="mt-5">
            <Button text="Post Now" />
          </div>
        </form>
      </section>
    </>
  );
};

export default Comments;
