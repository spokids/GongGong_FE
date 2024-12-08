import { useEffect, useState } from "react";
import MyReviewItem from "./components/MyReviewItem";
import { Reviews } from "@api/types/user";
import { useGetReview } from "@api/hooks/user/useGetReview";

  const MyReview = () => {
    const [reviewId, setReviewId] = useState<number | undefined>(undefined);
    const [reviews, setReviews] = useState<Reviews[]>([]);

    const { data } = useGetReview(reviewId);

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
  
  
    return (
      <div className="mb-4">
        {data &&(
        reviews.map((review, index) => (
          <MyReviewItem
            key={`${review.reviewId}-${index}`}
            reviewId={review.reviewId}
            programName={review.programName}
            createdAt={review.createdAt}
            content={review.content}
            imageUrl={review.imageUrl}
          />
        ))
        )}
      </div>
    );
  };
  
  export default MyReview;
  