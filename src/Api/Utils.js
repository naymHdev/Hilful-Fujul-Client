import axios from "axios";

export const uploadImageToImgBB = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
      formData
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to upload image");
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
