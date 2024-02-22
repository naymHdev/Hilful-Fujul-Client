import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../../Redux/features/counter/counterSlice";

const Blogs = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" flex items-center gap-8 h-screen">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>
          <p>{count}</p>
        </div>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(incrementByValue(3))}
        >
          Increment By Value
        </button>
      </div>
    </div>
  );
};

export default Blogs;
