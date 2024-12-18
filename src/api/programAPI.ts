import { apiGet, apiPost, authApiDelete, authApiPost } from "./apiUtil";
import { DongResponse, postProgramReviewResponse, ProgramDetailResponse, ProgramRequest, ProgramResponse, ProgramReviewListResponse, SigunguResponse } from "./types/program";

export const getSigungu = (province: string) => {
  console.log("getSigungu");
  return apiGet<SigunguResponse>(`/program/sigungu?province=${province}`);
}

export const getDong = (sigungu: string, province: string) => {
  return apiGet<DongResponse>(`/program/dong?province=${province}&sigungu=${sigungu}`);
}

// 2.3 프로그램 조회
export const postProgram = (data: ProgramRequest, page: number, size: number) => {
  return apiPost<ProgramResponse>(`/program?page=${page}&size=${size}`, data);
}

export const getProgramDetail = (programId: number) => {
  return apiGet<ProgramDetailResponse>(`/program/${programId}`);
}

export const postScrap = (programId: number) => {
  return authApiPost<void>(`/program/scrap/${programId}`);
};

export const deleteScrap = (programId: number) => {
  return authApiDelete<void>(`/program/scrap/${programId}`);
}

export const getProgramReviewList = (programId: number, lastReviewId?: number, size?: number) => {
  return apiGet<ProgramReviewListResponse>(`/review/list/${programId}`, {lastReviewId, size});
}

// 2.7 프로그램 후기 추가
export const PostProgramReview = (programId: number, content: string, image?: File) => {
  const formData = new FormData();
  formData.append("content", content);
  if (image) {
    formData.append("image", image);
  }

  return authApiPost<postProgramReviewResponse>(`/review/${programId}`, formData, undefined);
  // 자동으로 headers에 multipart/form-data 설정되지 않을 경우
  // return tokenInstance.post<postProgramReviewResponse>(`/review/${programId}`, formData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // });
};

export const getProgramTop3 = () => {
  return apiGet(`/program/top3`)
};


// 2.9 최신 후기 달린 프로그램 리스트 조회
export const getProgramReviewed = (page: number, size: number) => {
  return apiGet<ProgramResponse>(`/program/reviewed?page=${page}&size=${size}`);
};

// 2.10 후기 신고하기
export const postReviewReport = (reviewId: number, reports: string[]) => {
  return authApiPost<void>(`/review/report/${reviewId}`, {reports});
}