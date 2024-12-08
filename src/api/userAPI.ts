import { authApiGet } from "./apiUtil";
import { ScrapResponse, UserResponse } from "./types/user";

export const getScrap = (lastScrapId?: number) => {
  const params = lastScrapId ? { lastScrapId } : undefined;
  return authApiGet<ScrapResponse>('/program/scrap', params);
};



export const getUser = () => {
  return authApiGet<UserResponse>("/user");
};