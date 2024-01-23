import axios from "axios";

export const imageApi = async (image) => {
  const fromData = new FormData();
  fromData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
    fromData
  );
  return data;
};