import { Link } from "react-router-dom";
import logo from "../../../src/assets/hilful-fujul-logo.png";
import Button from "../../Components/Button";

const LogoBar = () => {
  return (
    <div className="absolute top-24 w-full">
      <div className="hidden lg:flex items-center justify-between w-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <section className="flex items-center">
          <div>
            <Link to="/">
              <img className="w-32 h-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <Link to="/">
            <div className="col text-center space-y-2">
              <h2 className="text-4xl font-bold text-white">হিলফুল ফুজুল</h2>
              <p className="text-[#3BCF94] font-medium">
                সমাজ কল্যাণ ফাউন্ডেশন
              </p>
            </div>
          </Link>
        </section>
        <section className="flex items-center space-x-10">
          <div className="space-y-2 text-start">
            <h4 className="text-2xl font-bold text-white">10,000+</h4>
            <p className="font-medium">চারাগাছ রোপন</p>
          </div>
          <div className="space-y-2 text-start">
            <h4 className="text-2xl font-bold text-white">1,000+</h4>
            <p className="font-medium">শীতবস্ত্র বিতরণ</p>
          </div>
          <div className="space-y-2 text-start">
            <h4 className="text-2xl font-bold text-white">12,000+</h4>
            <p className="font-medium">বই-পুস্তক লিফলেট বিতরণ</p>
          </div>
          <div>
            <Button label="দান করুন" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogoBar;
