// src/api/programAPI.ts

import { apiGet,  } from "./apiUtil";
import { DongResponse, SigunguResponse } from "@api/types/program";

// 2.1 시/군/구 조회
export const getSigungu = (province: string) => {
  return apiGet<SigunguResponse>(`/program/sigungu`, {province});
}

// 2.2 동/읍/면/리 조회
export const getDong = (province: string, sigungu: string) => {
  return apiGet<DongResponse>(`/program/dong`, {province, sigungu});
}
