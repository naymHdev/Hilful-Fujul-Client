import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useProjects = () => {
  const {
    data: isProjects = [],
    refetch,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["isProjects"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/api/projects");
      return res.data;
    },
  });

  return [isProjects, refetch, isFetching, isLoading];
};

export default useProjects;
