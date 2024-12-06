import { useQuery } from "@tanstack/react-query";
import { getSigungu } from "@api/programAPI";

export const useGetSigungu = () => {
  return useQuery({
    queryKey: ["sigungu"],  // 쿼리 키는 province를 포함
    queryFn: getSigungu, // getSigungu 함수 호출
    select: (data) => data.data?.sigungu, // 응답에서 sigungu 배열만 선택
  });
};
