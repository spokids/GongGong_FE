import { useEffect, useState } from 'react';
import Popup from './Popup';
import { getProgramReviewList } from '@api/programAPI';
import { useParams } from 'react-router-dom';

const ReviewItem = ({
  name,
  date,
  content,
  image,
}: {
  name: string;
  date: string;
  content: string;
  image?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReportClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-1 px-4 mt-5">
      <p className="text-body8 text-foundation-100">
        {name}
        <span className="ml-2 text-caption4 text-foundation-40">{date}</span>
      </p>
      <div className="h-auto w-full gap-2 rounded-lg bg-[#F7F7F7] p-3">
        <p className="text-body9 text-foundation-100">
          {typeof content === 'string' && content.startsWith('http') ? (
            <a href={content} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            content
          )}
        </p>
        {image && <img src={image} alt="리뷰 이미지" className="mt-2" />}
        <button
          className="h-auto mt-2 underline text-button3 text-primary-foundation-50"
          onClick={handleReportClick}
        >
          신고
        </button>
      </div>

      {isModalOpen && <Popup closeModal={closeModal} />}
    </div>
  );
};

const ReviewTab = () => {
  const { programId } = useParams<{ programId: string }>();
  const [reviews, setReviews] = useState<any[]>([]);

  const fetchReviews = async (programId: string) => {
    try {
      const response = await getProgramReviewList(Number(programId), 0, 10);
      if (response.data?.reviews) {
        setReviews(response.data.reviews);
      }
    } catch (error) {
      console.error('Failed to fetch reviews', error);
    }
  };

  useEffect(() => {
    if (programId) {
      fetchReviews(programId);
    }
  }, [programId]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewItem
            key={`${review.reviewId}-${index}`}
            name={review.nickName}
            date={review.createdAt}
            content={review.content || ""}
            image={review.imageUrl}
          />
        ))
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </div>
  );
};

export default ReviewTab;
