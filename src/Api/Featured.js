import PrivateAxios from "../Hooks/PrivateAxios";

//// Be trainer data post in user collection
export const imagePost = async (img) => {
  const { data } = await PrivateAxios.post("/images", img);
  return data;
};
