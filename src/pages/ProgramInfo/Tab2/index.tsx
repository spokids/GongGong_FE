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
}) => (
  <div className="flex flex-col gap-1 mt-5">
    <p className="text-body8 text-foundation-100">
      {name}
      <span className="ml-2 text-caption4 text-foundation-40">{date}</span>
    </p>
    <div className="h-auto w-full gap-2 rounded-lg bg-[#F7F7F7] p-3">
      <p className="text-body9 text-foundation-100">{content}</p>
      {image && <img src={image} alt="리뷰 이미지" className="mt-2" />}
      <button className="h-auto mt-2 underline text-button3 text-primary-foundation-50">
        신고
      </button>
    </div>
  </div>
);

const ReviewTab = () => {
  const reviews = [
    {
      name: "동준맘",
      date: "2022.01.11",
      content:
        "이 체육 프로그램은 진짜 최고에요! 제 아들이 3달 수강했더니 몸짱이 되어버렸어여",
      image: "/images/reviewPhoto.png",
    },
    {
      name: "지훈아빠",
      date: "2023.03.05",
      content:
        "프로그램이 너무 좋습니다! 코치님들이 정말 친절하시고 전문성이 느껴졌어요.",
    },
    {
      name: "혜린맘",
      date: "2023.05.18",
      content: "우리 딸아이가 매일 수업 시간만 기다려요. 정말 감사합니다!",
      image: "/images/reviewPhoto.png",
    },
  ];

  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewItem
          key={index}
          name={review.name}
          date={review.date}
          content={review.content}
          image={review.image}
        />
      ))}
    </div>
  );
};

export default ReviewTab;
