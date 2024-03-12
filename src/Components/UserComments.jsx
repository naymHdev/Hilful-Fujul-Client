import useComments from "../Hooks/useComments";
import CommentModification from "./CommentModification";

const UserComments = () => {
  const [isComments] = useComments();

  return (
    <>
      <section className=" space-y-5">
        {isComments?.map((comment) => (
          <div key={comment._id} className="border rounded-md shadow-md p-5">
            <div className=" flex gap-5">
              <div>
                <div className="avatar">
                  <div className="w-24 mask mask-squircle">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className=" text-2xl font-semibold">{comment?.name}</h3>
                <h4 className="text-sm">{comment?.postTime}</h4>
                <p className="mt-3">{comment?.comment}</p>
              </div>
            </div>
            <div className="absolute right-[430px] -mt-[110px] hover:cursor-pointer">
              <CommentModification />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default UserComments;
