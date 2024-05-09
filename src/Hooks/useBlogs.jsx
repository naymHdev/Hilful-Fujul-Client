import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useBlogs = () => {
  const { data: isBlogs = [], refetch } = useQuery({
    queryKey: ["isBlogs"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/blogs");
      return res.data;
    },
  });

  return [isBlogs, refetch];
};

export default useBlogs;
