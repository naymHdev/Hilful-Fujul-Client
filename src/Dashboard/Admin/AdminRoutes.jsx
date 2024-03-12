import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const AdminRoutes = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handelLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
        toast.success("Logout Success!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="grid md:flex items-center">
      <li className="p-1 rounded-sm text-center">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-green-500" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="p-1 rounded-sm text-center">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-green-500" : ""
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li className="p-1 rounded-sm text-center">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-green-500" : ""
          }
          to="/dashboard/addChairman"
        >
          Add Chairman
        </NavLink>
      </li>
      <li className="p-1 rounded-sm text-center">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-green-500" : ""
          }
          to="/dashboard/addVolunteers"
        >
          Add Volunteers
        </NavLink>
      </li>
      <li className="p-1 rounded-md text-center" onClick={handelLogout}>
        <NavLink>Logout</NavLink>
      </li>
    </div>
  );
};

export default AdminRoutes;
