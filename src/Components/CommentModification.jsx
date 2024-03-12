/* eslint-disable react/prop-types */
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import PrivateAxios from "../Hooks/PrivateAxios";
import toast from "react-hot-toast";
import useComments from "../Hooks/useComments";

const CommentModification = ({ comment }) => {
  const [, refetch] = useComments();

  const handelDelete = async (id) => {
    const res = await PrivateAxios.delete(`/comments/${id}`);
    if (res.data.deletedCount === 1) {
      toast.success("Comment Deleted 🤓");
      refetch();
    } else {
      toast.error("Deleted failed 😟");
    }
  };

  return (
    <div>
      <div className="dropdown dropdown-left">
        <div tabIndex={0} className="">
          <PiDotsThreeOutlineVerticalThin className=" text-4xl" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Edit</a>
          </li>
          <li>
            <a>Reply</a>
          </li>
          <li onClick={() => handelDelete(comment?._id)}>
            <a>Delete</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommentModification;
