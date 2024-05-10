import { useState } from "react";
import { uploadImageToImgBB } from "../../../Api/Utils";
import toast from "react-hot-toast";
import { imagePost } from "../../../Api/Featured";

const AddImages = () => {
  const [upload, setUpload] = useState("Upload Your Image");
  const [file, setFile] = useState();

  const showImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setUpload(e.target.files[0].name.slice(0, 20));
  };

  const handelImageSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const images = form.image.files[0];
    const image_url = await uploadImageToImgBB(images);
    const isInfo = {
      photo: image_url?.data?.display_url,
    };
    console.log(images, image_url, isInfo);

    try {
      await imagePost(isInfo);
      toast.success("Applied Success!");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center mt-8">
        <div>
          <h4 className=" text-2xl text-center">Upload Images</h4>
          <div>
            <form onSubmit={handelImageSubmit}>
              <div className="grid items-center">
                <div className="w-56 mask mask-squircle avatar">
                  <img className=" rounded-md w-96 " src={file} alt="" />
                </div>
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
              </div>
              <div className=" flex items-center justify-center py-5">
                <button
                  type="submit"
                  className=" rounded-md px-5 text-xl font-medium py-1 bg-green-600 hover:bg-green-500 text-slate-50"
                >
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
