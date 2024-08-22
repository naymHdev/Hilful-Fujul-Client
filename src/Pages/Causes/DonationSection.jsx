const DonationSection = () => {
  // input range value set
  const value = 50000;
  const maxValue = 100000;
  const percentage = (value / maxValue) * 100;

  // Function to convert English numerals to Bangla numerals
  const convertToBanglaNumber = (num) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num.toString().replace(/\d/g, (digit) => banglaDigits[digit]);
  };

  return (
    <>
      <div className=" mt-5 md:mt-0">
        <div className="md:rounded-3xl md:shadow-lg md:px-6">
          <div className="">
            <p className=" text-xl font-semibold text-black">
              ৳ {convertToBanglaNumber(value.toLocaleString())}
              <span className=" px-1 text-sm text-gray-700 font-normal">
                টাকা সংগৃহীত
              </span>
            </p>
          </div>
          <div className="">
            <input
              type="range"
              min="0"
              max={maxValue}
              value={value}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
              }}
            />
            <p className=" text-sm text-black">100 জন দান করেছেন</p>
          </div>
          <div className=" mt-4">
            <button className="w-full bg-yellow-400 text-black font-semibold py-3 px-4 rounded-xl mb-2">
              শেয়ার করুন
            </button>
            <button className="w-full bg-orange-400 text-black font-semibold py-3 px-4 rounded-xl mb-6">
              দান করুন
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationSection;
