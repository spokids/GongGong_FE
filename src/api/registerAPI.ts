import { authApiPost } from "./apiUtil";
import { RegisterParams, RegisterResponse } from "./types/auth";

export const postRegister = ({ userId, password, nickName }: RegisterParams) => {
  return authApiPost<RegisterResponse>("/auth/register", {
    userId,
    password,
    nickName,
  });
};
