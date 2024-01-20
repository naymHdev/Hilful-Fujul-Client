const Work = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:flex p-2 mt-16">
        <div className=" flex-1">
          <div>
            <h5 className=" text-xl font-medium text-green-500">How we work</h5>
            <h2 className=" text-4xl font-bold mt-5">
              We exist for non-profits, <br /> social enterprises,
              <br /> community groups
            </h2>
          </div>
          {/* Explain Section */}
          <div className=" mt-12 space-y-8">
            <div>
              <div className=" flex items-center gap-3">
                <div className=" p-2 rounded-full bg-green-100 font-medium">
                  01
                </div>
                <div className=" text-2xl font-medium">
                  Raise money from different sources
                </div>
              </div>
              <p className=" mt-3">
                Crowdfund, seek grants, secure loans, reach angel investors, or
                leverage personal connections.
              </p>
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" p-2 rounded-full bg-green-100 font-medium">
                  02
                </div>
                <div className=" text-2xl font-medium">
                  Giving relief in rural area all over the world
                </div>
              </div>
              <p className=" mt-3">
                Crowdfund, seek grants, secure loans, reach angel investors, or
                leverage personal connections.
              </p>
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" p-2 rounded-full bg-green-100 font-medium">
                  03
                </div>
                <div className=" text-2xl font-medium">
                  Gather all the money and giving relief in need
                </div>
              </div>
              <p className=" mt-3">
                Crowdfund, seek grants, secure loans, reach angel investors, or
                leverage personal connections.
              </p>
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <div className=" p-2 rounded-full bg-green-100 font-medium">
                  04
                </div>
                <div className=" text-2xl font-medium">
                  Go to the country that really needs help
                </div>
              </div>
              <p className=" mt-3">
                Crowdfund, seek grants, secure loans, reach angel investors, or
                leverage personal connections.
              </p>
            </div>
          </div>
        </div>
        {/* Images Section */}
        <div className="flex-1">
          <div className="  rounded-lg flex justify-end items-end">
            <img
              className="rounded-lg w-96"
              src="https://i.ibb.co/h1M57w3/work1.jpg"
              alt=""
            />
          </div>
          <div className="w-96 rounded-lg -mt-36">
            <img
              className="rounded-lg"
              src="https://i.ibb.co/HhpQ564/work2.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
