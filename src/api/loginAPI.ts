import { apiPost } from "./apiUtil";
import { LoginParams, LoginResponse } from "./types/auth";

export const postLogin = (data: LoginParams) => {
  return apiPost<LoginResponse>("/auth/login", data);
};
