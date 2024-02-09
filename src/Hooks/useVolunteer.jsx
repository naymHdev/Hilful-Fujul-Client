import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useVolunteer = () => {
  const { data: volunteer = [], refetch } = useQuery({
    queryKey: ["volunteer"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/joinVolunteer");
      return res?.data;
    },
  });
  return [volunteer, refetch];
};

export default useVolunteer;
