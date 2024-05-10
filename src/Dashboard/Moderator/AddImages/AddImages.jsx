import { useState } from "react";

const AddImages = () => {
  const [upload, setUpload] = useState("Upload Your Image");
  const [file, setFile] = useState();

  const showImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setUpload(e.target.files[0].name.slice(0, 15));
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center mt-8">
        <div>
          <h4 className=" text-2xl text-center">Upload Images</h4>
          <div className=" border rounded-md p-8 mt-5 mb-5 shadow-md">
            <form>
              <div className="grid md:flex items-center md:gap-5">
                <div>
                  <div className=" rounded-lg text-start flex justify-start">
                    <div className="file_upload  rounded-lg">
                      <div className=" text-center">
                        <label>
                          <input
                            onChange={showImage}
                            className="text-sm cursor-pointer hidden"
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            hidden
                          />
                          <div className="bg-green-500 text-slate-700 border px-10 py-3 border-gray-300 rounded font-semibold cursor-pointer  hover:bg-rose-500">
                            {upload}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-56 mask mask-squircle avatar">
                  <img className=" rounded-md w-96 " src={file} alt="" />
                </div>
              </div>
              <div className=" flex items-center justify-center py-5">
                <button className=" rounded-md px-5 text-xl font-medium py-1 bg-green-600 hover:bg-green-500 text-slate-50">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImages;
