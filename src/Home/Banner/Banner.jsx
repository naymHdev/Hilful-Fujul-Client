import video from "../../assets/hilfulfujul.mp4";
const Banner = () => {
  return (
    <div className="relative h-[100vh]">
      <video
        autoPlay
        muted
        loop
        poster="fallback-image.jpg"
        className="absolute inset-0 bg-cover w-full h-[100vh] object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Banner;
