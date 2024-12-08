import { useQuery } from "@tanstack/react-query";
import { getProgramReviewed } from "@api/programAPI";
import { ProgramReviewListResponse } from "@api/types/program"; // 필요에 따라 타입을 조정

export const useGetProgramReviewed = (page: number = 1, size: number = 10) => {
  return useQuery<ProgramReviewListResponse, Error>({
    queryKey: ["programReviewed", page, size], // 페이지와 사이즈에 따라 쿼리 키 설정
    queryFn: () => getProgramReviewed(page, size), // API 호출
    select: (data) => data.reviews, // 데이터를 review 배열만 추출
    keepPreviousData: true, // 페이지가 변경될 때 이전 데이터를 유지
  });
};
