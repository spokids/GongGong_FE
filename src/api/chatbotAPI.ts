import { authApiPost } from "./apiUtil";

export const postChoiceChatRoom = (choice: string) => {
  return authApiPost("/chatRoom/choice", {
    choice,
  });
};
