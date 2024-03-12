import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useEvents = () => {
  const { data: isEvents = [], refetch } = useQuery({
    queryKey: ["isEvents"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/events");
      return res.data;
    },
  });
  return [isEvents, refetch];
};

export default useEvents;
