/* eslint-disable react/prop-types */
const Button = ({ text, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="flex items-center gap-2 border-none text-slate-100 rounded-full bg-green-500 font-bold px-4 py-2"
    >
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
