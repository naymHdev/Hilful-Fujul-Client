import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useComments = () => {
  const { data: isComments = [], refetch } = useQuery({
    queryKey: ["isComments"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/comments");
      return res.data;
    },
  });
  return [isComments, refetch];
};

export default useComments;
