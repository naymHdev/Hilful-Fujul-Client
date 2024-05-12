import { useState } from "react";
import { uploadImageToImgBB } from "../../../Api/Utils";
import { imagePost } from "../../../Api/Featured";
import toast from "react-hot-toast";

const AddImages = () => {
  const [uploadText, setUploadText] = useState("Upload Your Image");
  const [previewImage, setPreviewImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setPreviewImage(URL.createObjectURL(selectedImage));
    setUploadText(selectedImage.name.slice(0, 20));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedImage = formData.get("image");

    if (!selectedImage) {
      toast.error("Please select an image.");
      return;
    }

    setIsLoading(true);

    try {
      const imageUrl = await uploadImageToImgBB(selectedImage);
      const imageData = {
        photo: imageUrl?.data?.display_url,
      };
      await imagePost(imageData);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-8">
      <div>
        <h4 className="text-2xl text-center">Upload Images</h4>
        <form onSubmit={handleSubmit}>
          <div className="grid items-center">
            <div className="w-56 mask mask-squircle avatar">
              <img className="rounded-md w-96" src={previewImage} alt="" />
            </div>
            <div className="rounded-lg text-start flex justify-start">
              <div className="file_upload rounded-lg">
                <div className="text-center">
                  <label>
                    <input
                      onChange={handleImageChange}
                      className="text-sm cursor-pointer hidden"
                      type="file"
                      name="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-green-500  text-slate-100 border px-10 py-3 border-gray-300 rounded font-semibold cursor-pointer hover:bg-rose-500">
                      {isLoading ? "Uploading..." : uploadText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-5">
            <button
              type="submit"
              className="rounded-md px-5 text-xl font-medium py-1 bg-green-600 hover:bg-green-500 text-slate-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImages;
