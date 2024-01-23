import { NavLink } from "react-router-dom";

const AdminRoutes = () => {
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
    </div>
  );
};

export default AdminRoutes;
