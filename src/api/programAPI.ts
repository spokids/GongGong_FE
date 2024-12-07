import { apiGet, apiPost } from "./apiUtil";
import { DongResponse, ProgramRequest, ProgramResponse, SigunguResponse } from "@api/types/program";


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