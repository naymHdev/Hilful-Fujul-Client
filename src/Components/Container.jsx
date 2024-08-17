/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
