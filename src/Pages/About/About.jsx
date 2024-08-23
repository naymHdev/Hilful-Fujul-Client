import bannerImage from "../../assets/about - banner - image.jpeg";
import map from "../../assets/aboutUS.jpeg";
import { BiSolidSquareRounded } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className=" flex items-center justify-center mt-28">
        <h1 className=" text-3xl font-extrabold">About Hilf al-Fudul</h1>
      </div>
      <div className=" mt-20">
        <img className=" w-full rounded-md h-full" src={bannerImage} alt="" />
      </div>
      <div className=" space-y-8 mt-16 text-slate-600 text-2xl font-mono w-10/12 mx-auto">
        <p>
          There’s a part of every one of us that dreams of a better world. That
          spark of inspiration to help a person, fix a neighborhood, or even
          change a nation. At Hilf al-Fudul, we empower both individuals and
          nonprofits to turn compassion into action. Because that is how change
          happens.
        </p>
        <p>
          With fundraising for all, we are creating the giving layer of the
          internet: a space where individuals, teams, organizations, and
          nonprofits can champion causes that matter and raise money to make a
          lasting difference. Through Hilf al-Fudul, people and organizations
          have the tools they need to share their cause far and wide and harness
          the power of generosity. We are transforming the way people give and
          changing lives—are you ready to join us?
        </p>
      </div>
      <div className=" mt-20">
        <div className="md:w-9/12 mx-auto px-5 py-8 md:px-20 md:py-24 border shadow-md rounded-md">
          <div className=" flex items-center justify-center">
            <h1 className="text-[#28A16A] text-2xl font-extrabold">
              Hilf al-Fudul
            </h1>
          </div>
          <p className="text-sm font-thin mt-10">
            Launched in 2010, Hilf al-Fudul is the world’s largest social
            fundraising platform. With over $9 billion raised from more than 120
            million donations, we’re on a mission to help people fundraise for
            personal, business, and charitable causes.
          </p>
          <div className=" mt-8 flex items-center justify-center">
            <button className="text-[#28A16A] hover:bg-[#28A16A] hover:text-slate-50 border border-[#28A16A] px-3 py-2 rounded-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-20">
        <div className=" w-11/12 mx-auto">
          <img className=" w-full h-full" src={map} alt="" />
          <div className=" text-sm mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <BiSolidSquareRounded className=" text-2xl text-green-500" />
              <p>Can organize and donate</p>
            </div>

            <div className=" flex items-center gap-2">
              <BiSolidSquareRounded className=" text-2xl text-green-300" />
              <p>Can donate</p>
            </div>

            <div className=" flex items-center gap-2">
              <BiSolidSquareRounded className=" text-2xl text-gray-400" />
              <p>Not supported</p>
            </div>

            <div className=" flex items-center gap-2">
              <BiSolidSquareRounded className=" text-2xl text-green-800" />
              <p>Hilf al-Fudul offices</p>
            </div>
          </div>
        </div>
      </div>
      <section className=" mt-20">
        <h3 className=" text-center text-3xl font-extrabold">
          The Hilf al-Fudul difference
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:w-10/12 mx-auto">
          <div>
            <h4 className=" text-2xl font-bold">Trust</h4>
            <p className=" font-thin mt-5">
              Our Trust & Safety team works around the clock to ensure your
              safety and protect against fraud. We also provide the industry’s
              first and only donor protection guarantee. With eight years of
              experience and the most money raised, GoFundMe has earned the
              trust of respected institutions and government officials around
              the world.
            </p>
          </div>
          <div>
            <h4 className=" text-2xl font-bold">Speed</h4>
            <p className=" font-thin mt-5">
              We’ve helped families and communities get back on their feet
              quickly. In just the first 30 days following Hurricane Harvey,
              GoFundMe delivered over $27 million directly to people affected by
              the storm.
            </p>
          </div>
          <div>
            <h4 className=" text-2xl font-bold">Reach</h4>
            <p className=" font-thin mt-5">
              GoFundMe helps you easily share your story far and wide over
              email, text, and social media to rally support for your cause. In
              addition, we have a dedicated team looking for great stories to
              amplify and share with the media and our community.
            </p>
          </div>
        </div>
        <div className=" mt-8 flex items-center justify-center">
          <button className="text-[#28A16A] hover:bg-[#28A16A] hover:text-slate-50 border border-[#28A16A] px-3 py-2 rounded-sm">
            Learn more
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
