import { apiGet, apiPost } from "./apiUtil";
import { DongResponse, ProgramRequest, ProgramResponse, SigunguResponse } from "@api/types/program";


export const getSigungu = (province: string) => {
  console.log("getSigungu");
  return apiGet<SigunguResponse>(`/program/sigungu?province=${province}`);
}

<<<<<<< HEAD
export const getDong = (sigungu: string, province: string) => {
=======
// 2.2 동/읍/면/리 조회
export const getDong = (sigungu: string, province: string) => {
<<<<<<< HEAD
  console.log("전달된 province:", province);
  console.log("전달된 sigungu:", sigungu);
  console.log("완전한 URL:", `/program/dong?province=${province}&sigungu=${sigungu}`);
  
>>>>>>> c4fdecd3 (#46 [feat] 동읍면리 api 연동 완료)
=======
>>>>>>> 83414352 (#46 [feat] 버튼 비활성화 설정)
  return apiGet<DongResponse>(`/program/dong?province=${province}&sigungu=${sigungu}`);
}

// 2.3 프로그램 조회
export const postProgram = (data: ProgramRequest, page: number, size: number) => {
  return apiPost<ProgramResponse>(`/program?page=${page}&size=${size}`, data);
}