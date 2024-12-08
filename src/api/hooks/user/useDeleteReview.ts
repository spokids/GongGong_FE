
import { deleteReview } from "@api/userAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => deleteReview(reviewId),
    onSuccess: (reviewId) => {
      queryClient.invalidateQueries({ queryKey: ["review", reviewId] });
    },
  });
};

export default useDeleteReview;
