import { getReview } from "@api/userAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetReview = (reviewId?: number) => {
  return useQuery({
    queryKey: ["review", reviewId],
    queryFn: () => getReview(reviewId),
    select: (data) => data.data, 
  });
};
