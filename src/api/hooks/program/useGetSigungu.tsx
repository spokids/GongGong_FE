import { useQuery } from "@tanstack/react-query";
import { getSigungu } from "@api/programAPI";

export const useGetSigungu = (province: string) => {
  return useQuery({
    queryKey: ["sigungu", province], 
    queryFn: () => getSigungu(province), 
    select: (data) => data.data?.sigungu, 
  });
};
