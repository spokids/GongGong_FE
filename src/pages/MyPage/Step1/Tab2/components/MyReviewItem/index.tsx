import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import useDeleteReview from "@api/hooks/user/useDeleteReview";

interface MyReviewItemProps {
  reviewId: number;
  programName: string;
  createdAt: string;
  content: string;
  imageUrl?: string | null;
}

const MyReviewItem: React.FC<MyReviewItemProps> = ({
  programName,
  createdAt,
  content,
  imageUrl,
  reviewId
}) => {
  const { mutate } = useDeleteReview();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleDelete = () => {
    mutate(reviewId, {
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
    <div className="flex flex-col gap-1 mt-5">
      <p className="text-foundation-100 text-body8">
        {programName}
        <span className="ml-2 text-caption4 text-foundation-40">{createdAt}</span>
      </p>
      <div className="w-full h-auto rounded-lg bg-[#F7F7F7] p-3 gap-2">
        <p className="text-body9 text-foundation-100">{content}</p>
        {imageUrl && <img src={imageUrl} alt="리뷰 이미지" className="mt-2" />}
        <button
          onClick={handleDelete}
          className="h-auto mt-2 underline text-primary-foundation-50 text-button3"
        >
          삭제
        </button>
      </div>
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

export default MyReviewItem;
