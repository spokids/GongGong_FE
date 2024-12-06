import { apiGet, apiPost } from "./apiUtil";
import { DongResponse, ProgramRequest, ProgramResponse, SigunguResponse } from "@api/types/program";


// 2.1 시/군/구 조회
export const getSigungu = (province: string) => {
  console.log("getSigungu");
  return apiGet<SigunguResponse>(`/program/sigungu?province=${province}`);
}

// 2.2 동/읍/면/리 조회
export const getDong = (sigungu: string, province: string) => {
  console.log("전달된 province:", province);
  console.log("전달된 sigungu:", sigungu);
  console.log("완전한 URL:", `/program/dong?province=${province}&sigungu=${sigungu}`);
  
  return apiGet<DongResponse>(`/program/dong?province=${province}&sigungu=${sigungu}`);
}

// 2.3 프로그램 조회
export const postProgram = (data: ProgramRequest, page: number, size: number) => {
  return apiPost<ProgramResponse>(`/program?page=${page}&size=${size}`, data);
}