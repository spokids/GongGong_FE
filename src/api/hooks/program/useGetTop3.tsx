import { useQuery } from "@tanstack/react-query";
import { getProgramTop3 } from "@api/programAPI";

export const useGetTop3 = () => {
  return useQuery({
    queryKey: [], 
    queryFn: getProgramTop3,
    select: (data) => data, 
  });
};
