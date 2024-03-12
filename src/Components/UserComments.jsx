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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CqzrVklCQOvwCPHw4Rk31x8xhLMwlHtxEg&usqp=CAU" alt="user image" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className=" text-2xl font-semibold">{comment?.name}</h3>
                <h4 className="text-sm">{comment?.postTime}</h4>
                <p className="mt-3">{comment?.comment}</p>
              </div>
            </div>
            <div className="absolute md:right-[430px] right-[10px] md:-mt-[110px] -mt-[120px] hover:cursor-pointer">
              <CommentModification comment={comment} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default UserComments;
