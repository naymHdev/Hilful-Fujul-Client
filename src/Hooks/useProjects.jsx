import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useProjects = () => {
  const { data: isProjects = [], refetch } = useQuery({
    queryKey: ["isProjects"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/api/projects");
      return res.data;
    },
  });

  return [isProjects, refetch];
};

export default useProjects;
