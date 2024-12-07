import { authApiPost } from "./apiUtil";
import { RegisterParams } from "./types/auth";

export const postRegister = ({ userInputId, password, nickName }: RegisterParams) => {
  return authApiPost("/auth/register", {
    userInputId,
    password,
    nickName,
  });
};
