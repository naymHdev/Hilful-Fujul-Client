import  { useState, useEffect } from "react";
import { ClockLoader } from "react-spinners";

const PrimaryLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClockLoader size={80} color="#218748" />
      </div>
    );
  }

  return children;
};

export default PrimaryLoader;
