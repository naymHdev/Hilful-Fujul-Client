import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useChairman = () => {
  const { data: chairman = [], refetch } = useQuery({
    queryKey: ["chairman"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/founders");
    //   console.log(res.data);
      return res?.data;
    },
  });
  return [chairman, refetch];
};

export default useChairman;
