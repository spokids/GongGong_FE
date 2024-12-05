import { authApiPost } from "./apiUtil";
import {
  ChoiceChatRoomResponse,
  AbilityResponse,
  PostAbilityParams,
} from "./types/chatbot";

export const postChoiceChatRoom = (choice: string) => {
  return authApiPost<ChoiceChatRoomResponse>("/chatRoom/choice", {
    choice,
  });
};

export const postAbility = ({
  chatRoomId,
  abilities,
  region,
  page, 
}: PostAbilityParams) => {
  let url = "/chat/ability";
  if (page) {
    url += `?page=${page}`;
  }

  return authApiPost<AbilityResponse>(url, {
    chatRoomId,
    abilities,
    region,
  });
};
