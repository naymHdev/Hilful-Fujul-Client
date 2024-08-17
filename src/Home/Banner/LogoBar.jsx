import logo from "../../../src/assets/hilful-fujul-logo.png";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
const LogoBar = () => {
  return (
    <>
      <Container>
        <div className="">
          <div className="flex items-center justify-between w-full">
            <section className=" flex items-center">
              <div>
                <img className=" w-32 h-auto" src={logo} alt="Logo" />
              </div>
              <div className="col text-center space-y-2">
                <h2 className=" text-4xl font-bold">হিলফুল ফুজুল</h2>
                <p className=" text-[#3BCF94] font-medium">
                  সমাজ কল্যাণ ফাউন্ডেশন
                </p>
              </div>
            </section>
            <section className=" flex items-center space-x-10">
              <div className=" space-y-2 text-start">
                <h4 className=" text-2xl font-bold">10,000+</h4>
                <p className=" font-medium">চারাগাছ রোপন</p>
              </div>
              <div className=" space-y-2 text-start">
                <h4 className=" text-2xl font-bold">1,000+</h4>
                <p className=" font-medium">শীতবস্ত্র বিতরণ</p>
              </div>
              <div className=" space-y-2 text-start">
                <h4 className=" text-2xl font-bold">12,000+</h4>
                <p className=" font-medium">বই-পুস্তক লিফলেট বিতরণ</p>
              </div>
              <div>
                <Button label="দান করুন" />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LogoBar;
