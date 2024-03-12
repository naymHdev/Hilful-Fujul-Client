import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useUsers = () => {
  const { data: isUsers = [], refetch } = useQuery({
    queryKey: ["isUsers"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/users");
        // console.log(res.data);
      return res?.data;
    },
  });
  return { isUsers, refetch };
};

export default useUsers;
