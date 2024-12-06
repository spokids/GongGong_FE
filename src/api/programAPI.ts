// src/api/programAPI.ts

import { apiGet,  } from "./apiUtil";
import {  SigunguResponse } from "@api/types/program";

// 2.1 시/군/구 조회
export const getSigungu = (province: string) => {
  return apiGet<SigunguResponse>(`/program/sigungu`, {province});
}
