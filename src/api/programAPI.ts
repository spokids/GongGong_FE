<<<<<<< HEAD
//programAPI.ts
=======
import { apiGet, apiPost } from "./apiUtil";
import { DongResponse, ProgramRequest, ProgramResponse, SigunguResponse } from "@api/types/program";

// 2.1 시/군/구 조회
export const getSigungu = (province: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
  return apiGet<SigunguResponse>(`/program/sigungu`, {province});
=======
=======
  console.log("getSigungu");
>>>>>>> c4fdecd3 (#46 [feat] 동읍면리 api 연동 완료)
  return apiGet<SigunguResponse>(`/program/sigungu?province=${province}`);
>>>>>>> 31954a58 (#46 [fix] main merge)
}

// 2.2 동/읍/면/리 조회
<<<<<<< HEAD
export const getDong = (province: string, sigungu: string) => {
  return apiGet<DongResponse>(`/program/dong`, {province, sigungu});
=======
export const getDong = (sigungu: string, province: string) => {
  console.log("전달된 province:", province);
  console.log("전달된 sigungu:", sigungu);
  console.log("완전한 URL:", `/program/dong?province=${province}&sigungu=${sigungu}`);
  
  return apiGet<DongResponse>(`/program/dong?province=${province}&sigungu=${sigungu}`);
>>>>>>> c4fdecd3 (#46 [feat] 동읍면리 api 연동 완료)
}

// 2.3 프로그램 조회
export const postProgram = (data: ProgramRequest, page: number, size: number) => {
  return apiPost<ProgramResponse>(`/program?page=${page}&size=${size}`, data);
}
>>>>>>> 53bc954b (#46 [fix] merge 오류 - 회원가입)
