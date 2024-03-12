import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useComments = () => {
  const {
    data: isComments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["isComments"],
    queryFn: async () => {
      const res = PrivateAxios.get("/comments");
      return res.data;
    },
  });
  return [isComments, refetch, isLoading];
};

export default useComments;
