// import bg from "../../../src/assets/bannerBgImage.jpg"

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-current bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/bannerBgImage.jpg'), url('/fallbackBg.jpg')`,
          backgroundColor: "#f3f4f6",
        }}
      >
        <div></div>
      </div>
    </>
  );
};

export default Banner;
