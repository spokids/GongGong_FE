import { getScrap } from "@api/userAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetScrap = (lastScrapId?: number) => {
  return useQuery({
    queryKey: ["scrap", lastScrapId],
    queryFn: () => getScrap(lastScrapId),
    select: (data) => data.data, 
  });
};
