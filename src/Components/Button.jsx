import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Button = ({ label, icon: Icon, onClick, link }) => {
  return (
    <Link to={link}>
      <button
        onClick={onClick}
        type="submit"
        className="flex font-bold items-center gap-2 border-none text-slate-100 bg-[#3BCF94] hover:bg-green-800 px-5 py-3"
      >
        <p>{label}</p>
        {Icon && <Icon />}
      </button>
    </Link>
  );
};

export default Button;
