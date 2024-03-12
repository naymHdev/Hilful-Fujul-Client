import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const CommentModification = () => {
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
            <a>Share</a>
          </li>
          <li>
            <a>Delete</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommentModification;
