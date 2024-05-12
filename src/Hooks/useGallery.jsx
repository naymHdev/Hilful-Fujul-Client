import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useGallery = () => {
  const { data: isGallery = [], refetch } = useQuery({
    queryKey: ["isGallery"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/images");
      return res.data;
    },
  });
  return [isGallery, refetch];
};

export default useGallery;
