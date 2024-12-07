import { getUser } from "@api/userAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: getUser,
    select: (data) => data.data,
  });
};
