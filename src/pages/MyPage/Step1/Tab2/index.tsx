import { useEffect, useState } from "react";
import MyReviewItem from "./components/MyReviewItem";
import { Reviews } from "@api/types/user";
import { useGetReview } from "@api/hooks/user/useGetReview";
import useDeleteReview from "@api/hooks/user/useDeleteReview";
import { Snackbar } from "@mui/material";

const MyReview = () => {
  const [reviewId, setReviewId] = useState<number | undefined>(undefined);
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const { data } = useGetReview(reviewId);

  const { mutate } = useDeleteReview();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    if (data) {
      setReviews((prev) => [...prev, ...data.reviews]);
    }
  }, [data]);

  const handleScroll = () => {
    if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
    ) {
        if (data?.hasNext) {
            const lastId = reviews[reviews.length - 1]?.reviewId;
            setReviewId(lastId);
        }
    }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [reviews, data?.hasNext]);

const handleDeleteReview = (deletedReviewId: number) => {
  setReviews((prevReviews) =>
    prevReviews.filter((review) => review.reviewId !== deletedReviewId)
  );
  mutate(deletedReviewId, {
    onSuccess: () => {
      setSnackbarMessage("리뷰가 삭제되었습니다.");
      setOpenSnackbar(true);
    },
    onError: (error) => {
      setSnackbarMessage("삭제 실패");
      setOpenSnackbar(true);
    }
  });

};

const handleCloseSnackbar = () => {
  setOpenSnackbar(false);
};

  return (
    <div className="mb-4">
      {data && (
        reviews.map((review, index) => (
          <MyReviewItem
            key={`${review.reviewId}-${index}`}
            reviewId={review.reviewId}
            programName={review.programName}
            createdAt={review.createdAt}
            content={review.content}
            imageUrl={review.imageUrl}
            onDelete={handleDeleteReview}
          />
        ))
      )}
        <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      />  
    </div>
  );
};

export default MyReview;
