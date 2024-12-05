import { authApiPost } from "./apiUtil";
import { LoginResponse, LoginParams } from "./types/member";

export const postLogin = ({ userId, password }: LoginParams) => {
  return authApiPost<LoginResponse>("/auth/login", {
    userInputId,
    password,
  });
};
