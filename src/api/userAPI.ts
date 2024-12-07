import { authApiGet } from "./apiUtil";
import { ScrapResponse, UserResponse } from "./types/user";

export const getScrap = (choice: string) => {
  return authApiGet<ScrapResponse>("/chatRoom/choice", {
    choice,
  });
};

export const getUser = () => {
  return authApiGet<UserResponse>("/user");
};