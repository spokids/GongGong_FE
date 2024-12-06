import { authApiPost } from "./apiUtil";
import { RegisterParams, RegisterResponse } from "./types/member";

export const postRegister = ({ userInputId, password, nickName }: RegisterParams) => {
  return authApiPost<RegisterResponse>("/auth/register", {
    userInputId,
    password,
    nickName,
  });
};
