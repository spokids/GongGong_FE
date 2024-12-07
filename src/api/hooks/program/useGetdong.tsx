import { useQuery } from "@tanstack/react-query";
import { getDong } from "@api/programAPI";

export const useGetDong = (province: string, sigungu: string) => {
  return useQuery({
    queryKey: ["dong", province, sigungu],
    queryFn: () => getDong(province, sigungu),
    select: (data) => data.data?.dong,
    enabled: !!province && !!sigungu,
  });
};