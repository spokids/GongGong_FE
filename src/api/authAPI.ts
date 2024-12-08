import { apiPost, authApiPost } from "./apiUtil";
import { LoginParams, LoginResponse, RegisterParams } from "./types/auth";

export const postLogin = (data: LoginParams) => {
  return apiPost<LoginResponse>("/auth/login", data);
};

export const postRegister = ({ userInputId, password, nickName }: RegisterParams) => {
  return authApiPost("/auth/register", {
    userInputId,
    password,
    nickName,
  });
};