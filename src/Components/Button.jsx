/* eslint-disable react/prop-types */
const Button = ({ text, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="flex items-center gap-2 border-none text-slate-100 rounded-xl bg-[#218748] hover:bg-green-800 font-medium px-4 py-3"
    >
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
