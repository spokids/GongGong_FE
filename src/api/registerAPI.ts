import { authApiPost } from "./apiUtil";
import { RegisterParams, RegisterResponse } from "./types/auth";

export const postRegister = ({ userInputId, password, nickName }: RegisterParams) => {
  return authApiPost<RegisterResponse>("/auth/register", {
    userInputId,
    password,
    nickName,
  });
};
