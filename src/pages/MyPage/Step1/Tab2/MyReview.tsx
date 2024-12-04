const MyReviewItem = ({
    programName,
    createdAt,
    content,
    imageUrl,
  }: {
    programName: string;
    createdAt: string;
    content: string;
    imageUrl?: string | null;
  }) => (
    <div className="flex flex-col gap-1 mt-5">
      <p className="text-foundation-100 text-body8">
        {programName}
        <span className="ml-2 text-caption4 text-foundation-40">{createdAt}</span>
      </p>
      <div className="w-full h-auto rounded-lg bg-[#F7F7F7] p-3 gap-2">
        <p className="text-body9 text-foundation-100">{content}</p>
        {imageUrl && <img src={imageUrl} alt="리뷰 이미지" className="mt-2" />}
        <button className="h-auto mt-2 underline text-primary-foundation-50 text-button3">삭제</button>
      </div>
    </div>
  );
  
  
  const MyReview = () => {
    const reviews = [
      {
        "reviewId": 13,
        "programName": "초등수영A(중급)*",
        "content": "내용",
        "imageUrl": null,
        "createdAt": "24.11.21"
      },
      {
        "reviewId": 12,
        "programName": "초등수영A(중급)*",
        "content": "내용",
        "imageUrl": "https://spokids-bucket.s3.ap-northeast-2.amazonaws.com/review/1ed0a066-3b6d-4382-86d8-b2414313072f",
        "createdAt": "24.11.21"
      },
      {
        "reviewId": 11,
        "programName": "초등수영A(중급)*",
        "content": "내용",
        "imageUrl": "https://spokids-bucket.s3.ap-northeast-2.amazonaws.com/review/d0d76db5-6de1-4c2e-b5ca-b9edcd8ac682",
        "createdAt": "24.11.21"
      },
    ];
  
    return (
      <div>
        {reviews.map((reviews, index) => (
          <MyReviewItem
            key={index}
            programName={reviews.programName}
            createdAt={reviews.createdAt}
            content={reviews.content}
            imageUrl={reviews.imageUrl}
          />
        ))}
      </div>
    );
  };
  
  export default MyReview;
  