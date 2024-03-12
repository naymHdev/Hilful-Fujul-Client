import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useDonations = () => {
  const { data: isDonations = [], refetch } = useQuery({
    queryKey: ["isDonations"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/donations");
      return res.data;
    },
  });
  return [isDonations, refetch];
};

export default useDonations;
