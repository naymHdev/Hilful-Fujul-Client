/* eslint-disable react/prop-types */
const Button = ({ label, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="flex items-center gap-2 border-none text-slate-100 bg-[#3BCF94] hover:bg-green-800 font-medium px-5 py-3"
    >
      <p>{label}</p>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
