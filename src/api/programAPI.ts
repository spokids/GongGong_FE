// src/api/programAPI.ts

import { apiGet, apiPost } from "./apiUtil";
import { DongResponse, ProgramRequest, ProgramResponse, SigunguResponse } from "./types/program";

// 2.1 시/군/구 조회
export const getSigungu = (province: string) => {
  return apiGet<SigunguResponse>(`/program/sigungu`, {province});
}

// 2.2 동/읍/면/리 조회
export const getDong = (province: string, sigungu: string) => {
  return apiGet<DongResponse>(`/program/dong`, {province, sigungu});
}

// 2.3 프로그램 조회
export const postProgram = (data: ProgramRequest, page: number, size: number) => {
  return apiPost<ProgramResponse>(`/program?page=${page}&size=${size}`, data);
}